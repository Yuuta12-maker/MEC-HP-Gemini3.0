import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-mec-dark border-t border-slate-800 text-center text-slate-500 text-xs">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Mind Engineering Coaching. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;