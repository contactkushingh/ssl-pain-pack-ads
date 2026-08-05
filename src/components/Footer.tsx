'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 mt-auto">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/ssl/logo.jpg" 
                alt="SSL Biotech Logo" 
                className="h-10 w-auto object-contain bg-white p-1 rounded"
              />
              <span className="font-extrabold text-white text-lg tracking-wider">SSL Biotech</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[320px]">
              SSL Biotech is dedicated to delivering high-quality, safe, and effective homeopathic and herbal formulations designed to treat diseases from their root cause since 1997.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-md font-bold mb-4">Quick Links</h3>
            <ul className="list-none flex flex-col gap-2.5 text-sm">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">हमारे बारे में</a></li>
              <li><a href="#combo" className="text-slate-400 hover:text-white transition-colors">कॉम्बो प्रोडक्ट्स</a></li>
              <li><a href="#testimonial" className="text-slate-400 hover:text-white transition-colors">सच्ची कहानियाँ</a></li>
              <li><a href="#order" className="text-slate-400 hover:text-white transition-colors">ऑर्डर करें</a></li>
            </ul>
          </div>
          
          <div className="border-l-2 border-emerald-500 pl-6">
            <h3 className="text-emerald-400 text-md font-bold mb-3">Disclaimer (अस्वीकरण)</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              होम्योपैथी एक प्राकृतिक और सुरक्षित चिकित्सा पद्धति है। परिणाम प्रत्येक व्यक्ति की शारीरिक स्थिति और बीमारी की तीव्रता के अनुसार भिन्न हो सकते हैं। गंभीर समस्या में डॉक्टर से परामर्श अवश्य लें।
            </p>
            <p className="text-emerald-400 text-xs font-semibold">
              ✓ 100% Safe | No Side Effects | AYUSH Certified Ingredients
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} SSL Biotech Pain Care. सर्वाधिकार सुरक्षित।</p>
          <p>Made in India with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
