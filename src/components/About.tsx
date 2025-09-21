import React from 'react';
import { Award, Clock, Users, Flame } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '10000+', label: 'عميل سعيد' },
    { icon: Clock, number: '15', label: 'سنة خبرة' },
    { icon: Award, number: '50+', label: 'جائزة' },
    { icon: Flame, number: '24/7', label: 'خدمة متاحة' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border-4 border-yellow-300 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border-4 border-yellow-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl font-black mb-6 drop-shadow-lg animate-slide-in-right">
              حولنا
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mb-8 rounded-full animate-expand"></div>
            
            <p className="text-xl leading-relaxed mb-6 text-red-100 animate-fade-in-up">
              في <span className="font-bold text-yellow-300">Pizzeria Primo</span>، نحن نؤمن بأن البيتزا ليست مجرد طعام، 
              بل هي تجربة تجمع الأحباء حول طاولة واحدة. منذ تأسيسنا، كرسنا أنفسنا لتقديم أفضل أنواع البيتزا 
              المصنوعة بحب وشغف حقيقي في مدينة العيون.
            </p>

            <p className="text-lg leading-relaxed mb-8 text-red-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              نستخدم أجود أنواع الدقيق الإيطالي والمكونات الطازجة المحلية، ونخبز كل بيتزا في أفران 
              حجرية تقليدية للحصول على ذلك الطعم الأصيل والقوام المثالي. نوصل لجميع أنحاء العيون.
            </p>

            <div className="flex flex-col md:flex-row gap-4 animate-slide-in-left">
              <button
                onClick={() => {
                  const message = `مرحباً! أريد معرفة المزيد عن Pizzeria Primo في العيون 🍕`;
                  const whatsappUrl = `https://wa.me/212600576794?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-yellow-500 hover:bg-yellow-400 text-red-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 text-center animate-float"
              >
                تواصل عبر الواتساب
              </button>
              <a
                href="#menu"
                className="border-2 border-white hover:bg-white hover:text-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 text-center animate-pulse-border"
              >
                شاهد القائمة
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl animate-float">
              <img
                src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pizza Chef"
                className="w-full h-80 object-cover rounded-xl shadow-xl animate-shimmer"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white text-red-600 p-6 rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce-in">
              <div className="text-center">
                <div className="text-3xl font-black text-red-600">15+</div>
                <div className="text-sm font-medium">سنة من الخبرة</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-stagger-in">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-all duration-300 hover:bg-white/20 animate-card-entrance"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Icon className="w-12 h-12 text-yellow-300 mx-auto mb-4 animate-spin-slow" />
                <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-red-100 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;