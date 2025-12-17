import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, AlertCircle } from 'lucide-react';
import axiosInstance from '../utils/axiosConfig';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products] = useState([
    {
      id: 1,
      name: 'Plasma Pistol',
      category: 'pistols',
      image: '/images/pistol.jpg',
      price: '৳54,999',
      description: 'A high-tech energy weapon for precision strikes.',
      details: {
        caliber: '9mm',
        origin: 'Futuristic Labs',
        features: 'Laser sight, energy cell battery',
      },
    },
    {
      id: 2,
      name: 'Classic Revolver',
      category: 'pistols',
      image: '/images/revolver.jpg',
      price: '৳38,499',
      description: 'Reliable six-shooter for old-school action.',
      details: {
        caliber: '.38 Special',
        origin: 'USA',
        features: '6-round cylinder, manual hammer',
      },
    },
    {
      id: 3,
      name: 'Assault Rifle',
      category: 'rifles',
      image: '/images/rifle.jpg',
      price: '৳98,999',
      description: 'Powerful and versatile for any battlefield.',
      details: {
        caliber: '5.56mm',
        origin: 'Military Grade',
        features: '30-round magazine, optic ready',
      },
    },
    {
      id: 4,
      name: 'AK-47 Assault Rifle',
      category: 'rifles',
      image: '/images/ak47.jpg',
      price: '৳87,999',
      description: 'Iconic and durable for heavy combat.',
      details: {
        caliber: '7.62mm',
        origin: 'Russia',
        features: '30-round magazine, rugged design',
      },
    },
    {
      id: 5,
      name: 'Double Barrel Shotgun',
      category: 'shotguns',
      image: '/images/doublebarrelshotgun.jpg',
      price: '৳65,999',
      description: 'Classic scattergun for close-range power.',
      details: {
        caliber: '12 Gauge',
        origin: 'Traditional Hunts',
        features: 'Double barrels, break-action',
      },
    },
    {
      id: 6,
      name: 'Pump Action Shotgun',
      category: 'shotguns',
      image: '/images/pumpshotgun.jpg',
      price: '৳71,499',
      description: 'Fast-reload beast for tactical ops.',
      details: {
        caliber: '12 Gauge',
        origin: 'USA',
        features: '8-round tube, pump mechanism',
      },
    },
    {
      id: 7,
      name: 'Modern Sniper Rifle',
      category: 'snipers',
      image: '/images/modernsnipers.jpg',
      price: '৳142,999',
      description: 'Long-range precision with advanced optics.',
      details: {
        caliber: '.308 Win',
        origin: 'Tactical Forces',
        features: '10x scope, bipod, suppressor ready',
      },
    },
    {
      id: 8,
      name: 'Black Ops Sniper',
      category: 'snipers',
      image: '/images/sniperrifleblack.jpg',
      price: '৳164,999',
      description: 'Stealthy and lethal for covert missions.',
      details: {
        caliber: '.338 Lapua',
        origin: 'Special Ops',
        features: 'Night vision, integrated silencer',
      },
    },
    {
      id: 9,
      name: 'Combat Knife',
      category: 'knives',
      image: '/images/combatknife.jpg',
      price: '৳16,499',
      description: 'Sharp and durable for close-quarters combat.',
      details: {
        'Blade Length': '7 inches',
        origin: 'Military Issue',
        features: 'Serrated edge, sheath included',
      },
    },
    {
      id: 10,
      name: 'Samurai Katana',
      category: 'knives',
      image: '/images/katana.jpg',
      price: '৳32,999',
      description: 'Elegant blade with legendary sharpness.',
      details: {
        'Blade Length': '28 inches',
        origin: 'Japan',
        features: 'Folded steel, traditional handle',
      },
    },
  ]);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'pistols', label: 'Pistols' },
    { id: 'rifles', label: 'Rifles' },
    { id: 'shotguns', label: 'Shotguns' },
    { id: 'snipers', label: 'Snipers' },
    { id: 'knives', label: 'Knives' },
  ];

  useEffect(() => {
    // Check if user is logged in (you can implement this with localStorage or API call)
    const checkLoginStatus = async () => {
      try {
        // Example: Check authentication status
        const token = localStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
    checkLoginStatus();
  }, []);

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = async (productId) => {
    if (!isLoggedIn) {
      alert('You must log in to add items to cart.');
      return;
    }

    try {
      // Example API call with axios
      await axiosInstance.post('/cart/add', { productId });
      alert('Item added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-4xl mb-6 text-center text-red-600">Shop Weapons</h2>
      
      {!isLoggedIn && (
        <div className="mb-6 p-4 bg-red-900/30 rounded-lg border border-red-600">
          <div className="flex items-center gap-2 text-red-400 text-center justify-center">
            <AlertCircle size={20} />
            <p>
              You must log in to access the shop and buy guns.{' '}
              <Link to="/login" className="text-green-400 hover:text-green-300 underline">
                Log In Here
              </Link>
            </p>
          </div>
        </div>
      )}

      {isLoggedIn && (
        <>
          <div className="flex gap-4 mb-8 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[200px] max-h-[150px] w-auto h-auto object-cover rounded-md mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-y-12"
                />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="mb-4">{product.description}</p>
                <ul className="list-none p-0 my-4 text-left text-sm">
                  {Object.entries(product.details).map(([key, value]) => (
                    <li key={key} className="mb-2">
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
                <span className="text-red-600 font-bold text-lg block mb-4">{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="btn-add-cart w-full flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;

