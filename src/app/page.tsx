'use client';

import { useState, useRef } from 'react';
import CheckoutForm from '@/components/CheckoutForm';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const checkoutSectionRef = useRef<HTMLDivElement>(null);

  const scrollToCheckout = () => {
    if (checkoutSectionRef.current) {
      checkoutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "क्या आप या आपके परिवार में कोई जोड़ों के दर्द, कमर दर्द या साइटिका से परेशान हैं? SSL Biotech का यह 'कम्पलीट पेन रिलीफ कॉम्बो' देखें। मैंने सुना है यह बहुत असरदार है! यहाँ देखें: " + window.location.href
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <main className="flex-grow bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 py-12 md:py-20 border-b border-emerald-50">
        <div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider">
              🌿 100% प्राकृतिक होम्योपैथिक उपचार
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              क्या आप भी सालों पुराने <span className="text-red-600 block sm:inline">जोड़ों के दर्द, कमर दर्द</span> या <span className="text-emerald-700">साइटिका (Sciatica)</span> से हार मान चुके हैं?
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[620px]">
              पेनकिलर्स (Painkillers) के हानिकारक साइड इफेक्ट्स को कहें अलविदा! अपनाएं <strong className="text-slate-900 font-bold">SSL Biotech</strong> का वैज्ञानिक रूप से तैयार प्राकृतिक और असरदार <strong className="text-emerald-700 font-bold">'कम्पलीट पेन रिलीफ कॉम्बो'</strong> जो दर्द को जड़ से मिटाने में मदद करता है।
            </p>

            {/* Micro Trust points */}
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 text-lg">✓</span> कोई साइड इफेक्ट नहीं (No Side Effects)
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 text-lg">✓</span> आयुष प्रमाणित तत्व (AYUSH Certified)
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 text-lg">✓</span> घर बैठे मुफ्त डिलीवरी (FREE Delivery)
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 text-lg">✓</span> दवा मिलने पर भुगतान (COD Available)
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToCheckout}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-200/50 hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer animate-pulse-subtle"
              >
                🛒 अभी खरीदें और दर्द से राहत पाएं (Buy Now)
              </button>
              
              <button
                onClick={handleShareWhatsApp}
                className="w-full sm:w-auto bg-white border-2 border-emerald-600 hover:bg-emerald-50 text-emerald-700 font-bold text-sm md:text-base px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                📲 अपनों की मदद करें (Share on WhatsApp)
              </button>
            </div>
          </div>

          {/* Hero Right: Product Pack Image */}
          <div className="relative flex flex-col items-center justify-center bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100/80">
            <div className="absolute top-4 left-4 bg-red-600 text-white font-bold text-xs uppercase px-3 py-1 rounded-full tracking-wider z-10 animate-bounce">
              50% OFF TODAY
            </div>
            
            <div className="w-full aspect-[4/3] relative flex items-center justify-center mb-6">
              {/* Product Pack Collage */}
              <div className="relative w-full h-full flex justify-center items-end gap-2 md:gap-4 px-2">
                {/* Rheumatic Capsule */}
                <div className="w-1/3 flex flex-col items-center group transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/ssl/rheumatic_fresh.jpg" 
                    alt="Rheumatic Fresh Capsule" 
                    className="max-h-[140px] md:max-h-[190px] w-auto object-contain rounded-lg shadow-md"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-slate-700 mt-2 text-center">Rheumatic Fresh (2 Units)</span>
                </div>
                
                {/* Penco Oil (Center / Main) */}
                <div className="w-1/3 flex flex-col items-center z-10 transition-all duration-300 hover:scale-108 -translate-y-4">
                  <img 
                    src="/images/ssl/penco_oil.jpg" 
                    alt="Penco Fresh Oil" 
                    className="max-h-[160px] md:max-h-[220px] w-auto object-contain rounded-lg shadow-lg border-2 border-emerald-100"
                  />
                  <span className="text-[10px] md:text-xs font-extrabold text-emerald-800 mt-2 text-center bg-emerald-50 px-2 py-0.5 rounded-full">Penco Oil (2 Units)</span>
                </div>

                {/* Orthoneed Capsule */}
                <div className="w-1/3 flex flex-col items-center group transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/ssl/orthoneed.jpg" 
                    alt="Orthoneed Capsule" 
                    className="max-h-[140px] md:max-h-[190px] w-auto object-contain rounded-lg shadow-md"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-slate-700 mt-2 text-center">Orthoneed Capsule (2 Units)</span>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-slate-100 pt-6 text-center">
              <p className="text-slate-500 text-xs sm:text-sm font-medium">कम्पलीट पेन रिलीफ कॉम्बो (2 महीने का कोर्स पैक)</p>
              <div className="flex items-center justify-center gap-3 mt-1">
                <span className="text-slate-400 line-through text-base md:text-lg">₹1,998</span>
                <span className="text-emerald-600 font-extrabold text-2xl md:text-3xl">₹999 Only</span>
              </div>
              <p className="text-emerald-700 text-xs font-bold mt-1">🚚 फ्री डिलीवरी + कैश ऑन डिलीवरी उपलब्ध</p>
            </div>
          </div>

        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 md:py-24 bg-white" id="about">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold text-emerald-600 tracking-widest block">The Truth About Painkillers</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">
              लगातार पेनकिलर खाना आपकी सेहत के लिए खतरनाक है!
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              साधारण पेनकिलर खाने से दर्द थोड़ी देर के लिए तो दब जाता है, लेकिन इसके लगातार सेवन से पेट में अल्सर, लीवर और किडनी पर गंभीर बुरा असर पड़ सकता है। हमारा यह होम्योपैथिक और हर्बल कॉम्बो आपके दर्द पर बाहरी और अंदरूनी, दोनों तरफ से बिना किसी साइड इफेक्ट के काम करता है:
            </p>
          </div>

          {/* Medicines Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Rheumatic Fresh Capsules */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="space-y-4">
                <div className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full w-fit">
                  अंदरूनी आराम - 2 Units
                </div>
                <div className="flex justify-center py-4">
                  <img 
                    src="/images/ssl/rheumatic_fresh.jpg" 
                    alt="Rheumatic Fresh Capsules" 
                    className="h-44 w-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Rheumatic Fresh Capsules</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  स्लिप्ड डिस्क (Slipped Disc), गठिया (Gout), साइटिका (Sciatica) और भयंकर जोड़ों के पुराने से पुराने दर्द को अंदर से ठीक करने के लिए विशेष रूप से तैयार किया गया है। यह नसों की सूजन को जड़ से शांत करता है।
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-slate-500 font-semibold">
                📋 खुराक: 1 कैप्सूल रोजाना हल्के गुनगुने पानी के साथ।
              </div>
            </div>

            {/* Penco Fresh Oil */}
            <div className="bg-emerald-50/40 rounded-2xl p-6 border border-emerald-100/60 flex flex-col justify-between hover:shadow-md transition-all duration-300 relative">
              <div className="absolute -top-3 right-6 bg-emerald-600 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-full tracking-wider">
                ⭐️ तुरंत राहत (Instant Relief)
              </div>
              <div className="space-y-4">
                <div className="bg-emerald-600 text-white text-xs font-extrabold px-3 py-1 rounded-full w-fit">
                  बाहरी असर - 2 Units
                </div>
                <div className="flex justify-center py-4">
                  <img 
                    src="/images/ssl/penco_oil.jpg" 
                    alt="Penco Fresh Oil" 
                    className="h-44 w-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Penco Fresh Oil (100ml)</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  यह जादुई तेल तुरंत राहत के लिए है। इसे दिन में 2-3 बार प्रभावित जगह पर हल्के हाथों से मालिश करने से मांसपेशियों का तनाव, खिंचाव और सूजन तुरंत कम होती है और खून का बहाव सुधरता है।
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-emerald-100 text-xs text-slate-600 font-bold">
                📋 उपयोग: दिन में 2 से 3 बार हल्के हाथों से दर्द की जगह मालिश करें।
              </div>
            </div>

            {/* Orthoneed Capsules */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="space-y-4">
                <div className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full w-fit">
                  हड्डियों की मजबूती - 2 Units
                </div>
                <div className="flex justify-center py-4">
                  <img 
                    src="/images/ssl/orthoneed.jpg" 
                    alt="Orthoneed Capsules" 
                    className="h-44 w-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Orthoneed Capsules</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  इसमें मौजूद प्राकृतिक होम्योपैथिक साल्ट्स (जैसे Calcarea Phos और Mag Phos) आपकी हड्डियों और रीढ़ की हड्डी को ताकत देते हैं, नसों की जकड़न खोलते हैं और शरीर में कैल्शियम व जरूरी मिनरल्स की कमी दूर करते हैं।
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-slate-500 font-semibold">
                📋 खुराक: 1 कैप्सूल रोज पानी के साथ लें।
              </div>
            </div>

          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-lg md:text-xl font-bold text-slate-900">क्या आप अपने दर्द को हमेशा के लिए अलविदा कहना चाहते हैं?</h4>
              <p className="text-slate-600 text-sm">इस 2 महीने के कम्पलीट कोर्स को अभी ऑर्डर करें। डिलीवरी बिल्कुल मुफ्त है।</p>
            </div>
            <button 
              onClick={scrollToCheckout}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap text-sm"
            >
              🛒 अभी आर्डर करें - Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial & Social Proof */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100" id="testimonial">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story text */}
            <div className="space-y-6">
              <div className="w-fit bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                सच्ची कहानी (Success Story)
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                देखिए कैसे रामकिशन जी ने साइटिका के दर्द को हराया!
              </h2>
              
              <blockquote className="bg-white border-l-4 border-emerald-500 rounded-r-2xl p-6 shadow-sm space-y-4">
                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
                  "मैं पिछले 3 सालों से साइटिका (Sciatica) और घुटनों के दर्द से बहुत परेशान था। उठना-बैठना तक मुश्किल हो गया था और रोज पेनकिलर खानी पड़ती थी। फिर मुझे Hmedkart से इस 'कम्पलीट पेन रिलीफ किट' के बारे में पता चला। Penco Fresh Oil लगाने से मुझे पहले ही दिन से आराम महसूस हुआ और Rheumatic और Orthoneed कैप्सूल के लगातार इस्तेमाल से मेरी नसों का दर्द अब लगभग खत्म हो गया है। अब मैं बिना किसी सहारे के चल सकता हूँ!"
                </p>
                <cite className="block font-bold text-slate-900 text-sm not-italic">
                  - रामकिशन शर्मा (उम्र 58 वर्ष), उत्तर प्रदेश
                </cite>
              </blockquote>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                <div className="bg-white border border-slate-200/60 rounded-xl p-3 shadow-xs">
                  <span className="text-2xl block mb-1">🛡️</span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-700 uppercase">100% Safe Formula</span>
                </div>
                <div className="bg-white border border-slate-200/60 rounded-xl p-3 shadow-xs">
                  <span className="text-2xl block mb-1">🌿</span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-700 uppercase">No Side Effects</span>
                </div>
                <div className="bg-white border border-slate-200/60 rounded-xl p-3 shadow-xs">
                  <span className="text-2xl block mb-1">🇮🇳</span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-700 uppercase">AYUSH Ingredients</span>
                </div>
              </div>
            </div>

            {/* Testimonial Side Image or Graphic */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[450px] bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 p-6 md:p-8 space-y-6">
                <h4 className="text-center font-bold text-slate-800 border-b border-slate-100 pb-4">
                  👨‍⚕️ विशेषज्ञों की पसंद - SSL Biotech क्यों?
                </h4>
                
                <ul className="space-y-4 text-slate-600 text-xs md:text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span><strong>जड़ से इलाज:</strong> यह दर्द को केवल दबाता नहीं है, बल्कि कमजोर नसों और हड्डियों का पोषण करके दर्द को जड़ से खत्म करता है।</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span><strong>पूर्णतः सुरक्षित:</strong> यह 100% होम्योपैथिक और नेचुरल जड़ी बूटियों से बना है जिसका लीवर या किडनी पर कोई साइड इफेक्ट नहीं होता।</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span><strong>डबल एक्शन फॉर्मूला:</strong> कैप्सूल्स जहाँ शरीर के अंदर से नसों को स्वस्थ बनाते हैं, वहीं पेनको ऑयल तुरंत राहत प्रदान करता है।</span>
                  </li>
                </ul>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center">
                  <span className="text-emerald-800 font-bold text-xs uppercase tracking-wider block mb-1">⚡️ Limited Stock Offer</span>
                  <p className="text-xs text-slate-600">आज ऑर्डर करने पर पाइए <strong>मुफ्त घर पहुंच सेवा (Free Delivery)</strong></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Checkout Section / Form */}
      <section className="py-16 md:py-24 bg-white" id="order" ref={checkoutSectionRef}>
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Offer details left */}
            <div className="space-y-6 text-left">
              <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider w-fit block">
                🔥 स्पेशल डिस्काउंट - 50% की भारी बचत
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                दर्द को वापस न आने दें! 2 महीने का कम्पलीट कोर्स
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                यह कॉम्बो केवल दर्द की दवा नहीं है, यह जोड़ों की सेहत को दोबारा लौटाने का एक पूरा कोर्स है। चूँकि इसमें हर दवा की 2 यूनिट शामिल हैं, यह पूरे 2 महीने का इलाज सुनिश्चित करता है जो स्थायी राहत के लिए अत्यंत आवश्यक है।
              </p>

              {/* Pricing Callout */}
              <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-8 flex items-center gap-6 max-w-md shadow-xs">
                <div>
                  <span className="text-slate-400 line-through text-lg block">एमआरपी: ₹1,998</span>
                  <span className="text-emerald-600 font-black text-3xl md:text-4xl">₹999 Only</span>
                </div>
                <div className="border-l border-slate-200 pl-6 space-y-1">
                  <span className="bg-emerald-100 text-emerald-800 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded-full block w-fit">
                    बचत: ₹999 (50%)
                  </span>
                  <p className="text-xs text-slate-500 font-medium">मुफ्त होम डिलीवरी और कैश ऑन डिलीवरी।</p>
                </div>
              </div>

              {/* Mini trust checklist */}
              <div className="space-y-3 text-xs md:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> कोई एडवांस पेमेंट नहीं - भुगतान सामान मिलने पर (No Advance Payment)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> असली दवा की 100% गारंटी - सीधे कंपनी से (Authentic Products)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> आसान रिटर्न पालिसी उपलब्ध (Easy Return Option)
                </div>
              </div>
            </div>

            {/* Form right */}
            <div className="flex justify-center">
              <CheckoutForm />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="w-full max-w-[800px] mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-10">अक्सर पूछे जाने वाले सवाल (FAQs)</h3>
          
          <div className="space-y-4">
            <details className="group bg-white border border-slate-200/60 rounded-xl p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm md:text-base list-none">
                <span>क्या इस दवा का कोई साइड इफेक्ट (Side Effect) है?</span>
                <span className="transition group-open:rotate-180 text-emerald-600">▼</span>
              </summary>
              <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
                बिल्कुल नहीं! SSL Biotech का यह कॉम्बो 100% सुरक्षित होम्योपैथिक साल्ट्स और प्राकृतिक तेलों से बनाया गया है। यह दवा आपकी किडनी, लीवर या पेट पर बिना कोई नुकसान पहुँचाए पूरी तरह प्राकृतिक रूप से काम करती है।
              </p>
            </details>

            <details className="group bg-white border border-slate-200/60 rounded-xl p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm md:text-base list-none">
                <span>मुझे कितने दिनों में आराम दिखना शुरू होगा?</span>
                <span className="transition group-open:rotate-180 text-emerald-600">▼</span>
              </summary>
              <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
                Penco Fresh Oil की मालिश करने से आपको मांसपेशियों और नसों के खिंचाव में पहले ही दिन से राहत महसूस होगी। घुटने के पुराने दर्द, गठिया और साइटिका के गहरे नसों के दर्द को जड़ से सुधारने में Rheumatic और Orthoneed कैप्सूल्स का 2 से 3 सप्ताह का सेवन काफी मददगार साबित होता है।
              </p>
            </details>

            <details className="group bg-white border border-slate-200/60 rounded-xl p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm md:text-base list-none">
                <span>मुझे दवा के लिए भुगतान कैसे करना होगा?</span>
                <span className="transition group-open:rotate-180 text-emerald-600">▼</span>
              </summary>
              <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
                आपको कोई भी एडवांस पेमेंट करने की जरूरत नहीं है। हम पूरे भारत में कैश ऑन डिलीवरी (COD) सेवा प्रदान करते हैं। जब कोरियर वाला दवा आपके घर लेकर आए, भुगतान आपको तभी नकद या यूपीआई द्वारा करना होगा।
              </p>
            </details>

            <details className="group bg-white border border-slate-200/60 rounded-xl p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm md:text-base list-none">
                <span>क्या मैं किसी भी प्रकार के दर्द में इसका उपयोग कर सकता हूँ?</span>
                <span className="transition group-open:rotate-180 text-emerald-600">▼</span>
              </summary>
              <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
                हाँ! यह कॉम्बो जोड़ों के दर्द (Joint Pain), घुटनों के दर्द, कमर दर्द, गर्दन और कंधे की जकड़न (Spondylitis), साइटिका (Sciatica) और मांसपेशियों के हर प्रकार के दर्द में बेहद असरदार और उपयोगी है।
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Sticky Bottom checkout bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 border-t border-slate-200 py-3.5 px-6 flex items-center justify-between md:justify-center gap-6 z-40 backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <div className="hidden sm:block text-left md:text-center">
          <p className="text-slate-500 text-xs font-semibold">2 महीने का रिलीफ कोर्स</p>
          <p className="text-emerald-700 font-extrabold text-lg">₹999 <span className="text-slate-400 line-through text-xs font-medium">₹1,998</span></p>
        </div>
        <button
          onClick={scrollToCheckout}
          className="flex-grow md:flex-grow-0 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm md:text-base py-3.5 px-8 rounded-full shadow-md hover:shadow-emerald-200/40 hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
        >
          🛍️ सुरक्षित चेकआउट (Cash on Delivery Available)
        </button>
      </div>

      {/* Floating WhatsApp support widget */}
      <a
        href="https://wa.me/919999999999?text=प्रणाम%20SSL%20Biotech,%20मुझे%20दर्द%20निवारक%20कॉम्बो%20के%20बारे%20में%20पूछना%20है।"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white font-bold p-4 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
        title="WhatsApp Support"
      >
        <span className="text-2xl">💬</span>
        <span className="hidden md:inline text-xs pr-1">सवाल है? चैट करें!</span>
      </a>
    </main>
  );
}
