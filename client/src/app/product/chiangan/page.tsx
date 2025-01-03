"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Dữ liệu sản phẩm mẫu
const products = [
  {
    id: 7,
    name: 'Container portcon 1',
    price: '100.000 VNĐ',
    imageUrls: ['/40ft.png', '/pageImg.jpg', '/pageImg.jpg'],
    inStock: true,
  },
  {
    id: 7,
    name: 'Container portcon 2',
    price: '200.000 VNĐ',
    imageUrls: ['/40ft2.png', '/pageImg.jpg'],
    inStock: true,
  },
  {
    id: 8,
    name: 'Container portcon 3',
    price: '150.000 VNĐ',
    imageUrls: ['/40ft3.png'],
    inStock: true,
  },
  {
    id: 7,
    name: 'Container portcon 4',
    price: '200.000 VNĐ',
    imageUrls: ['/40ft2.png', '/pageImg.jpg'],
    inStock: true,
  },
];

// Định nghĩa kiểu cho sản phẩm

const Page: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (id: number) => { 
    // Chuyển hướng đến trang chi tiết dựa trên `id` của sản phẩm
    router.push(`/product/${id}`);
  };
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Danh Sách Container 40FT</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-200"
            onClick={() => handleCardClick(product.id)} // Truyền id sản phẩm
          >
            <Image
              width={100}
              height={100}
              src={product.imageUrls[0]} // Hiển thị hình ảnh đầu tiên
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-900">{product.name}</h2>
              <p className={`mt-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'Còn hàng' : 'Hết hàng'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
