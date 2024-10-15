"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Image từ next/image

// Dữ liệu bài viết mẫu
const news = [
  {
    id:1,
    title: 'THỊ TRƯỜNG CONTAINER DỰ KIẾN SẼ TĂNG TRƯỞNG',
    description: '',
    author: 'Minh An',
    date: '2024-10-14',
    imageUrl: '/new1.webp', // Đường dẫn tới hình ảnh
  },
  {
    id:2,
    title: 'DỊCH VỤ VẬN TẢI ĐƯỜNG BỘ. ƯU VÀ NHƯỢC ĐIỂM',
    description: '',
    author: 'Minh An',
    date: '2024-10-14',
    imageUrl: '/new2.jpg', // Đường dẫn tới hình ảnh
  },
  {
    id:3,
    title: 'LỢI ÍCH KHI SỬ DỤNG CONTAINER LÀM KHO',
    description: '',
    author: 'Minh An',
    date: '2024-10-14',
    imageUrl: '/new3.jpg', // Đường dẫn tới hình ảnh
  },
  // Thêm các bài viết khác...
];

const NewsPage = () => {
  const router = useRouter();

  // Chỉ truyền id
  const handleViewDetail = (newsItem: typeof news[number]) => {
    router.push(`/new/${newsItem.id}`); // Chuyển hướng chỉ với id
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Danh sách Bài viết</h1>
      <div className="flex flex-col space-y-6">
        {news.map((newsItem) => (
          <div 
            key={newsItem.id} 
            className="flex p-6 rounded-lg shadow-lg bg-slate-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer" 
            onClick={() => handleViewDetail(newsItem)} // Bấm vào card sẽ chuyển trang
          >
            <Image
              src={newsItem.imageUrl}
              alt={`Hình ảnh ${newsItem.title}`}
              width={450}
              height={300}
              className="object-cover rounded-lg mr-6"
            />
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-semibold text-blue-900">{newsItem.title}</h2>
              <p className="text-blue-900 text-opacity-50">{newsItem.description}</p>
              <p className=" text-blue-900 text-opacity-50">Tác giả: {newsItem.author}</p>
              <p className=" text-blue-900 text-opacity-50">Ngày: {newsItem.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
