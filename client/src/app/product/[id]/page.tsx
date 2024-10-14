"use client";
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { DatePicker } from "../../../components/ui/datepicker";
import DropDownPicker from '../../../components/ui/ddpicker';
import { Button } from '../../../components/ui/button';
import ProductDetails from '../../../components/ui/productinf'; // Đổi tên cho rõ ràng

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const searchParams = useSearchParams();
  const id = params.id;
  const name = searchParams.get('name');
  const price = searchParams.get('price');
  const imageUrls = searchParams.getAll('imageUrl');
  const inStock = searchParams.get('inStock');

  // Kiểm tra dữ liệu nhập vào và khởi tạo state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Kiểm tra dữ liệu sau khi khởi tạo state
  if (!id || !name || !price || imageUrls.length === 0 || inStock === null) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <div className="flex w-full mb-4 p-8">
        {/* Khối hiển thị thông tin sản phẩm */}
        <div className="rounded-3xl shadow-2xl bg-slate-100 max-w-max m-5 pb-5">
          <h2 className="text-xl font-semibold m-4 text-blue-900">{name}</h2>

          {/* Hiển thị ảnh sản phẩm */}
          <div className='m-6 w-[600px] h-[400px] border-2 rounded-3xl mb-10 flex justify-center items-center'>
            <Image
              src={imageUrls[currentImageIndex]}
              alt={`Hình ảnh sản phẩm ${currentImageIndex + 1}`}
              width={600}
              height={400}
              className="rounded-3xl transition hover:scale-105 duration-1000"
            />
          </div>

          {/* Hiển thị danh sách ảnh nhỏ để người dùng có thể chọn */}
          <div className="flex justify-center space-x-2 m-4">
            {imageUrls.map((url, index) => (
              <button key={index} onClick={() => handleImageChange(index)}>
                <Image
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={75}
                  className={`object-cover rounded-lg ${currentImageIndex === index ? 'border-2 border-blue-900' : ''}`}
                />
              </button>
            ))}
          </div>

          {/* Thông tin giá và tình trạng hàng */}
          <div className='ml-2'>
            <p className="text-gray-500 mt-4 text-lg">{price}</p>
            <p className={`mt-2 ${inStock === 'true' ? 'text-green-600' : 'text-red-600'}`}>
              {inStock === 'true' ? 'Còn hàng' : 'Hết hàng'}
            </p>
          </div>
        </div>

        {/* Khối yêu cầu báo giá */}
        <div className='min-w-[700px] max-h-max pt-5 rounded-3xl shadow-2xl bg-slate-100 max-w-max m-5'>
          <div className='m-10'>
            <p className='flex justify-center text-2xl font-semibold text-blue-900'>Nhận báo giá ngay hôm nay!</p>
            <div className='grid grid-cols-2 gap-4 mt-20'>
              <DatePicker/>
              <DropDownPicker />
            </div>

            <p className='font-semibold mt-10 text-blue-900'>Bạn lưu trữ container ở đâu?</p>
            <div className='flex ml-5 flex-col'>
              <div className='flex'>
                <div className='flex items-center mr-32'>
                  <input
                    type="radio"
                    id="option1"
                    name="portconOptions"
                    value="available"
                  />
                  <label htmlFor="option1" className='mx-2 text-blue-900'>Vị trí có sẵn của PORTCON</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type="radio"
                    id="option2"
                    name="portconOptions"
                    value="suggested"
                  />
                  <label htmlFor="option2" className='mx-2 text-blue-900'>Vị trí gợi ý</label>
                </div>
              </div>
            </div>
            <Button className='w-full mt-5 bg-blue-900'>Nhận báo giá</Button>
          </div>
        </div>
      </div>

      {/* Khối hiển thị thông tin sản phẩm (nếu có) */}
      <div className='flex justify-center w-full'>
        <div className='w-full max-w-5xl mx-auto'>
          <ProductDetails /> {/* Đã loại bỏ việc truyền params vì ProductDetails không yêu cầu */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
