import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  Clock,
  Mail,
  CalendarCheck,
  Phone,
} from 'lucide-react';

// Inline SVG icon — Instagram not available in this lucide-react version
function Instagram({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const BOOKING_URL = 'https://www.trinks.com/studioborges-beautyacademy';
const INSTAGRAM_URL = 'https://www.instagram.com/studio.mimimei';
const EMAIL = 'boorges.studio@gmail.com';
const ADDRESS = 'R. Ulisses Soares, 12 - Pestana, Osasco - SP, 06122-110';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const schedule = [
  { day: 'Segunda-feira', hours: 'Fechado', closed: true },
  { day: 'Terça-feira', hours: '09:00 – 18:00', closed: false },
  { day: 'Quarta-feira', hours: '09:00 – 18:00', closed: false },
  { day: 'Quinta-feira', hours: '09:00 – 18:00', closed: false },
  { day: 'Sexta-feira', hours: '09:00 – 18:00', closed: false },
  { day: 'Sábado', hours: 'A confirmar', closed: false, pending: true },
  { day: 'Domingo', hours: 'Fechado', closed: true },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer id="contato" className="bg-violet-950 text-white">
      {/* Pre-footer CTA */}
      <div className="gradient-primary py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4">
            Pronta para se{' '}
            <span className="italic text-pink-200">transformar?</span>
          </h2>
          <p className="text-violet-100/80 text-lg mb-8">
            Agende agora e garanta o seu horário. Atendimento exclusivo espera por você.
          </p>
          <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-white text-violet-700 font-semibold text-lg px-10 py-4 rounded-2xl shadow-2xl hover:bg-violet-50 transition-colors"
          >
            <CalendarCheck className="w-5 h-5" />
            Agende seu Horário
          </motion.a>
        </motion.div>
      </div>

      {/* Main footer content */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-4">
              <h3 className="font-display text-2xl font-semibold text-white">
                Studio Mimimei
              </h3>
              <p className="text-violet-400 text-sm tracking-widest uppercase mt-0.5">
                Beauty Academy
              </p>
            </div>
            <p className="text-violet-300/70 text-sm leading-relaxed mb-5">
              Beleza, elegância e cuidado em um só lugar. Transformamos sua experiência de beleza com atendimento exclusivo.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              @studio.mimimei
            </a>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-5 text-base tracking-wide">
              Contato & Localização
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin className="w-5 h-5 text-violet-400 shrink-0 mt-0.5 group-hover:text-pink-400 transition-colors" />
                <span className="text-violet-300/80 text-sm leading-relaxed group-hover:text-violet-200 transition-colors">
                  R. Ulisses Soares, 12 - Pestana<br />
                  Osasco - SP, 06122-110
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 text-violet-400 shrink-0 group-hover:text-pink-400 transition-colors" />
                <span className="text-violet-300/80 text-sm group-hover:text-violet-200 transition-colors">
                  {EMAIL}
                </span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Instagram className="w-5 h-5 text-violet-400 shrink-0 group-hover:text-pink-400 transition-colors" />
                <span className="text-violet-300/80 text-sm group-hover:text-violet-200 transition-colors">
                  instagram.com/studio.mimimei
                </span>
              </a>
            </div>
          </motion.div>

          {/* Schedule column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="font-semibold text-white mb-5 text-base tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-violet-400" />
              Horário de Funcionamento
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center px-4 py-2.5 rounded-xl text-sm ${
                    item.closed
                      ? 'bg-white/5 opacity-50'
                      : item.pending
                      ? 'bg-amber-900/20 border border-amber-700/30'
                      : 'bg-white/8 border border-violet-800/40'
                  }`}
                >
                  <span
                    className={
                      item.closed
                        ? 'text-violet-400/50'
                        : 'text-violet-200 font-medium'
                    }
                  >
                    {item.day}
                  </span>
                  <span
                    className={
                      item.closed
                        ? 'text-rose-400/70 text-xs font-medium'
                        : item.pending
                        ? 'text-amber-400 text-xs font-medium'
                        : 'text-violet-300 text-xs font-semibold'
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-violet-800/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-violet-400/60"
        >
          <p>© {new Date().getFullYear()} Studio Mimimei - Beauty Academy. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com
            <span className="text-pink-400">♥</span>
            para realçar a sua beleza
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
