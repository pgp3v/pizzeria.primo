import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart, MessageCircle } from 'lucide-react';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  } | null;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, item }) => {
  const [quantity, setQuantity] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  if (!isOpen || !item) return null;

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    const total = item.price * quantity;
    const message = `🍕 *طلب جديد من Pizzeria Primo*

👤 *معلومات العميل:*
الاسم: ${customerInfo.name}
الهاتف: ${customerInfo.phone}
العنوان: ${customerInfo.address} - العيون

🛒 *تفاصيل الطلب:*
المنتج: ${item.name}
الكمية: ${quantity}
السعر الواحد: ${item.price} درهم
المجموع: ${total} درهم

📝 *ملاحظات إضافية:*
${customerInfo.notes || 'لا توجد ملاحظات'}

شكراً لاختياركم Pizzeria Primo في العيون! 🍕`;

    const whatsappUrl = `https://wa.me/212600576794?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setCustomerInfo({ name: '', phone: '', address: '', notes: '' });
    setQuantity(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modal-entrance">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200 animate-slide-down">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300 animate-spin-on-hover"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <h2 className="text-2xl font-bold text-red-600 text-center animate-text-glow">إتمام الطلب</h2>
        </div>

        {/* Product Info */}
        <div className="p-6 border-b border-gray-200 animate-slide-in-left">
          <div className="flex gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-xl shadow-lg animate-shimmer"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2 animate-fade-in-up">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-600 animate-pulse-glow">{item.price} درهم</span>
                <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 animate-float">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 animate-bounce-on-click"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-lg min-w-[2rem] text-center animate-number-change">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 animate-bounce-on-click"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Information Form */}
        <div className="p-6 animate-slide-in-right">
          <h4 className="text-lg font-bold text-gray-800 mb-4 animate-text-glow">معلومات العميل</h4>
          <div className="space-y-4 animate-stagger-in">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الكامل *
              </label>
              <input
                type="text"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 animate-input-focus"
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                رقم الهاتف *
              </label>
              <input
                type="tel"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 animate-input-focus"
                placeholder="أدخل رقم هاتفك"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                عنوان التوصيل في العيون *
              </label>
              <input
                type="text"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 animate-input-focus"
                placeholder="أدخل عنوان التوصيل بالتفصيل"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ملاحظات إضافية
              </label>
              <textarea
                name="notes"
                value={customerInfo.notes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none animate-input-focus"
                placeholder="أي ملاحظات خاصة بالطلب (اختياري)"
              />
            </div>
          </div>
        </div>

        {/* Order Summary & Submit */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 animate-slide-up">
          <div className="flex items-center justify-between mb-6 animate-fade-in-up">
            <span className="text-lg font-medium text-gray-700">المجموع الكلي:</span>
            <span className="text-3xl font-bold text-red-600 animate-pulse-glow">{item.price * quantity} درهم</span>
          </div>
          
          <button
            onClick={sendToWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg animate-float"
          >
            <MessageCircle className="w-6 h-6" />
            إرسال الطلب عبر الواتساب
          </button>
          
          <p className="text-center text-sm text-gray-500 mt-3">
            سيتم توجيهك إلى الواتساب لإتمام الطلب
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;