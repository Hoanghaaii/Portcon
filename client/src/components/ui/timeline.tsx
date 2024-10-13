"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const Timeline = () => {
  // Dữ liệu các sự kiện, thêm đường dẫn hình ảnh vào đây
  const events = [
    {
      time: '2003',
      description: 'Thành lập công ty',
      imageUrl: '/pageImg.jpg', // Đường dẫn ảnh
    },
    {
      time: '2008',
      description: 'Bán được 1 sản phẩm',
      imageUrl: '/pageImg.jpg',
    },
    {
      time: '2021',
      description: 'Mở rộng quy mô',
      imageUrl: '/pageImg.jpg',
    },
    {
      time: '2024',
      description: 'Bán được 2 sản phẩm',
      imageUrl: '/catLaugh.jpeg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Lưu trữ chỉ số của mốc thời gian được chọn

  const handleClick = (index: number) => { // Định nghĩa kiểu cho index
    setActiveIndex(index === activeIndex ? null : index); // Đóng nếu nhấp vào cùng một mốc
  };

  return (
    <div className="relative w-full py-10">
      {/* Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-600"></div>

      <div className="grid grid-cols-4 gap-4">
        {events.map((event, index) => (
          <div key={index} className="relative">
            {/* Nút thời gian */}
            <div
              className={`flex justify-center items-center w-12 h-12 rounded-full cursor-pointer ${
                activeIndex === index ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'
              }`}
              onClick={() => handleClick(index)} // Sử dụng hàm handleClick với index
            >
              {event.time}
            </div>

            {/* Hiển thị thông tin sự kiện nếu được chọn */}
            {activeIndex === index && (
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 p-6 bg-white shadow-lg rounded-lg w-96">
                <p className="mb-2 text-lg font-semibold text-blue-600">{event.description}</p>
                {/* Hiển thị ảnh */}
                <Image 
                  width={300} 
                  height={200} 
                  src={event.imageUrl} 
                  alt={`Event ${index + 1}`} 
                  className="w-full h-32 object-cover rounded-md" 
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
