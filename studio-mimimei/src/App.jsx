import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Info from './components/Info';
import Footer from './components/Footer';

/**
 * App — Root component for Studio Mimimei - Beauty Academy Landing Page
 *
 * Architecture:
 *  src/
 *  ├── components/
 *  │   ├── Header.jsx    — Sticky nav + mobile drawer
 *  │   ├── Hero.jsx      — Full-bleed hero with CTA
 *  │   ├── Services.jsx  — Services grid
 *  │   ├── Team.jsx      — 3 professional cards with procedure photos
 *  │   ├── Info.jsx      — Policies, amenities, payment methods
 *  │   └── Footer.jsx    — Contact, schedule, CTA
 *  ├── index.css         — Global styles + design tokens
 *  ├── main.jsx          — React entry point
 *  └── App.jsx           — This file
 */
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Info />
      </main>
      <Footer />
    </div>
  );
}
