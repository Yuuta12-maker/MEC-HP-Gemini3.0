import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { PLANS } from '../constants';

const Service: React.FC = () => {
  return (
    <section id="service" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="サービス・料金" 
          subtitle="MENU & PRICE" 
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 md:p-12 rounded-lg border ${
                plan.isPrimary 
                  ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-mec-red/30' 
                  : 'bg-slate-900 border-slate-800'
              }`}
            >
              {plan.isPrimary && (
                <div className="absolute top-0 right-0 bg-mec-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    RECOMMENDED
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl md:text-4xl font-bold text-mec-silver">{plan.price}</span>
                <span className="text-sm text-slate-500 ml-2">{plan.note}</span>
              </div>
              {plan.period && (
                <p className="text-mec-red text-sm font-semibold mb-6">{plan.period}</p>
              )}

              <ul className="space-y-4 mb-8 border-t border-slate-700/50 pt-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-mec-red mr-3 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {plan.isPrimary ? (
                    <div className="text-center text-sm text-slate-500">
                        ※まずはトライアルセッションにお申し込みください
                    </div>
                ) : (
                    <a 
                        href="https://mec-manage.vercel.app/apply"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-mec-red hover:bg-red-700 text-white font-bold text-center rounded-sm transition-colors duration-300 flex items-center justify-center gap-2 group"
                    >
                        申し込む <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-slate-400 text-sm">
                セッション形式：指定場所 または オンライン（Google Meet）
            </p>
        </div>
      </div>
    </section>
  );
};

export default Service;