import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import OrderModal from './OrderModal';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('الكلاسيكية');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const categories = ['الكلاسيكية', 'المتخصصة', 'النباتية', 'المشروبات'];

  const menuItems = {
    'الكلاسيكية': [
      {
        id: 1,
        name: 'مارغريتا كلاسيكية',
        price: 45,
        image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'صلصة طماطم، موزاريلا طازجة، ريحان',
        rating: 4.8
      },
      {
        id: 2,
        name: 'بيتزا الببروني',
        price: 55,
        image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'ببروني مقطع رفيع، موزاريلا، صلصة طماطم',
        rating: 4.9
      },
      {
        id: 3,
        name: 'أربعة أجبان',
        price: 65,
        image: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'موزاريلا، بارميزان، جورجونزولا، ريكوتا',
        rating: 4.7
      }
    ],
    'المتخصصة': [
      {
        id: 4,
        name: 'بيتزا الشيف الخاصة',
        price: 75,
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'لحم مشوي، فطر، فلفل ملون، جبن',
        rating: 5.0
      },
      {
        id: 5,
        name: 'بيتزا البحر الأبيض',
        price: 85,
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'جمبري، سلمون، كابري، صلصة بيضاء',
        rating: 4.8
      },
      {
        id: 6,
        name: 'بيتزا اللحم المدخن',
        price: 70,
        image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'لحم مدخن، بصل أحمر، جرجير، موزاريلا',
        rating: 4.9
      }
    ],
    'النباتية': [
      {
        id: 7,
        name: 'بيتزا الخضار المشوية',
        price: 50,
        image: 'https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'باذنجان، كوسا، فلفل، طماطم، موزاريلا',
        rating: 4.6
      },
      {
        id: 8,
        name: 'بيتزا الجرجير والجوز',
        price: 55,
        image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'جرجير طازج، جوز، جبن الماعز، عسل',
        rating: 4.5
      }
    ],
    'المشروبات': [
      {
        id: 9,
        name: 'عصائر طازجة',
        price: 15,
        image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'برتقال، تفاح، جزر طازج',
        rating: 4.4
      },
      {
        id: 10,
        name: 'مشروبات غازية',
        price: 10,
        image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'كوكا كولا، فانتا، سبرايت',
        rating: 4.2
      }
    ]
  };

  const handleOrderClick = (item: any) => {
    setSelectedItem(item);
    setIsOrderModalOpen(true);
  };
  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-black text-red-600 mb-4 drop-shadow-lg animate-text-glow">
            قائمة الطعام
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded-full animate-expand"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            اكتشف مجموعتنا الرائعة من البيتزا المصنوعة بأجود المكونات الطازجة
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:rotate-2 ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-2xl animate-pulse-glow'
                  : 'bg-white text-red-600 hover:bg-red-50 border-2 border-red-600 animate-float'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
          {menuItems[activeCategory]?.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-card-entrance hover:rotate-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 animate-shimmer"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold animate-bounce-in">
                  {item.price} درهم
                </div>
                <button className="absolute top-4 left-4 bg-white/80 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full transition-all duration-300 transform hover:scale-110 animate-heart-beat">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(item.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 font-medium">({item.rating})</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-red-600">{item.price} درهم</span>
                  <button 
                    onClick={() => handleOrderClick(item)}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    اطلب الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        item={selectedItem}
      />
    </section>
  );
};

export default Menu;