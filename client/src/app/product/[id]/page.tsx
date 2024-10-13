"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import{ DatePicker} from "../../../components/ui/datepicker"
import DropDownPicker from '../../../components/ui/ddpicker';
import { Button } from '../../../components/ui/button';
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

  if (!id || !name || !price || imageUrls.length === 0 || inStock === null) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex w-full mb-4">
      <div className=" px-32 pt-5 pb-32 rounded-3xl shadow-2xl bg-slate-100 max-w-max m-5"> {/* Đặt flex-direction thành column */}
        <h2 className="text-xl font-semibold mb-4">{name}</h2>
        {/* Hiển thị tất cả các hình ảnh */}
        <div className='m-6 max-w-[400px]'>
          <Carousel>
            <CarouselContent>
              {imageUrls.map((url, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={url}
                    alt={`Hình ảnh sản phẩm ${index + 1}`}
                    width={450} // Giảm chiều rộng
                    height={300} // Giảm chiều cao
                    className="object-cover rounded-3xl transition-transform duration-300"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-blue-600" />
            <CarouselNext className="text-blue-600" />
          </Carousel>
        </div>

        <p className="text-gray-500 mt-4 text-lg">{price}</p>
        <p className={`mt-2 ${inStock === 'true' ? 'text-green-600' : 'text-red-600'}`}>
          {inStock === 'true' ? 'Còn hàng' : 'Hết hàng'}
        </p>
      </div>
      <div className=' min-w-[700px] pt-5 rounded-3xl shadow-2xl bg-slate-100 max-w-max m-5'>
        <div className=' m-10'>
          <p className='flex justify-center text-2xl font-semibold'>Nhận báo giá ngay hôm nay!</p>
          <div className='grid grid-cols-2 gap-4 mt-20'> {/* Sử dụng grid với 2 cột và khoảng cách giữa chúng */}
              <DatePicker />
              <DropDownPicker />
          </div>

          <p className=' font-semibold mt-20'>Bạn lưu trữ container ở đâu?</p>
          <div className='flex ml-5 flex-col'>
            <div className='flex'>
              <div className='flex items-center mr-32'>
                <input
                  type="radio"
                  id="option1"
                  name="portconOptions" // Tên giống nhau để nhóm radio buttons
                  value="available"
                />
                <label htmlFor="option1" className='mx-2'>Vị trí có sẵn của PORTCON</label>
              </div>
              <div className='flex items-center'>
                <input
                  type="radio"
                  id="option2"
                  name="portconOptions" // Tên giống nhau để nhóm radio buttons
                  value="suggested"
                />
                <label htmlFor="option2" className='mx-2'>Vị trí gợi ý</label>
              </div>
            </div>
          </div>
          <Button className='w-full mt-5 '>Nhận báo giá</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
