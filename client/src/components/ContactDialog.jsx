import React from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ContactDialog = ({ isOpen, onClose }) => {
  const { cartItems, getTotalPrice } = useCart();
  
  if (!isOpen) return null;

  const whatsappNumber = '8801305787144';
  const messengerLink = 'https://www.messenger.com/e2ee/t/7431186796989108';
  
  // Create WhatsApp message with all cart items
  const cartItemsList = cartItems.map(item => 
    `${item.name} (${item.quantity}x) - ${item.price}`
  ).join('\n');
  
  const totalPrice = getTotalPrice();
  const whatsappMessage = `Hello, I'm interested in buying the following items:\n\n${cartItemsList}\n\nTotal: ৳${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-900 border border-red-600 rounded-lg shadow-[0_0_30px_rgba(255,0,0,0.5)] max-w-2xl w-full p-6 relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-600 transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">
          Contact Us to Purchase
        </h3>

        {cartItems.length > 0 && (
          <div className="mb-6 p-4 bg-black/50 rounded-lg border border-red-600/50 max-h-96 overflow-y-auto">
            <h4 className="text-red-400 font-bold mb-3 text-lg">Cart Items:</h4>
            <div className="space-y-3">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded border border-red-600/30">
                  <div className="flex-1">
                    <p className="text-white font-semibold">{item.name}</p>
                    <p className="text-gray-400 text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-red-400 font-bold">{item.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-red-600/50">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold text-lg">Total:</span>
                <span className="text-red-600 font-bold text-xl">
                  ৳{totalPrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
          </div>
        )}

        <p className="text-white mb-6 text-center">
          Click below to contact us via WhatsApp or Messenger:
        </p>

        <div className="flex flex-col gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-all duration-300 shadow-lg hover:scale-105"
          >
            <Phone size={20} />
            <span>WhatsApp: {whatsappNumber}</span>
          </a>

          <a
            href={messengerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all duration-300 shadow-lg hover:scale-105"
          >
            <MessageCircle size={20} />
            <span>Messenger Chat</span>
          </a>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full btn-secondary text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactDialog;

