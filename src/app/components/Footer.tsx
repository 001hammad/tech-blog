import React from 'react';
import { FaWhatsapp, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">&copy; 2025 Your Blog. All rights reserved.</p>
        
        <div className="flex justify-center gap-6 mt-6">
          {/* External Link: WhatsApp */}
          <Link href="https://wa.me/+923172774237" target='_blank'>
            <button className="text-white hover:text-green-400 transition duration-300">
              <FaWhatsapp size={28} />
            </button>
          </Link>

          {/* External Link: LinkedIn */}
          <Link href="https://www.linkedin.com/in/hammad-hafeez-554789329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <button className="text-white hover:text-blue-500 transition duration-300">
              <FaLinkedin size={28} />
            </button>
          </Link>

          {/* External Link: CV */}
          <Link href="https://resume-1-lime.vercel.app/">
            <button className="text-white hover:text-red-500 transition duration-300">
              <FaFilePdf size={28} />
            </button>
          </Link>
        </div>

        {/* Internal Link Example */}
        <div className="mt-6 text-gray-400 text-sm">
          <Link href="/about">
            <button className="text-white hover:text-gray-300">About Us</button>
          </Link>
        </div>

        <div className="mt-6 text-gray-400 text-sm">
          <p>Built with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
