import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-24 bg-mec-dark">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="プロフィール" 
          subtitle="WHO I AM" 
        />

        <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="aspect-[3/4] relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                 {/* Placeholder for Coach Image */}
                 <img 
                    src="https://picsum.photos/id/1005/600/800?grayscale" 
                    alt="森山雄太" 
                    className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500"
                 />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h3 className="text-3xl font-serif text-white mb-2">森山 雄太</h3>
            <p className="text-mec-red mb-6 font-bold tracking-wider">Master Coach / Mind Engineer</p>
            
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                過去、私自身も「努力すれば報われる」と信じ、長時間労働と根性論で成果を出そうとしていました。しかし、ある一定のラインで成長が止まり、強烈な閉塞感に襲われました。
              </p>
              <p>
                そんな中、認知科学に基づいたコーチング理論に出会い、「マインドの使い方」を変えるだけで、現実が劇的に変化することを体験。努力感なしに、想定以上のゴールを次々と達成するようになりました。
              </p>
              <p>
                現在は、「未来は『未だに来ず』、過去は『過ぎ去った』」という時間論をベースに、クライアントが自ら「現状の外側」へ飛び出すためのマインドエンジニアリングを提供しています。癒やしや共感ではなく、機能的な脳の書き換えを通じて、あなたの真のポテンシャルを解放します。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;