import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      info: '+212 600-576794',
      link: 'tel:+212600576794'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      info: 'العيون - المغرب - خدمة توصيل في جميع أنحاء المدينة',
      link: '#'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      info: 'يومياً من 10:00 صباحاً - 2:00 صباحاً',
      link: '#'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      info: 'info@pizzeriaprimo.ma',
      link: 'mailto:info@pizzeriaprimo.ma'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-black text-red-600 mb-4 drop-shadow-lg animate-text-glow">
            اتصل بنا
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded-full animate-expand"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم في أي وقت في مدينة العيون. اتصلوا بنا أو زوروا مطعمنا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-slide-in-up">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-red-600 mb-8 animate-slide-in-left">معلومات الاتصال</h3>
            
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-card-entrance"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 p-3 rounded-full animate-pulse-glow">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-red-600 mb-2">{item.title}</h4>
                      {item.link.startsWith('#') ? (
                        <p className="text-gray-600 leading-relaxed">{item.info}</p>
                      ) : (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-red-600 transition-colors duration-300 leading-relaxed"
                        >
                          {item.info}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-xl animate-float">
              <h4 className="text-2xl font-bold mb-4">اطلب الآن!</h4>
              <p className="text-red-100 mb-6 leading-relaxed">
                اتصل بنا واستمتع بأشهى أنواع البيتزا مع توصيل سريع في العيون
              </p>
              <button
                onClick={() => {
                  const message = `مرحباً! أريد طلب بيتزا من Pizzeria Primo في العيون 🍕`;
                  const whatsappUrl = `https://wa.me/212600576794?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-yellow-500 hover:bg-yellow-400 text-red-800 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block animate-bounce-in"
              >
                اطلب عبر الواتساب
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl animate-slide-in-right">
            <h3 className="text-3xl font-bold text-red-600 mb-8 animate-text-glow">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 animate-input-focus"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 animate-input-focus"
                  placeholder="أدخل رقم هاتفك"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none animate-input-focus"
                  placeholder="اكتب رسالتك هنا..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 animate-pulse-glow"
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;