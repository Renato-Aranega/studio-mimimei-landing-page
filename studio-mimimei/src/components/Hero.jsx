import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Star, Clock } from 'lucide-react';

const BOOKING_URL = 'https://www.trinks.com/studioborges-beautyacademy';

const badges = [
  { icon: Star, text: 'Atendimento Premium' },
  { icon: Clock, text: 'Procedimentos Simultâneos' },
  { icon: CalendarCheck, text: 'Agendamento Online' },
];

// Decorative floating orbs for visual richness
function Orb({ className }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
    >
      {/* Decorative background orbs */}
      <Orb className="w-96 h-96 bg-pink-400 -top-20 -right-20" />
      <Orb className="w-72 h-72 bg-violet-300 bottom-10 -left-20" />
      <Orb className="w-64 h-64 bg-fuchsia-400 top-1/2 right-1/4" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wide">
                Beauty Academy · Osasco/SP
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="section-title text-white mb-4"
            >
              Studio{' '}
              <span className="italic text-pink-300">Mimimei</span>
              <br />
              <span className="text-violet-200 font-normal not-italic text-3xl sm:text-4xl lg:text-5xl">
                Beauty Academy
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-violet-100/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Atendimento exclusivo e personalizado.{' '}
              <strong className="text-white font-semibold">
                Otimizamos o seu tempo:
              </strong>{' '}
              realize mais de um procedimento simultaneamente.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2"
                >
                  <Icon className="w-4 h-4 text-pink-300" />
                  <span className="text-white/85 text-sm">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="shimmer inline-flex items-center justify-center gap-2 bg-white text-violet-700 font-semibold text-base px-8 py-4 rounded-2xl shadow-2xl hover:shadow-white/30 transition-all duration-300"
              >
                <CalendarCheck className="w-5 h-5" />
                Agende seu Horário
              </motion.a>
              <motion.a
                href="#servicos"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium text-base px-8 py-4 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Conheça os Serviços
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Hero Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main image */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl glow-violet"
              >
                <img
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80&fit=crop&auto=format"
                  alt="Extensão de cílios - Studio Mimimei Beauty Academy"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent" />
                {/* Label */}
                <div className="absolute bottom-5 left-5 right-5 glass rounded-xl px-4 py-3">
                  <p className="text-violet-900 text-sm font-semibold">✨ Extensão de Cílios</p>
                  <p className="text-violet-600 text-xs">Volume Russo & Clássico</p>
                </div>
              </motion.div>

              {/* Floating card: top-right */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-6 -right-6 glass rounded-2xl p-3 shadow-xl hidden sm:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=120&q=80&fit=crop"
                  alt="Design de sobrancelhas"
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <p className="text-[11px] font-medium text-violet-800 mt-1.5 text-center">Sobrancelhas</p>
              </motion.div>

              {/* Floating card: bottom-left */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-8 -left-8 glass rounded-2xl p-3 shadow-xl hidden sm:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=120&q=80&fit=crop&crop=bottom"
                  alt="Manicure e pedicure"
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <p className="text-[11px] font-medium text-violet-800 mt-1.5 text-center">Manicure</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="#FEFCFF" />
        </svg>
      </div>
    </section>
  );
}
