import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';



const team = [
  {
    id: 1,
    name: 'Especialista em Cílios',
    role: 'Lash Artist',
    specialty: 'Extensão de Cílios',
    description:
      'Especialista certificada em Volume Russo, Clássico e Hybrid. Anos de experiência transformando olhares com técnica e cuidado.',
    procedures: [
      {
        label: 'Volume Russo',
        img: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&q=80&fit=crop',
        alt: 'Extensão de cílios Volume Russo',
      },
      {
        label: 'Cílios Clássico',
        img: 'https://images.unsplash.com/photo-1583001809873-a128495da465?w=300&q=80&fit=crop',
        alt: 'Extensão de cílios Clássico',
      },
    ],
    gradient: 'from-violet-600 to-purple-700',
    avatarBg: 'bg-violet-100',
    initials: 'LA',
  },
  {
    id: 2,
    name: 'Especialista em Unhas',
    role: 'Nail Artist',
    specialty: 'Manicure & Nail Design',
    description:
      'Artista das unhas com domínio em manicure, pedicure, gel e nail art. Cada detalhe é uma obra de arte.',
    procedures: [
      {
        label: 'Nail Art',
        img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80&fit=crop',
        alt: 'Nail art e design de unhas',
      },
      {
        label: 'Gel & Acrigel',
        img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80&fit=crop&crop=right',
        alt: 'Alongamento de unhas em gel',
      },
    ],
    gradient: 'from-pink-500 to-rose-600',
    avatarBg: 'bg-pink-100',
    initials: 'NA',
  },
  {
    id: 3,
    name: 'Especialista em Estética',
    role: 'Beauty Specialist',
    specialty: 'Sobrancelhas & Estética',
    description:
      'Profissional dedicada ao design de sobrancelhas e procedimentos estéticos que realçam a beleza natural.',
    procedures: [
      {
        label: 'Design de Sobrancelhas',
        img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&q=80&fit=crop',
        alt: 'Design de sobrancelhas',
      },
      {
        label: 'Henna & Micropigmentação',
        img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80&fit=crop',
        alt: 'Henna de sobrancelhas',
      },
    ],
    gradient: 'from-fuchsia-500 to-violet-600',
    avatarBg: 'bg-fuchsia-100',
    initials: 'BS',
  },
];

function ProcedurePhoto({ procedure, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group overflow-hidden rounded-2xl aspect-square"
    >
      <img
        src={procedure.img}
        alt={procedure.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5 text-white" />
          <span className="text-white text-xs font-medium">{procedure.label}</span>
        </div>
      </div>
    </motion.div>
  );
}

function TeamCard({ member, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-500 border border-violet-50"
    >
      {/* Card header with gradient */}
      <div className={`relative h-32 bg-gradient-to-br ${member.gradient} overflow-hidden`}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Avatar */}
        <div className={`absolute -bottom-8 left-6 w-16 h-16 ${member.avatarBg} rounded-2xl border-4 border-white shadow-md flex items-center justify-center`}>
          <span className="font-display font-bold text-violet-700 text-lg">{member.initials}</span>
        </div>
        {/* Specialty badge */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1">
          <span className="text-white text-xs font-medium">{member.role}</span>
        </div>
      </div>

      {/* Content */}
      <div className="pt-11 px-6 pb-6">
        <h3 className="font-display font-semibold text-xl text-violet-950 mb-1">
          {member.name}
        </h3>
        <p className="text-violet-500 text-sm font-medium mb-3">{member.specialty}</p>
        <p className="text-violet-700/60 text-sm leading-relaxed mb-5">
          {member.description}
        </p>

        {/* Procedure photos grid */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <Camera className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-semibold text-violet-400 tracking-wider uppercase">
              Procedimentos
            </span>
          </div>

          {/* Photo placeholder note */}
          <div className="bg-violet-50 border border-dashed border-violet-200 rounded-2xl p-3 mb-3 text-center">
            <p className="text-[11px] text-violet-400 italic">
              📸 As fotos dos procedimentos serão adicionadas aqui futuramente
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {member.procedures.map((proc, i) => (
              <ProcedurePhoto key={proc.label} procedure={proc} delay={0.1 * i} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`h-0.5 w-full bg-gradient-to-r ${member.gradient} rounded-full opacity-30 mb-4`} />

        {/* Footer */}
        <a
          href="https://www.instagram.com/studio.mimimei"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-violet-600 font-medium hover:text-violet-800 transition-colors"
        >
          <InstagramIcon className="w-4 h-4" />
          Ver portfólio no Instagram
        </a>
      </div>
    </motion.article>
  );
}

export default function Team() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="equipe" className="py-24 bg-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-violet-500 font-medium tracking-[0.15em] text-sm uppercase mb-3"
          >
            Nossas Profissionais
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-violet-950 ornament-line"
          >
            Nossa Equipe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-violet-700/60 text-lg max-w-2xl mx-auto mt-6"
          >
            Profissionais apaixonadas e dedicadas à sua beleza, com técnicas
            modernas e atendimento personalizado.
          </motion.p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
