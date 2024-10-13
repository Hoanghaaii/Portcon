"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

// Dữ liệu sản phẩm mẫu
const products = [
  {
    id: 7,
    name: 'Sản phẩm 1',
    price: '100.000 VNĐ',
    imageUrl: '/pageImg.jpg',
    inStock: true,
  },
  {
    id: 8,
    name: 'Sản phẩm 2',
    price: '200.000 VNĐ',
    imageUrl: '/pageImg.jpg',
    inStock: false,
  },
  {
    id: 9,
    name: 'Sản phẩm 3',
    price: '150.000 VNĐ',
    imageUrl: '/pageImg.jpg',
    inStock: true,
  },
  {
    id: 10,
    name: 'Sản phẩm 4',
    price: '300.000 VNĐ',
    imageUrl: '/pageImg.jpg',
    inStock: true,
  },
  {
    id: 11,
    name: 'Sản phẩm 5',
    price: '300.000 VNĐ',
    imageUrl: '/pageImg.jpg',
    inStock: true,
  },
  {
    id: 12,
    name: 'Sản phẩm 6',
    price: '300.000 VNĐ',
    imageUrl: '/pageImg.jpg',
    inStock: true,
  },
];

const Page = () => {
  const router = useRouter();

  const handleCardClick = (product) => {
    // Chuyển hướng đến trang chi tiết với dữ liệu sản phẩm
    router.push(`/product/${product.id}?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&imageUrl=${encodeURIComponent(product.imageUrl)}&inStock=${product.inStock}`);
  };
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Danh Sách Sản Phẩm 40FT</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(product)} // Gọi hàm khi click vào card
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
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