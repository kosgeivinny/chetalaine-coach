'use client';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+254792528578'; // Replace with your number
  const message = encodeURIComponent('Hello! I would like to inquire about your services.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white 
        rounded-full flex items-center justify-center shadow-lg 
        hover:scale-110 hover:rotate-12 hover:animate-bounce 
        transition-transform duration-300
        ring-2 ring-[#25D366] ring-offset-2 ring-offset-white
      "
    >
      <FaWhatsapp size={32} className="animate-pulse" />
    </a>
  );
};

export default WhatsAppButton;
