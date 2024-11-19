"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const ProductKhoDetails = () => {
  // Khởi tạo state để theo dõi phần nào đang được hiển thị
  const [activeSection, setActiveSection] = useState<'devices' | 'features' | 'shipping'>('devices');

  // Dữ liệu cho các phần
  const sections = {
    devices: {
      title: 'Thiết bị',
      content: (
        <>
          <div className=' text-blue-900 text-opacity-75 space-y-4'>
          <Image quality={100} src={'/thietbii.png'} alt='daukeo' width={1000} height={1000} className=' rounded-4xl my-5'>
            
            </Image>
            <p>Khung đà, trụ</p>
            <p>Đà đáy, mặt sàn, nóc</p>
            <p>Vách đứng bộ cửa đóng mở</p>
            <p>Hệ thống gù chịu lực tại các góc Container</p>
            <p>Chất liệu thép không gỉ</p>
            
          </div>
        </>
      ),
    },
    features: {
      title: 'Tính năng',
      content: (
        <>
          <div className=' text-blue-900 text-opacity-75 space-x-8'>
          <Image src={'/tinhnang.jpg'} alt='daukeo' width={1000} height={1000} className=' rounded-3xl my-5'>
            
            </Image>
            <p className=' mb-4 font-semibold'>Các tính năng nổi bật của sản phẩm bao gồm:</p>
            <ul className=' space-y-4'>
                <li>Được sử dụng phổ biến trong chuyên chở hàng hoá</li>
                <li>Làm kho hàng di động</li>
                <li>Làm kho chứa hàng</li>
                <li>Không yêu cầu điều kiện đặc biệt về nhiệt độ hay độ ẩm</li>
            </ul>
          </div>
        </>
      ),
    },
    shipping: {
      title: 'Dịch vụ vận chuyển',
      content: (
        <>
          <Image src={'/dichvuvanchuyen.jpg'} alt='daukeo' width={1000} height={1000} className=' rounded-3xl my-5'>
            
          </Image>
          <p className=' text-blue-900'>Chúng tôi sử dụng xe đầu kéo rơ mooc để vận chuyển container. là một loại xe tải có một hoặc nhiều rơ mooc gắn phía sau để vận chuyển hàng hóa. Xe đầu kéo thường có động cơ mạnh mẽ và có thể kéo được nhiều rơ mooc. Rơ mooc thường có kích thước lớn và có thể chứa được nhiều hàng hóa.
          </p>
        </>
      ),
    },
  } as const; // Đánh dấu sections là hằng số

  // Hàm để xử lý việc chọn phần
  const handleSectionClick = (section: keyof typeof sections) => {
    setActiveSection(section);
  };

  return (
    <div className="m-5 rounded-3xl shadow-2xl bg-slate-100 p-5">
      {/* Thanh điều hướng */}
      <div className="flex space-x-4 mb-4 justify-center">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section as keyof typeof sections)}
            className={`py-2 px-4 rounded-lg font-bold transition duration-300 ${activeSection === section ? 'bg-blue-900 text-white' : 'bg-slate-100 text-blue-900'}`}
          >
            {sections[section as keyof typeof sections].title}
          </button>
        ))}
      </div>

      {/* Nội dung hiển thị */}
      <div className="border-t-2 border-gray-300 pt-4">
        <h3 className="text-2xl font-bold text-blue-900">{sections[activeSection].title}</h3>
        
        {/* Hiển thị nội dung với chiều cao tối thiểu 700px */}
        <div className="mt-2 text-gray-700 min-h-[700px]">
          {sections[activeSection].content}
        </div>
      </div>
    </div>
  );
};

export default ProductKhoDetails;
