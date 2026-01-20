// Cinematic intro and page transition script
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Helper: split text into span.chars
  function splitLetters(el){
    const text = el.textContent.trim();
    el.textContent = '';
    const frag = document.createDocumentFragment();
    for(let i=0;i<text.length;i++){
      const ch = document.createElement('span');
      ch.className = 'char';
      // preserve visible spacing during the stagger by using non-breaking spaces for regular spaces
      ch.textContent = text[i] === ' ' ? '\u00A0' : text[i];
      frag.appendChild(ch);
    }
    el.appendChild(frag);
    return el.querySelectorAll('.char');
  }

  // Intro animation sequence (refined): cinematic zoom -> gentle upward lift -> reveal header
  function playIntro(){
    const intro = document.getElementById('intro');
    if(!intro) return Promise.resolve();
    if(prefersReduced) { intro.style.display='none'; return Promise.resolve(); }

    const title = intro.querySelector('.title');
    const chars = splitLetters(title);

    return new Promise((resolve)=>{
      // slower, cinematic stagger for letters
      chars.forEach((ch,i)=>{
        const delay = 220 + i*80; // slower stagger
        ch.animate([
          {opacity:0, transform:'translateY(36px) scale(0.98)', filter:'blur(14px)'},
          {opacity:1, transform:'translateY(0) scale(1)', filter:'blur(0px)'}
        ],{duration:900, easing:'cubic-bezier(.2,.9,.2,1)', delay, fill:'forwards'});
      });

      // gentle pulse and a slow forward zoom after letters appear
      const totalDelay = 220 + chars.length*80 + 1000;
      setTimeout(()=>{
        const pulse = intro.querySelector('.pulse');
        if(pulse){ pulse.animate([{transform:'scale(1)'},{transform:'scale(1.08)'}],{duration:1100,easing:'ease-in-out',fill:'forwards'}); }
        title.animate([{transform:'scale(1)'},{transform:'scale(1.04)'}],{duration:900,fill:'forwards',easing:'cubic-bezier(.2,.9,.2,1)'});
      }, totalDelay);

      // Pause, then perform a centered cinematic zoom + gentle fade into the page
      setTimeout(()=>{
        const header = document.querySelector('.site-header');
        // tasteful zoom: scale up slightly to create a cinematic 'push' into the app
        const zoom = title.animate([
          {transform:'scale(1)', opacity:1, filter:'blur(0px)'},
          {transform:'scale(1.12)', opacity:0.95}
        ],{duration:1100, easing:'cubic-bezier(.2,.9,.2,1)',fill:'forwards'});

        zoom.onfinish = ()=>{
          // gentle upward fade (no sideways movement)
          title.animate([
            {transform:'scale(1.12)', opacity:0.95},
            {transform:'scale(1.14) translateY(-18px)', opacity:0}
          ],{duration:900,easing:'ease-in-out',fill:'forwards'});

          // reveal header smoothly (logo + brand)
          if(header){ header.classList.add('ready'); header.animate([{opacity:0},{opacity:1}],{duration:700,fill:'forwards'}); }

          // fade overlay and remove after animation
          setTimeout(()=>{
            intro.animate([{opacity:1},{opacity:0}],{duration:700,easing:'ease-in-out',fill:'forwards'});
            setTimeout(()=>{ if(intro.parentNode) intro.parentNode.removeChild(intro); resolve(); },760);
          },520);
        };
      }, totalDelay + 900);
    });
  }

  // Page show/hide transitions
  function showPage(){
    const page = document.querySelector('.page');
    if(!page) return;
    requestAnimationFrame(()=>page.classList.add('visible'));
  }

  function bindNav(){
    document.querySelectorAll('a[data-nav]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(!href || href.startsWith('#')) return;
        e.preventDefault();
        // exit animation
        const page = document.querySelector('.page');
        page.classList.remove('visible');
        page.animate([{opacity:1, transform:'translateY(0)'},{opacity:0, transform:'translateY(-20px)'}],{duration:600,easing:'cubic-bezier(.2,.9,.2,1)'});
        setTimeout(()=>{ window.location.href = href; },620);
      });
    });
  }

  // Floating card cursor parallax
  function bindFloats(){
    // Disabled floating/parallax interactions to respect 'no moving or shifting cards' requirement.
    return;
  }

  // Service card expand behavior
  function bindServiceCards(){
    const grid = document.querySelector('.services-grid');
    if(!grid) return;

    grid.addEventListener('click', function(e){
      const card = e.target.closest('.service');
      if(!card) return;
      // toggle existing detail for this card
      const existing = grid.querySelector('.service-detail');
      const isSame = existing && existing.dataset.source === card.dataset.key;
      if(existing) existing.parentNode.removeChild(existing);
      if(isSame) return; // was open, now closed

      // build detail panel from card content
      const title = card.querySelector('h4') ? card.querySelector('h4').textContent.trim() : card.dataset.key;
      const desc = card.querySelector('.details') ? card.querySelector('.details').textContent.trim() : '';
      const suitable = card.querySelector('.meta') ? card.querySelector('.meta').textContent.trim() : '';
      const addons = card.dataset.addons ? card.dataset.addons : 'Optional add-ons: none listed.';

      const detail = document.createElement('div');
      detail.className = 'service-detail';
      detail.dataset.source = card.dataset.key || '';

      detail.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="meta-list">
          <div class="item"><strong>Suitable for:</strong> ${suitable}</div>
          <div class="item"><strong>Optional add-ons:</strong> ${addons}</div>
        </div>
      `;

      // insert after the clicked card in the grid (find index)
      const children = Array.from(grid.children);
      const idx = children.indexOf(card);
      if(idx >= 0 && idx < children.length - 1){
        grid.insertBefore(detail, children[idx + 1]);
      } else {
        grid.appendChild(detail);
      }
      // smooth reveal
      detail.animate([{opacity:0, transform:'translateY(-6px)'},{opacity:1, transform:'translateY(0)'}],{duration:360,easing:'ease-out',fill:'forwards'});
    });
  }

  // Pricing flow: simple mapping to show example ranges
  function bindPricingFlow(){
    const svc = document.getElementById('serviceSelect');
    const radios = Array.from(document.querySelectorAll('input[name="engagementType"]'));
    const out = document.getElementById('priceRanges');
    const timing = document.getElementById('timingSelect');
    const checkoutBtn = document.getElementById('checkoutBtn');
    if(!svc || !out) return;

    const priceMap = {
      cooking: { fulltime: '₹12,000 - ₹18,000 / month', parttime: '₹6,000 - ₹9,000 / month', hourly: '₹150 - ₹350 / hour' },
      cleaning: { fulltime: '₹9,000 - ₹14,000 / month', parttime: '₹4,000 - ₹7,000 / month', hourly: '₹120 - ₹300 / hour' },
      washing: { fulltime: '₹7,000 - ₹11,000 / month', parttime: '₹3,500 - ₹6,000 / month', hourly: '₹100 - ₹220 / hour' },
      babysitter: { fulltime: '₹10,000 - ₹16,000 / month', parttime: '₹5,000 - ₹8,000 / month', hourly: '₹150 - ₹400 / hour' },
      elderly: { fulltime: '₹11,000 - ₹17,000 / month', parttime: '₹5,500 - ₹9,000 / month', hourly: '₹160 - ₹420 / hour' },
      'married-couple': { fulltime: '₹22,000 - ₹30,000 / month', parttime: '₹11,000 - ₹16,000 / month', hourly: 'N/A' },
      japa: { fulltime: '₹14,000 - ₹20,000 / month', parttime: '₹7,000 - ₹11,000 / month', hourly: '₹200 - ₹450 / hour' },
      massage: { fulltime: '₹10,000 - ₹15,000 / month', parttime: '₹5,000 - ₹8,000 / month', hourly: '₹300 - ₹700 / hour' },
      fulltime: { fulltime: '₹9,000 - ₹16,000 / month', parttime: '₹4,500 - ₹8,000 / month', hourly: 'N/A' },
      parttime: { fulltime: '₹9,000 - ₹16,000 / month', parttime: '₹4,500 - ₹8,000 / month', hourly: 'N/A' },
      livein: { fulltime: '₹10,000 - ₹18,000 / month', parttime: '₹5,000 - ₹9,000 / month', hourly: 'N/A' },
      hourly: { fulltime: 'N/A', parttime: 'N/A', hourly: '₹100 - ₹500 / hour' }
    };

    function update(){
      const service = svc.value;
      const chosen = radios.find(r=>r.checked);
      const type = chosen ? chosen.value : null;
      const when = timing ? timing.value : null;
      if(!type){ out.textContent = 'Choose an engagement type to see sample ranges.'; if(checkoutBtn) checkoutBtn.disabled = true; return; }
      if(!when){ out.textContent = 'Choose a timing / duration to see sample ranges.'; if(checkoutBtn) checkoutBtn.disabled = true; return; }
      const ranges = (priceMap[service] && priceMap[service][type]) || 'Range not available.';
      out.textContent = ranges + ' · Timing: ' + when.replace(/-/g,' ');
      if(checkoutBtn) checkoutBtn.disabled = false;
    }

    svc.addEventListener('change', update);
    radios.forEach(r=>r.addEventListener('change', update));
    if(timing) timing.addEventListener('change', update);
    if(checkoutBtn){
      checkoutBtn.addEventListener('click', function(){
        // Placeholder checkout action — redirect to contact page with query params
        const service = svc.value;
        const chosen = radios.find(r=>r.checked);
        const type = chosen ? chosen.value : '';
        const when = timing ? timing.value : '';
        const query = `?service=${encodeURIComponent(service)}&type=${encodeURIComponent(type)}&when=${encodeURIComponent(when)}`;
        window.location.href = 'contact.html' + query;
      });
    }
  }

  // Quick form mock submit handler (shared across pages)
  function handleMockSubmit(form){
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // friendly, cinematic confirmation
      alert('Thanks! We received your request. Our team will call you shortly.');
      form.reset();
    });
  }

  // Initialize sequence on DOM ready
  document.addEventListener('DOMContentLoaded', ()=>{
    bindNav(); bindFloats(); bindServiceCards(); bindPricingFlow();
    // Attach form handlers
    handleMockSubmit(document.getElementById('quickForm'));
    handleMockSubmit(document.getElementById('contactForm'));

    // Intro should run only on the homepage and only once per session
    try{
      const introPlayed = sessionStorage.getItem('introPlayed');
      const isHome = document.body && document.body.classList && document.body.classList.contains('page-home');
      const introEl = document.getElementById('intro');

      if(isHome && introEl && !introPlayed && !prefersReduced){
        playIntro().then(()=>{ showPage(); sessionStorage.setItem('introPlayed','1'); });
      } else {
        // If intro exists but should not play, remove it instantly to avoid flash
        if(introEl){ introEl.parentNode.removeChild(introEl); }
        // ensure header is visible even when intro doesn't run
        const headerEl = document.querySelector('.site-header');
        if(headerEl) headerEl.classList.add('ready');
        showPage();
      }
    }catch(e){
      // fallback: show page
      showPage();
    }
  });

})();
