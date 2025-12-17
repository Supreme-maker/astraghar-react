import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Home = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallerySlider = galleryRef.current;
    if (gallerySlider) {
      let scrollAmount = 0;
      const interval = setInterval(() => {
        scrollAmount += 300;
        if (scrollAmount >= gallerySlider.scrollWidth) scrollAmount = 0;
        gallerySlider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: 'Plasma Pistol',
      image: '/images/pistol.jpg',
      price: '৳54,999',
      description: 'High-tech energy weapon for precision strikes.',
    },
    {
      id: 2,
      name: 'Assault Rifle',
      image: '/images/rifle.jpg',
      price: '৳98,999',
      description: 'Powerful and versatile for any battlefield.',
    },
    {
      id: 3,
      name: 'Modern Sniper Rifle',
      image: '/images/modernsnipers.jpg',
      price: '৳142,999',
      description: 'Long-range precision with advanced optics.',
    },
  ];

  const galleryImages = [
    '/images/pistol.jpg',
    '/images/revolver.jpg',
    '/images/rifle.jpg',
    '/images/ak47.jpg',
    '/images/doublebarrelshotgun.jpg',
    '/images/pumpshotgun.jpg',
    '/images/modernsnipers.jpg',
    '/images/sniperrifleblack.jpg',
    '/images/combatknife.jpg',
    '/images/katana.jpg',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center mb-12 animate-fade-in animate-float">
        <h2 className="text-5xl mb-4 text-red-600 shadow-[0_0_20px_rgba(255,0,0,0.5)]">
          Welcome to AstraGhar
        </h2>
        <p className="text-lg mb-6 animate-slide-in">
          Your premier destination for high-quality weapons and accessories
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 btn-primary"
        >
          <ShoppingBag size={20} />
          Shop Now
          <ArrowRight size={20} />
        </Link>
      </section>

      {/* Featured Section */}
      <section className="mb-12">
        <h3 className="text-center mb-8 text-4xl text-red-600 shadow-[0_0_15px_rgba(255,0,0,0.5)]">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-[200px] max-h-[150px] w-auto h-auto object-cover rounded-md mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-y-12"
              />
              <h4 className="text-xl font-bold mb-2">{product.name}</h4>
              <p className="mb-4">{product.description}</p>
              <span className="text-red-600 font-bold text-lg">{product.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mt-8">
        <h3 className="text-center mb-4 text-2xl text-red-600">Gallery</h3>
        <div
          ref={galleryRef}
          className="flex overflow-x-auto gap-4 p-4 gallery-slider"
        >
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="max-w-[200px] max-h-[150px] w-auto h-auto object-cover rounded-md flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-y-12"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

