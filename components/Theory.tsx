import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FEATURES } from '../constants';

const Theory: React.FC = () => {
  return (
    <section id="theory" className="py-24 bg-mec-dark relative overflow-hidden">
      {/* Tech background lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-mec-red to-transparent"></div>
         <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-mec-red to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          title="MECの理論的基盤" 
          subtitle="PHILOSOPHY & THEORY" 
        />

        <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed">
                MECは精神論ではありません。<br/>
                最新の<strong>認知科学・脳科学</strong>に基づき、マインド（脳と心）のカラクリを利用する、再現性の高いメソッドです。
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-sm hover:border-mec-red/50 transition-colors duration-500 group"
            >
              <div className="mb-6 text-mec-red group-hover:scale-110 transition-transform duration-500">
                <feature.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-lg text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <p className="text-mec-red font-bold tracking-widest text-sm mb-4 uppercase">Differentiation</p>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-8">
                徹底した「非アドバイス」主義
            </h3>
            <p className="text-slate-300 leading-loose max-w-3xl mx-auto mb-6">
                他社のコーチングは「解決策」を教えますが、MECは教えません。<br />
                なぜなら、<strong className="text-white">「答えは現状の外（スコトーマの裏）」</strong>にあり、
                自分で見つけなければ脳が認識しないからです。<br/>
                アドバイスではなく「マインドの使い方」のみをインストールし、<br/>
                あなた自身の内部から爆発的なエネルギー（ΔE）を生み出します。
            </p>
            <p className="text-xl md:text-2xl font-serif text-white mt-8 italic">
                「ゴールを達成する方法がわからない？ <br className="md:hidden"/>それでいい、それがいい。」
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Theory;