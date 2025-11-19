import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-mec-dark relative">
      <div className="absolute inset-0 bg-gradient-to-t from-mec-navy to-mec-dark opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-2xl relative z-10">
        <SectionTitle 
          title="申し込み・予約" 
          subtitle="APPLICATION" 
        />

        <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-sm border border-slate-800 text-center">
            <h3 className="text-2xl font-serif text-white mb-6">
                現状の外側へ踏み出す準備はできましたか？
            </h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
                まずは「初回トライアルセッション（6,000円）」にお申し込みください。<br/>
                以下ボタンより、専用フォームにて日程調整を承ります。
            </p>

            <a 
                href="https://mec-manage.vercel.app/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full md:w-auto min-w-[280px] bg-mec-red hover:bg-red-700 text-white font-bold py-5 px-8 rounded-sm transition-all duration-300 shadow-lg hover:shadow-red-900/50 tracking-widest group"
            >
                トライアルに申し込む
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="mt-8 text-xs text-slate-600">
                ※外部予約サイト（MEC Management System）へ移動します
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;