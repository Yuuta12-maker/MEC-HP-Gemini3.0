import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-mec-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mec-dark via-slate-900 to-mec-dark opacity-90"></div>
        <img 
            src="https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Running Freely" 
            className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-mec-red rounded-full mix-blend-screen filter blur-[96px] opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-mec-red tracking-[0.2em] mb-6 font-medium"
        >
          MIND ENGINEERING COACHING
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white mb-8"
        >
          努力はいらない。<br />
          MECで<br className="md:hidden" />『現状の外側』へ。
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          マインドのプログラムを書き換え、<br className="md:hidden" />理想の未来を手に入れる。
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#service" 
            className="inline-block px-8 py-4 bg-mec-red text-white font-bold tracking-widest hover:bg-red-700 transition-colors duration-300 rounded-sm"
          >
            トライアル詳細を見る
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-mec-red w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;