import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  AlertTriangle,
  Clock,
  CreditCard,
  Wifi,
  Tv,
  XCircle,
  Banknote,
  ShieldCheck,
} from 'lucide-react';

const paymentMethods = [
  'Visa', 'Mastercard', 'American Express', 'Hipercard',
  'Elo Crédito', 'Maestro/Redeshop', 'Visa Electron',
  'Cartão de Débito', 'Elo Débito', 'Dinheiro', 'Vale-Presente', 'PIX',
];

const amenities = [
  { icon: Wifi, label: 'Wi-Fi Gratuito' },
  { icon: Tv, label: 'TV no Espaço' },
  { icon: CreditCard, label: 'Aceita Cartão' },
];

function InfoCard({ icon: Icon, title, children, accent = 'violet', delay = 0 }) {
  const accentMap = {
    violet: 'border-violet-200 bg-violet-50',
    amber: 'border-amber-200 bg-amber-50',
    rose: 'border-rose-200 bg-rose-50',
    emerald: 'border-emerald-200 bg-emerald-50',
  };
  const iconMap = {
    violet: 'text-violet-600 bg-violet-100',
    amber: 'text-amber-600 bg-amber-100',
    rose: 'text-rose-600 bg-rose-100',
    emerald: 'text-emerald-600 bg-emerald-100',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-3xl border-2 ${accentMap[accent]} p-7`}
    >
      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${iconMap[accent]} mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-display font-semibold text-xl text-violet-950 mb-3">{title}</h3>
      {children}
    </motion.div>
  );
}

export default function Info() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="informacoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-violet-500 font-medium tracking-[0.15em] text-sm uppercase mb-3"
          >
            Saiba mais
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-violet-950 ornament-line"
          >
            Informações & Políticas
          </motion.h2>
        </div>

        {/* Important Alert Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex gap-4 items-start bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 sm:p-8"
        >
          <div className="shrink-0 w-11 h-11 bg-amber-100 rounded-2xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-amber-900 mb-1">
              Confirmação de Agendamento
            </h3>
            <p className="text-amber-800/80 leading-relaxed">
              Após a solicitação de agendamento, é{' '}
              <strong className="font-semibold text-amber-900">NECESSÁRIO aguardar a confirmação</strong>{' '}
              do estabelecimento para concluir o seu horário. Seu agendamento só estará confirmado após o retorno da equipe.
            </p>
          </div>
        </motion.div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Cancellation Policy */}
          <InfoCard icon={Clock} title="Política de Cancelamento" accent="rose" delay={0.1}>
            <p className="text-violet-700/70 text-sm leading-relaxed">
              Cancelamentos devem ser informados com no mínimo{' '}
              <strong className="text-violet-900 font-semibold">24 horas de antecedência</strong>{' '}
              via WhatsApp. Cancelamentos fora deste prazo podem incorrer em taxa.
            </p>
          </InfoCard>

          {/* Amenities */}
          <InfoCard icon={ShieldCheck} title="Comodidades" accent="violet" delay={0.2}>
            <div className="flex flex-col gap-3">
              {amenities.map(({ icon: AIcon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
                    <AIcon className="w-4 h-4 text-violet-600" />
                  </div>
                  <span className="text-violet-800/80 text-sm">{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 mt-1">
                <div className="w-8 h-8 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
                  <XCircle className="w-4 h-4 text-rose-500" />
                </div>
                <span className="text-rose-700/80 text-sm font-medium">Não atendemos crianças</span>
              </div>
            </div>
          </InfoCard>

          {/* Payment */}
          <InfoCard icon={Banknote} title="Formas de Pagamento" accent="emerald" delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="text-xs bg-white border border-emerald-200 text-emerald-800 px-2.5 py-1 rounded-full font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
