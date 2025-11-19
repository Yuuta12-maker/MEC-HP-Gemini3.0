import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Problem: React.FC = () => {
  const problems = [
    "頑張っているのに現状が変わらない",
    "今の延長線上の未来にワクワクしない",
    "もっと上に行きたいが方法が見えない",
    "やりたいことが分からない"
  ];

  return (
    <section id="concept" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <SectionTitle 
            title="なぜ、現状が変わらないのか" 
            subtitle="STATUS QUO" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif text-white mb-6">
              その閉塞感は、<br/>あなたの「能力」のせいではありません。
            </h3>
            <p className="text-slate-400 leading-loose">
              多くの経営者やビジネスパーソンが抱える「停滞感」。
              <br />
              それは、脳の防衛本能である<strong>ホメオスタシス（恒常性維持機能）</strong>が正常に働いている証拠です。
              あなたの脳は、優秀であればあるほど、現状（コンフォートゾーン）を強力に維持しようとします。
            </p>
            <p className="text-slate-400 leading-loose">
              意志の力や根性論でこれに抗うのは、車のブレーキを踏みながらアクセルを全開にするようなもの。
              必要なのは「努力」ではなく、<strong>「脳の使い方の修正（エンジニアリング）」</strong>です。
            </p>
          </motion.div>

          <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
            <h4 className="text-mec-silver font-bold mb-6 border-l-4 border-mec-red pl-4">
              こんな悩みはありませんか？
            </h4>
            <ul className="space-y-4">
              {problems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-mec-red mt-1">✕</span>
                  <span className="text-slate-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;