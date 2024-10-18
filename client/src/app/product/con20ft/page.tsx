"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Dữ liệu sản phẩm mẫu
const products = [
  {
    id: 1,
    name: 'Container portcon 20FT 1',
    price: '100.000 VNĐ',
    imageUrls: ['/1111.jpg', '/11.jpg', '/111.jpg', '/1111.jpg'],
    inStock: true,
  },
  {
    id: 1,
    name: 'Container portcon 20FT 2',
    price: '200.000 VNĐ',
    imageUrls: ['/2.jpg', '/2.jpg'],
    inStock: true,
  },
  {
    id: 2,
    name: 'Container portcon khô 20FT 3',
    price: '150.000 VNĐ',
    imageUrls: ['/kho1.jpg'],
    inStock: true,
  },
  {
    id: 3,
    name: 'Container portcon khô 20FT 4',
    price: '300.000 VNĐ',
    imageUrls: ['/kho2.jpg', '/2.jpg'],
    inStock: true,
  },
  {
    id: 1,
    name: 'Container portcon 20FT 5',
    price: '300.000 VNĐ',
    imageUrls: ['/2.jpg', '/2.jpg', '/2.jpg'],
    inStock: true,
  },
  {
    id: 1,
    name: 'Container portcon 20FT 6',
    price: '300.000 VNĐ',
    imageUrls: ['/2.jpg', '/2.jpg'],
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
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Danh Sách Sản Phẩm 20FT</h1>
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
