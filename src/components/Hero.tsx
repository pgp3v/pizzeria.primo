import React from 'react';
import { ArrowDown, Star, Clock, Truck } from 'lucide-react';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Add entrance animations
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in-up');
      }, index * 200);
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 via-red-500/80 to-orange-500/90 animate-pulse-slow"></div>
        <img 
          src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Pizza Background"
          className="w-full h-full object-cover animate-ken-burns"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight animate-on-load opacity-0">
            <span className="block transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl animate-bounce-in">
              أهلاً بكم في
            </span>
            <span className="block text-yellow-300 transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl animate-glow">
              Pizzeria Primo
            </span>
            <span className="block text-2xl md:text-3xl text-yellow-200 mt-4 animate-typewriter">مدينة العيون</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-red-100 font-light leading-relaxed drop-shadow-lg animate-on-load opacity-0">
            نقدم لكم أشهى أنواع البيتزا المصنوعة بأجود المكونات الطازجة
            <br />
            مع خدمة توصيل سريعة في جميع أنحاء العيون وطعم لا يُنسى
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 animate-on-load opacity-0">
            <a
              href="#menu"
              className="group bg-yellow-500 hover:bg-yellow-400 text-red-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-4 border-yellow-300 animate-float"
            >
              <span className="flex items-center gap-2">
                شاهد القائمة
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </a>
            <button
              onClick={() => {
                const message = `مرحباً! أريد طلب بيتزا من Pizzeria Primo في العيون 🍕`;
                const whatsappUrl = `https://wa.me/212600576794?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="group bg-transparent border-4 border-white hover:bg-white hover:text-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-pulse-border"
            >
              اطلب عبر الواتساب
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-on-load opacity-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 animate-slide-up">
              <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">جودة عالية</h3>
              <p className="text-red-100 text-sm">مكونات طازجة وطعم استثنائي</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">تحضير سريع</h3>
              <p className="text-red-100 text-sm">جاهز في أقل من 20 دقيقة</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Truck className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">توصيل في العيون</h3>
              <p className="text-red-100 text-sm">خدمة توصيل سريعة في جميع أنحاء العيون</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <ArrowDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;