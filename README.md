# Maid In India

## 📌 Problem
Domestic care in India has historically lacked standardization, training, and reliable background verification. Homeowners often struggle to find trustworthy, verified, and professional helpers (cooks, cleaners, babysitters, etc.) while domestic workers frequently face unfair wages and lack access to training and job security.

## ✨ What Maid In India Does
Maid In India is a premium platform connecting homeowners with highly trained, vetted, and verified domestic helpers. It serves as a modern bridge that ensures premium care for households and dignified, ethical jobs for helpers.

### 1) Multi-Service Selection
Allows users to choose from a diverse range of domestic needs: cooking, cleaning, laundry, babysitting, elderly companion care, massage support, and full-time/part-time maid services.

### 2) Vetted Talent Pool
All candidates undergo strict face-to-face screenings, identity/background checks, and reference verifications before being matched.

### 3) Customer Interest Ingestion
Captures precise service bookings specifying dates, timing, service types, and client details, which are processed to find the perfect matched professional.

### 4) Interactive Offerings Carousel
Features an interactive sliding showcase where users can preview different domestic service scenes to help them decide on the right option.

### 5) Custom Booking & Request Flow
A dedicated client booking tool with input sanitization and mobile validation to capture and process scheduling preferences.

### 6) Professional Support Desk
A dedicated support connection and contact page ensuring continuous assistance for both clients and helper personnel.

## 🧠 Core Idea
The core philosophy is built on two pillars: **Premium domestic care** and **Ethical employment**. By providing professional training and fair work terms, we upskill domestic workers and match them with clients seeking high-quality household care.

## 🏗️ How it Works

### Step 1 — Inputs
Clients fill out the customized booking form detailing their service requirements (service category, frequency, timing) and contact details.

### Step 2 — Matching & Scheduling
The backend office validates the lead, matches it with certified helpers in the area, and coordinates schedules to establish household support.

## 📊 Premium Standards Philosophy
We operate on a 4.9/5 star standard where quality, punctuality, and reliability are constantly monitored. Helpers are regularly upskilled in hygiene, safety protocols, and modern appliance usage.

## 🧩 Key Features
- **100% Verified Staff**: Continuous document checks and background profiling.
- **Dynamic UI**: Features beautiful animations, floating bubbles, and high-contrast styling.
- **Responsive Layout**: Seamless experience across mobile, tablet, and desktop views.
- **Validation-Driven Forms**: Booking and contact sections validate phone numbers and inputs.

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern declarative UI library.
- **Vite 8**: Next-generation frontend tooling and bundler.
- **Tailwind CSS v3**: Utility-first CSS framework for custom styling.
- **React Router DOM v7**: Client-side routing.
- **Lucide React**: Premium icon pack.

### Backend
- *Static SPA* (Current frontend client. Can be connected to any standard Express/Node.js or Python backend APIs).

### Database
- *Currently Client-Side Lead Generation* (Ready to integrate with database endpoints like PostgreSQL or MongoDB).

### Intelligence Layer / External APIs
- *Verification Engines*: Ready to integrate with Aadhaar/Govt identity validation APIs.

### Utilities & File Handling
- **Asset Bundler**: Vite asset processor for image hashing and packaging.

### Deployment
- **GitHub Pages**: Automated CI/CD deployment workflow using GitHub Actions.

## 📂 Project Structure
```
MaidInIndia/
├── .github/workflows/   # GitHub Actions deployment pipelines
├── public/              # Static public assets (favicon.jpg, icons.svg)
├── src/
│   ├── assets/          # Bundled images & styles
│   ├── components/      # Shared React components (Navigation, Footer, IntroScreen)
│   ├── data/            # Local data models & configuration (servicesData.js)
│   ├── hooks/           # Custom React hooks (useScrollReveal)
│   ├── pages/           # Page views (Home, Services, Booking, Verification, Story, Contact)
│   ├── App.jsx          # Application entry routing and layout
│   └── main.jsx         # Render mount point
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## ⚙️ Local Setup

### 1) Clone the repo
```bash
git clone https://github.com/Reya-Doshi/Maid-In-India.git
cd Maid-In-India
```

### 2) Backend setup
*(Note: Currently a frontend-only application. Backend setup will be updated when API integration is deployed.)*

### 3) Frontend setup
```bash
npm install
npm run dev
```

## 🌍 Deployment
The application is set up for automatic deployment to GitHub Pages. Every commit pushed to the `main` branch triggers the GitHub Actions workflow located at `.github/workflows/deploy.yml` which builds and publishes the site.

To build manually:
```bash
npm run build
```

## 🔐 Environment Variables

### Backend
*(Not applicable currently)*

### Frontend
Create a `.env` file in the root directory to define variables:
```env
VITE_API_URL=http://localhost:5000
```

## 🧪 Example User Flow
1. **Explore**: User lands on the homepage, experiences the intro animation, and navigates to the *Services* page.
2. **Review Services**: Clicks on a card (e.g., Cooking) in the scrolling marquee to read details.
3. **Submit Booking**: Goes to *Book Now*, fills in requirements, enters a 10-digit mobile number, and submits.
4. **Lead Generated**: The form validates the submission and displays a success notification.

## 🎯 Why This Architecture is Different
Unlike traditional lead forms, our client-side setup is fully decoupled, using static-site generation (SSG) with optimized asset hashing in Vite. The relative asset loading configuration makes it extremely resilient to deployment subpath variations (like GitHub Pages).

## ⚠️ Current Limitations / Future Work
- **Database Integration**: Lead forms currently reset and show a success banner; they will be wired up to a backend API database.
- **OAuth User Portal**: Future iterations will feature a login section for helpers and customers to manage schedules.

## 📜 License
This project is licensed under the MIT License.

## 🙌 Acknowledgements
Special thanks to all the domestic workers in India who keep households running smoothly every single day.
