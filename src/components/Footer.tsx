import React from 'react';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'القائمة', href: '#menu' },
    { name: 'حولنا', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-red-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/public/image.png" 
                alt="Pizzeria Primo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Pizzeria Primo</h3>
                <p className="text-red-200 text-sm">أفضل بيتزا في المدينة</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نقدم لكم أشهى أنواع البيتزا المصنوعة بأجود المكونات الطازجة منذ أكثر من 15 سنة.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-white/10 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">معلومات الاتصال</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-300 mt-1" />
                <div>
                  <p className="text-gray-300">اتصل بنا</p>
                  <button 
                    onClick={() => {
                      const message = `مرحباً! أريد التواصل مع Pizzeria Primo في العيون 🍕`;
                      const whatsappUrl = `https://wa.me/212600576794?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="text-white hover:text-yellow-300 transition-colors duration-300 text-right"
                  >
                    +212 600-576794
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-300 mt-1" />
                <div>
                  <p className="text-gray-300">العنوان</p>
                  <p className="text-white">العيون - المغرب - خدمة توصيل</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-300 mt-1" />
                <div>
                  <p className="text-gray-300">ساعات العمل</p>
                  <p className="text-white">10:00 ص - 2:00 ص يومياً</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-300 mt-1" />
                <div>
                  <p className="text-gray-300">البريد الإلكتروني</p>
                  <a href="mailto:info@pizzeriaprimo.ma" className="text-white hover:text-yellow-300 transition-colors duration-300">
                    info@pizzeriaprimo.ma
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">اشترك في نشرتنا</h4>
            <p className="text-gray-300 mb-4 leading-relaxed">
              احصل على أحدث العروض والأخبار مباشرة في بريدك الإلكتروني
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-300 transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-red-800 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © 2024 Pizzeria Primo. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;