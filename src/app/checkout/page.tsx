'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    city: '',
    state: 'Uttar Pradesh',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pinChecked, setPinChecked] = useState(false);
  const [pinStatus, setPinStatus] = useState<{ available: boolean; message: string } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showRazorpayModal, setShowRazorpayModal] = useState(false);
  const [razorpayStep, setRazorpayStep] = useState<'select' | 'processing' | 'success'>('select');

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
    if (name === 'pincode') {
      setPinChecked(false);
      setPinStatus(null);
    }
  };

  const checkPincodeAvailability = () => {
    const pinRegex = /^\d{6}$/;
    if (!formData.pincode.trim()) {
      setErrors(prev => ({ ...prev, pincode: 'कृपया पिनकोड दर्ज करें' }));
      return;
    }
    if (!pinRegex.test(formData.pincode)) {
      setErrors(prev => ({ ...prev, pincode: 'कृपया सही 6-अंकीय पिनकोड दर्ज करें' }));
      return;
    }

    setPinChecked(true);
    // Simulate pincode check (available everywhere except invalid patterns)
    if (formData.pincode.startsWith('0') || formData.pincode === '999999') {
      setPinStatus({ available: false, message: '❌ इस पिनकोड पर डिलीवरी उपलब्ध नहीं है।' });
    } else {
      setPinStatus({ available: true, message: '✅ बधाई हो! इस पिनकोड पर फास्ट डिलीवरी उपलब्ध है।' });
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'नाम दर्ज करना अनिवार्य है।';
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = 'मोबाइल नंबर अनिवार्य है।';
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'सही 10-अंकीय मोबाइल नंबर दर्ज करें।';
    }

    if (!formData.address.trim()) tempErrors.address = 'पूरा पता दर्ज करना अनिवार्य है।';

    const pinRegex = /^\d{6}$/;
    if (!formData.pincode.trim()) {
      tempErrors.pincode = 'पिनकोड अनिवार्य है।';
    } else if (!pinRegex.test(formData.pincode)) {
      tempErrors.pincode = 'सही 6-अंकीय पिनकोड दर्ज करें।';
    } else if (pinStatus && !pinStatus.available) {
      tempErrors.pincode = 'इस पिनकोड पर सेवा उपलब्ध नहीं है।';
    }

    if (!formData.city.trim()) tempErrors.city = 'शहर का नाम अनिवार्य है।';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (!pinChecked) {
      checkPincodeAvailability();
      return;
    }

    if (paymentMethod === 'razorpay') {
      setShowRazorpayModal(true);
      setRazorpayStep('select');
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const handleRazorpayPayment = () => {
    setRazorpayStep('processing');
    setTimeout(() => {
      setRazorpayStep('success');
      setTimeout(() => {
        setShowRazorpayModal(false);
        setIsSuccess(true);
      }, 1500);
    }, 2000);
  };

  const basePrice = 999;
  const shippingCharge = paymentMethod === 'cod' ? 50 : 0;
  const totalPrice = basePrice + shippingCharge;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 py-4 shadow-sm sticky top-0 z-30">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl font-black text-emerald-700 tracking-wider">SSL BIOTECH</span>
          </Link>
          <Link href="/" className="text-xs md:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1">
            ← होमपेज पर वापस जाएं
          </Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 mt-8">
        {isSuccess ? (
          <div className="max-w-2xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-lg text-center mt-12">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold">
              ✓
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-2">ऑर्डर सफलतापूर्वक दर्ज हो गया है!</h1>
            <p className="text-emerald-700 font-bold mb-6 text-lg">
              {paymentMethod === 'cod' ? '📦 कैश ऑन डिलीवरी (COD) ऑर्डर' : '💳 ऑनलाइन भुगतान (Razorpay) द्वारा सफल ऑर्डर'}
            </p>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              धन्यवाद <strong>{formData.name}</strong>, आपका ऑर्डर स्वीकार कर लिया गया है। हमारे हेल्थ एक्सपर्ट 24 घंटे के भीतर आपको फोन करके ऑर्डर की पुष्टि करेंगे।
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 text-sm">
              <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2">🚚 डिलीवरी विवरण (Delivery Details):</h3>
              <p><strong>नाम:</strong> {formData.name}</p>
              <p><strong>मोबाइल:</strong> {formData.phone}</p>
              <p><strong>पता:</strong> {formData.address}, {formData.city}, {formData.state} - {formData.pincode}</p>
              <p><strong>भुगतान विधि:</strong> {paymentMethod === 'cod' ? 'कैश ऑन डिलीवरी (COD)' : 'ऑनलाइन (Razorpay)'}</p>
              <p><strong>कुल भुगतान राशि:</strong> <span className="font-extrabold text-emerald-700">₹{totalPrice}</span></p>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Link href="/" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl transition shadow-md">
                मुख्य पेज पर जाएं
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side: Forms */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Shipping info card */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-700 w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
                  शिपिंग विवरण (Shipping Information)
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      पूरा नाम (Full Name) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="उदा. रामकिशन शर्मा"
                      className={`w-full p-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.name ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                      }`}
                      required
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      मोबाइल नंबर (10-Digit Mobile) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="उदा. 9431295012"
                      className={`w-full p-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.phone ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                      }`}
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</p>}
                  </div>

                  {/* Pincode Availability Check */}
                  <div>
                    <label htmlFor="pincode" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      पिनकोड (Pincode & Availability) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        maxLength={6}
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="उदा. 800001"
                        className={`flex-1 p-3 rounded-xl border text-sm outline-none transition-all ${
                          errors.pincode ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                        }`}
                        required
                      />
                      <button
                        type="button"
                        onClick={checkPincodeAvailability}
                        className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 rounded-xl transition cursor-pointer"
                      >
                        उपलब्धता जांचें
                      </button>
                    </div>
                    {errors.pincode && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.pincode}</p>}
                    {pinStatus && (
                      <p className={`text-xs mt-1.5 font-bold ${pinStatus.available ? 'text-emerald-700' : 'text-red-600'}`}>
                        {pinStatus.message}
                      </p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      घर का पूरा पता (House No, Building, Landmark, Area) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="उदा. मकान नंबर 12, शिव मंदिर के पास, नया टोला"
                      className={`w-full p-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.address ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                      }`}
                      required
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.address}</p>}
                  </div>

                  {/* City & State */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        शहर (City) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="उदा. पटना"
                        className={`w-full p-3 rounded-xl border text-sm outline-none transition-all ${
                          errors.city ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                        }`}
                        required
                      />
                      {errors.city && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.city}</p>}
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        राज्य (State)
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      >
                        {statesOfIndia.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Step 2: Payment Method */}
                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <span className="bg-emerald-100 text-emerald-700 w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
                      भुगतान का प्रकार चुनें (Payment Method)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Razorpay Option */}
                      <label 
                        className={`border rounded-2xl p-4 flex items-start gap-3 cursor-pointer transition-all ${
                          paymentMethod === 'razorpay' 
                            ? 'border-emerald-600 bg-emerald-50/30' 
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === 'razorpay'}
                          onChange={() => setPaymentMethod('razorpay')}
                          className="mt-1 accent-emerald-600"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-slate-900 text-sm">ऑनलाइन भुगतान (UPI / Card / NetBanking)</span>
                            <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full">मुफ्त डिलीवरी</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">सुरक्षित Razorpay गेटवे के माध्यम से भुगतान करें।</p>
                          <div className="flex gap-2 mt-2 items-center">
                            <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay" className="h-4 w-auto" />
                            <span className="text-[9px] text-slate-400 font-extrabold uppercase">Razorpay Secure</span>
                          </div>
                        </div>
                      </label>

                      {/* COD Option */}
                      <label 
                        className={`border rounded-2xl p-4 flex items-start gap-3 cursor-pointer transition-all ${
                          paymentMethod === 'cod' 
                            ? 'border-emerald-600 bg-emerald-50/30' 
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="mt-1 accent-emerald-600"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-slate-900 text-sm">कैश ऑन डिलीवरी (COD)</span>
                            <span className="text-[10px] bg-amber-500 text-white font-bold px-2 py-0.5 rounded-full">+₹50 डिलीवरी शुल्क</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">दवा घर पहुंचने पर नकद भुगतान करें।</p>
                          <span className="inline-block text-[10px] font-bold text-amber-700 mt-2">📦 पार्सल मिलने पर ही पैसे दें</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Order Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-md text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                        प्रक्रिया चल रही है...
                      </>
                    ) : paymentMethod === 'razorpay' ? (
                      <>💳 Razorpay से सुरक्षित भुगतान करें (₹{totalPrice})</>
                    ) : (
                      <>📦 ऑर्डर कन्फर्म करें - कैश ऑन डिलीवरी (₹{totalPrice})</>
                    )}
                  </button>
                </form>
              </div>

            </div>

            {/* Right Side: Order Summary */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Cart Summary Card */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-6 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">ऑर्डर विवरण (Order Summary)</h3>

                {/* Items */}
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-50 p-2 rounded-2xl border border-slate-100 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src="/images/ssl/rheumatic_fresh_bottle.jpg" 
                      alt="SSL Pain Relief Pack" 
                      className="h-16 w-16 object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">SSL कम्पलीट पेन रिलीफ किट</h4>
                    <p className="text-xs text-slate-500">1 महीने का पूर्ण कोर्स (1 Month Course)</p>
                    <p className="text-xs text-emerald-700 font-extrabold flex items-center gap-1">
                      <span>🎁 3 निश्चित उपहार बिल्कुल मुफ्त!</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-slate-900">₹999</span>
                  </div>
                </div>

                {/* Bundle Items Detail list */}
                <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100/60 text-xs text-slate-600 space-y-2">
                  <p className="font-bold text-slate-900">किट के अंदर शामिल दवाइयां:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>2x Rheumatic Fresh Capsules (अंदरूनी आराम)</li>
                    <li>2x Orthoneed Capsules (हड्डियों की मजबूती)</li>
                    <li>2x Penco Fresh Oil (बाहरी असर)</li>
                  </ul>
                  <p className="font-bold text-emerald-700 mt-2">🎁 मुफ्त उपहार (Gift Pack):</p>
                  <ul className="list-disc pl-4 space-y-1 text-emerald-800 font-medium">
                    <li>1x दर्द निवारक बाम (Balm)</li>
                    <li>1x हर्बल मालिश तेल (Oil)</li>
                    <li>1x स्वास्थ्य मार्गदर्शिका पुस्तक (Book)</li>
                  </ul>
                </div>

                {/* Pricing Summary Table */}
                <div className="space-y-3 pt-4 border-t border-slate-100 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>कॉम्बो मूल्य (Combo Price):</span>
                    <span>₹999</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>डिलीवरी शुल्क (Shipping Charge):</span>
                    <span>{shippingCharge === 0 ? <strong className="text-emerald-700">फ्री (Free)</strong> : `₹${shippingCharge}`}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 border-b border-slate-100 pb-3">
                    <span>उपहार मूल्य (Gift Value):</span>
                    <span className="text-emerald-700 font-bold">₹0 (Free Gift)</span>
                  </div>
                  <div className="flex justify-between text-slate-900 font-black text-lg">
                    <span>कुल भुगतान (Total Amount):</span>
                    <span className="text-emerald-700">₹{totalPrice}</span>
                  </div>
                </div>

                {/* Trust Seals */}
                <div className="bg-emerald-50/40 rounded-2xl p-4 border border-emerald-100/50 space-y-3 text-xs text-emerald-800">
                  <div className="flex items-center gap-2">
                    <span>🛡️</span>
                    <span><strong>100% असली दवा:</strong> सीधे कंपनी की आधिकारिक वेबसाइट से।</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🔒</span>
                    <span><strong>सुरक्षित लेनदेन:</strong> SSL एनक्रिप्टेड भुगतान प्रणाली।</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>

      {/* Razorpay Gateway Modal Simulator */}
      {showRazorpayModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full border border-slate-100">
            {/* Razorpay Top Bar */}
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay Logo" className="h-6 w-auto" />
                <span className="font-bold text-xs uppercase tracking-widest text-slate-400">Razorpay Checkout</span>
              </div>
              <button 
                onClick={() => setShowRazorpayModal(false)}
                className="text-slate-400 hover:text-white font-bold cursor-pointer text-sm"
              >
                ✕ बंद करें
              </button>
            </div>

            {razorpayStep === 'select' && (
              <div className="p-6 space-y-6">
                {/* Store Branding */}
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="bg-emerald-100 text-emerald-700 w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">SSL Biotech Pvt Ltd</h4>
                    <p className="text-[10px] text-slate-400">payment_id: pay_Pr82KslP920sl</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-slate-400">कुल राशि</p>
                    <p className="font-black text-slate-900 text-base">₹999</p>
                  </div>
                </div>

                {/* simulated Payment Modes */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">UPI / QR कोड से पेमेंट करें</p>
                  
                  <button 
                    onClick={handleRazorpayPayment}
                    className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 p-4 rounded-2xl flex items-center justify-between transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-xl">📱</span>
                      <div>
                        <p className="font-bold text-slate-900 text-xs">UPI (Google Pay, PhonePe, Paytm)</p>
                        <p className="text-[10px] text-slate-400">सीधे अपने किसी भी UPI ऐप से भुगतान करें</p>
                      </div>
                    </div>
                    <span className="text-emerald-600 font-bold text-xs">→</span>
                  </button>

                  <button 
                    onClick={handleRazorpayPayment}
                    className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 p-4 rounded-2xl flex items-center justify-between transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-xl">💳</span>
                      <div>
                        <p className="font-bold text-slate-900 text-xs">क्रेडिट / डेबिट कार्ड (Card)</p>
                        <p className="text-[10px] text-slate-400">Visa, MasterCard, RuPay, Maestro</p>
                      </div>
                    </div>
                    <span className="text-emerald-600 font-bold text-xs">→</span>
                  </button>

                  <button 
                    onClick={handleRazorpayPayment}
                    className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 p-4 rounded-2xl flex items-center justify-between transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-xl">🏦</span>
                      <div>
                        <p className="font-bold text-slate-900 text-xs">नेट बैंकिंग (Netbanking)</p>
                        <p className="text-[10px] text-slate-400">SBI, HDFC, ICICI, Axis & अन्य प्रमुख बैंक</p>
                      </div>
                    </div>
                    <span className="text-emerald-600 font-bold text-xs">→</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[9px] text-slate-400">
                    🔒 Razorpay द्वारा प्रमाणित सुरक्षित भुगतान गेटवे।
                  </p>
                </div>
              </div>
            )}

            {razorpayStep === 'processing' && (
              <div className="p-12 text-center space-y-6">
                <div className="relative w-16 h-16 mx-auto">
                  <span className="absolute inset-0 animate-ping inline-flex h-full w-full rounded-full bg-emerald-100 opacity-75"></span>
                  <div className="relative rounded-full w-16 h-16 bg-emerald-50 border-2 border-emerald-500 border-t-transparent animate-spin"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">भुगतान सुरक्षित रूप से संसाधित हो रहा है...</h4>
                  <p className="text-xs text-slate-500 mt-1">कृपया ब्राउज़र रिफ्रेश न करें या पीछे न जाएं।</p>
                </div>
              </div>
            )}

            {razorpayStep === 'success' && (
              <div className="p-12 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold animate-bounce">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">भुगतान सफल रहा! (Payment Successful)</h4>
                  <p className="text-xs text-slate-500 mt-1">Razorpay transaction ID: tx_82Kla01Ks</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
