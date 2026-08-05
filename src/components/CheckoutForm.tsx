'use client';

import { useState } from 'react';

interface CheckoutFormProps {
  onClose?: () => void;
}

export default function CheckoutForm({ onClose }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    city: '',
    state: 'Uttar Pradesh', // default state or select
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi"
  ];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'कृपया अपना नाम दर्ज करें (Please enter your name)';
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = 'कृपया अपना मोबाइल नंबर दर्ज करें (Please enter your mobile number)';
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'कृपया सही 10-अंकीय मोबाइल नंबर दर्ज करें (Enter a valid 10-digit number)';
    }

    if (!formData.address.trim()) tempErrors.address = 'कृपया अपना पूरा पता दर्ज करें (Please enter your full address)';
    
    const pinRegex = /^\d{6}$/;
    if (!formData.pincode.trim()) {
      tempErrors.pincode = 'कृपया पिनकोड दर्ज करें (Please enter pincode)';
    } else if (!pinRegex.test(formData.pincode)) {
      tempErrors.pincode = 'कृपया सही 6-अंकीय पिनकोड दर्ज करें (Enter a valid 6-digit pincode)';
    }

    if (!formData.city.trim()) tempErrors.city = 'कृपया शहर का नाम दर्ज करें (Please enter city name)';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call to save order/lead
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-lg w-full border border-slate-100 text-slate-800">
      {/* Banner / Header */}
      <div className="bg-emerald-600 text-white p-5 text-center relative">
        {onClose && (
          <button 
            onClick={onClose} 
            className="absolute right-4 top-4 text-white hover:text-emerald-100 text-2xl font-bold bg-transparent border-none cursor-pointer"
            aria-label="Close form"
          >
            ✕
          </button>
        )}
        <span className="bg-amber-400 text-slate-950 text-[0.75rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider block w-fit mx-auto mb-2">
          🔥 Best Offer / सीमित समय के लिए
        </span>
        <h3 className="text-xl font-extrabold font-display">सुरक्षित कैश ऑन डिलीवरी (COD) ऑर्डर फॉर्म</h3>
        <p className="text-xs text-emerald-100 mt-1">दवा मिलने पर ही पैसे दें (Pay only when you receive the medicine)</p>
      </div>

      {isSuccess ? (
        <div className="p-8 text-center bg-emerald-50/50">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            ✓
          </div>
          <h4 className="text-2xl font-extrabold text-slate-900 mb-2">ऑर्डर सफलतापूर्वक दर्ज हो गया है!</h4>
          <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">
            धन्यवाद, <strong>{formData.name}</strong>। आपका ऑर्डर (कम्पलीट पेन रिलीफ combo - ₹999) स्वीकार कर लिया गया है।
          </p>
          <div className="bg-white border border-emerald-100 rounded-xl p-4 text-left max-w-sm mx-auto mb-6 text-xs text-slate-600">
            <p className="font-bold text-slate-900 mb-1 text-sm">🚚 डिलीवरी विवरण:</p>
            <p><strong>नाम:</strong> {formData.name}</p>
            <p><strong>मोबाइल:</strong> {formData.phone}</p>
            <p><strong>पता:</strong> {formData.address}, {formData.city}, {formData.state} - {formData.pincode}</p>
          </div>
          <p className="text-emerald-700 text-sm font-semibold mb-6">
            📞 हमारे हेल्थ एक्सपर्ट 24 घंटे के भीतर आपको फोन करके ऑर्डर की पुष्टि करेंगे।
          </p>
          {onClose && (
            <button 
              onClick={onClose}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-full transition-all text-sm"
            >
              बंद करें (Close)
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Product Summary */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex justify-between items-center text-xs sm:text-sm">
            <div>
              <p className="font-bold text-slate-950 text-[0.95rem]">कम्पलीट पेन रिलीफ कॉम्बो (2 महीने का कोर्स)</p>
              <p className="text-slate-500 text-xs mt-0.5">2x Capsules + 2x Orthoneed + 2x Penco Oil</p>
            </div>
            <div className="text-right">
              <span className="text-slate-400 line-through text-xs block">₹1,998</span>
              <span className="text-emerald-600 font-extrabold text-[1.1rem]">₹999</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                पूरा नाम (Full Name) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="उदा. रामकिशन शर्मा"
                className={`w-full p-3 rounded-lg border text-sm outline-none transition-all ${
                  errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-emerald-500'
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                मोबाइल नंबर (10-Digit Mobile) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                placeholder="उदा. 9876543210"
                className={`w-full p-3 rounded-lg border text-sm outline-none transition-all ${
                  errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-emerald-500'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
            </div>

            {/* Full Address */}
            <div>
              <label htmlFor="address" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                घर का पूरा पता (Full Address with House No, Landmark) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="उदा. मकान नंबर 12, मंदिर के पास, नया बाजार"
                className={`w-full p-3 rounded-lg border text-sm outline-none transition-all ${
                  errors.address ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-emerald-500'
                }`}
              />
              {errors.address && <p className="text-red-500 text-xs mt-1 font-medium">{errors.address}</p>}
            </div>

            {/* PinCode & City */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="pincode" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  पिनकोड (Pincode) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  maxLength={6}
                  placeholder="उदा. 201301"
                  className={`w-full p-3 rounded-lg border text-sm outline-none transition-all ${
                    errors.pincode ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-emerald-500'
                  }`}
                />
                {errors.pincode && <p className="text-red-500 text-xs mt-1 font-medium">{errors.pincode}</p>}
              </div>

              <div>
                <label htmlFor="city" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  शहर (City) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="उदा. नोएडा"
                  className={`w-full p-3 rounded-lg border text-sm outline-none transition-all ${
                    errors.city ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-emerald-500'
                  }`}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1 font-medium">{errors.city}</p>}
              </div>
            </div>

            {/* State selection */}
            <div>
              <label htmlFor="state" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                राज्य (State)
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-slate-200 text-sm bg-white outline-none focus:border-emerald-500"
              >
                {statesOfIndia.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Delivery Note */}
          <div className="pt-2 text-xs text-slate-500 flex items-center justify-between">
            <span className="flex items-center text-emerald-600 font-bold">
              🚚 Free Delivery (मुफ्त डिलीवरी)
            </span>
            <span className="flex items-center text-amber-600 font-bold">
              ✓ Cash on Delivery (कैश ऑन डिलीवरी)
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer mt-4"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                ऑर्डर दर्ज हो रहा है...
              </>
            ) : (
              <>
                🛒 ऑर्डर कन्फर्म करें (Confirm Order - Cash on Delivery)
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
  }
