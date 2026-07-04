import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Eye,
  Sparkles,
  Scissors,
  Dumbbell,
  BookOpen,
  Hand,
} from 'lucide-react';

const services = [
  {
    icon: Eye,
    title: 'Extensão de Cílios',
    description:
      'Volume Russo, Clássico, Hybrid e Megavolume. Cílios impecáveis que duram semanas.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    highlight: true,
  },
  {
    icon: Hand,
    title: 'Manicure e Pedicure',
    description:
      'Cuidado completo para suas mãos e pés com acabamento impecável e produtos de qualidade.',
    color: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
  },
  {
    icon: Sparkles,
    title: 'Alongamento de Unhas',
    description:
      'Gel, fibra de vidro ou acrigel. Unhas perfectas em diversos formatos e comprimentos.',
    color: 'from-fuchsia-500 to-pink-500',
    bg: 'bg-fuchsia-50',
  },
  {
    icon: Scissors,
    title: 'Design de Sobrancelhas',
    description:
      'Henna, micropigmentação e design personalizado que valoriza o seu olhar naturalmente.',
    color: 'from-indigo-500 to-violet-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: Dumbbell,
    title: 'Massagem Relaxante',
    description:
      'Técnicas terapêuticas para aliviar tensões e proporcionar bem-estar profundo.',
    color: 'from-purple-400 to-violet-500',
    bg: 'bg-purple-50',
  },
  {
    icon: BookOpen,
    title: 'Cursos Profissionalizantes',
    description:
      'Aprenda com especialistas. Cursos certificados para alavancar sua carreira na beleza.',
    color: 'from-violet-600 to-purple-700',
    bg: 'bg-violet-50',
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative card-hover rounded-3xl p-7 ${service.bg} border border-white shadow-sm overflow-hidden`}
    >
      {/* Background decoration */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} shadow-md mb-5`}
      >
        <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3 className="font-display font-semibold text-xl text-violet-900 mb-2 leading-snug">
        {service.title}
      </h3>
      <p className="text-violet-700/70 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Highlight badge */}
      {service.highlight && (
        <span className="absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase bg-violet-600 text-white px-2.5 py-1 rounded-full">
          Popular
        </span>
      )}

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500 rounded-b-3xl`}
      />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="servicos" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-violet-500 font-medium tracking-[0.15em] text-sm uppercase mb-3"
          >
            O que oferecemos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-violet-950 ornament-line"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-violet-700/60 text-lg max-w-2xl mx-auto mt-6"
          >
            Experimente a arte da beleza em um espaço pensado para o seu conforto e
            bem-estar, com profissionais especializados.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Differentiator banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 gradient-primary rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 text-white shadow-xl"
        >
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
              Maximize seu tempo conosco ✨
            </h3>
            <p className="text-violet-100/80 text-base">
              Realize mais de um procedimento simultaneamente e aproveite ao máximo a sua visita.
            </p>
          </div>
          <a
            href="https://www.trinks.com/studioborges-beautyacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-violet-700 font-semibold px-7 py-3.5 rounded-2xl hover:bg-violet-50 transition-colors shadow-md whitespace-nowrap"
          >
            Agendar Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
