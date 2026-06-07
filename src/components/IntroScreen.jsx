import { useEffect, useState } from 'react';

export default function IntroScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center animate-netflix-zoom select-none">
        <h1 className="text-5xl md:text-8xl font-black tracking-widest text-black uppercase text-center" style={{ textShadow: '0 0 20px rgba(138,3,3,0.4)' }}>
          Maid In India
        </h1>
        <div className="mt-8 w-px h-24 bg-gradient-to-b from-[#8a0303] to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}
