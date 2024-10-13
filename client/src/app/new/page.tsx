"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Image từ next/image

// Dữ liệu bài viết mẫu
const news = [
  {
    id:1,
    title: 'Bài viết 1',
    description: 'Mô tả về bài viết 1.',
    author: 'Minh An',
    date: '2024-10-14',
    imageUrl: '/pageImg.jpg', // Đường dẫn tới hình ảnh
  },
  {
    id:2,
    title: 'Bài viết 2',
    description: 'Mô tả về bài viết 2.',
    author: 'Minh An',
    date: '2024-10-14',
    imageUrl: '/pageImg.jpg', // Đường dẫn tới hình ảnh
  },
  {
    id:3,
    title: 'Bài viết 3',
    description: 'Mô tả về bài viết 3.',
    author: 'Minh An',
    date: '2024-10-14',
    imageUrl: '/pageImg.jpg', // Đường dẫn tới hình ảnh
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
      <h1 className="text-3xl font-bold mb-6">Danh sách Bài viết</h1>
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
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{newsItem.title}</h2>
              <p className="text-gray-600">{newsItem.description}</p>
              <p className="text-gray-500">Tác giả: {newsItem.author}</p>
              <p className="text-gray-500">Ngày: {newsItem.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
