// components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold"></div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center">Số điện thoại: <i>0123456789 (Ms.AnXingTu)</i></p>
          <p className="text-center">© 2024 PORTCON. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
