'use client';

export default function Header() {
  return (
    <header className="bg-white/90 border-b border-emerald-100/55 sticky top-0 z-50 backdrop-blur-md transition-all duration-300">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <img 
            src="/images/ssl/logo.jpg" 
            alt="SSL Biotech Logo" 
            className="h-12 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold block">Biotech</span>
            <span className="text-xs text-slate-500 font-medium">Trusted Since 1997</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            AYUSH Certified Ingredients
          </div>
          <a 
            href="https://wa.me/919999999999?text=प्रणाम%20SSL%20Biotech,%20मुझे%20दर्द%20निवारक%20कॉम्बो%20के%20बारे%20में%20पूछना%20है।" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md"
          >
            💬 WhatsApp Chat
          </a>
        </div>
      </div>
    </header>
  );
}
