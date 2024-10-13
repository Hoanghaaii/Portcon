import Link from 'next/link';
import React from 'react';
import { FaCaretDown } from "react-icons/fa";
import { Button } from "../ui/button";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center h-20'>
        <div className=' border-solid border-blue-600 border-4 rounded-full '>
          <Link href={'/'} className="text-4xl font-bold mx-5 text-blue-600 italic">PORTCON</Link>
        </div>
        <div className='flex items-center mr-10'>
            <FaPhoneAlt className="mr-2" size={18} />
            <p className="text-lg text-blue-700"><i>0123456789</i></p>
        </div>
      </div>
      <div className='bg-slate-200'>
        <div className="flex justify-between items-center">
          <ul className="flex items-center space-x-4">
            <li className="relative group px-12 py-4 hover:bg-slate-300">
              <div 
                className="flex items-center w-full py-2 px-4 hover:bg-slate-300 transition-colors duration-200"
              >
                <span className="mr-2">Sản phẩm</span>
                <FaCaretDown />
              </div>
              <ul className="absolute max-w-max min-w-60 left-0 hidden group-hover:block bg-white shadow-md mt-4 z-10">
                <li className="py-4 hover:bg-gray-200 flex justify-center">
                  <Link className='p-4' href={'/product/con20ft'}>Container lạnh 20FT</Link>
                </li>
                <li className="py-4 hover:bg-gray-200 flex justify-center">
                  <Link className='p-4' href={'/product/con40ft'}>Container lạnh 40FT</Link>
                </li>
              </ul>
            </li>
            <li className='relative group px-12 py-4 hover:bg-slate-300'>
              <div 
                className="flex items-center w-full py-2 px-4 hover:bg-slate-300 transition-colors duration-200"
              >
                <span className="mr-2">Giới thiệu</span>
                <FaCaretDown />
              </div>
              <ul className="absolute max-w-max min-w-60 left-0 hidden group-hover:block bg-white shadow-md mt-4 z-10">
                <li className="py-4 hover:bg-gray-200 flex justify-center">
                  <Link className='p-4' href={'/about/company'}>Công ty</Link>
                </li>
                <li className="py-4 hover:bg-gray-200 flex justify-center">
                  <Link className='p-4' href={'/about/mission'}>Sứ mệnh</Link>
                </li>
                <li className="py-4 hover:bg-gray-200 flex justify-center">
                  <Link className='p-4' href={'/about/vision'}>Tầm nhìn</Link>
                </li>
              </ul>
            </li>
            <li className='relative group px-12 py-6 hover:bg-slate-300'>
              <Link className='py-2' href={'/new'}>Tin tức</Link>
            </li>
          </ul>
          <div className="ml-auto">
            <Button className='px-12 py-6 m-2'>Nhận báo giá</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
