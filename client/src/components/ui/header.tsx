import Link from 'next/link';
import React from 'react';
import { FaCaretDown } from "react-icons/fa";
import { Button } from "../ui/button";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center h-20'>
        <div className=' border-solid border-blue-900 border-4 rounded-full '>
          <Link href={'/'} className="text-4xl font-bold mx-5 text-blue-900 italic">PORTCON</Link>
        </div>
        <div className='flex items-center mr-10'>
            <FaPhoneAlt className="mr-2" size={18} />
            <p className="text-lg text-blue-900 font-semibold"><i className='font-semibold'>0382344458</i></p>
        </div>
      </div>
      <hr className='border-2 opacity-25 rounded-full'/>
      <div className=''>
        <div className="flex justify-between items-center">
          <ul className="flex items-center space-x-4">
            <li className="relative group px-12 py-4 hover:bg-blue-900 hover:text-white font-bold text-xl text-blue-900">
              <div 
                className="flex items-center w-full py-2 px-4 transition-colors duration-200"
              >
                SẢN PHẨM
                <FaCaretDown />
              </div>
              <ul className="absolute max-w-max min-w-72 left-0 hidden group-hover:block bg-white shadow-md mt-4 z-10">
                <li className="py-4 hover:bg-blue-900 flex justify-center">
                  <Link
                    className="p-4 hover:scale-105 text-blue-900 font-semibold text-lg hover:text-white transition-all duration-200 w-full text-center"
                    href={'/product/bachhoa'}
                  >
                    Container bách hoá
                  </Link>
                </li>
                <li className="py-4 hover:bg-blue-900 flex justify-center">
                  <Link
                    className="p-4 hover:scale-105 text-blue-900 font-semibold text-lg hover:text-white transition-all duration-200 w-full text-center"
                    href={'/product/chiangan'}
                  >
                    Container 40FT
                  </Link>
                </li>
              </ul>

            </li>
            <li className="relative group px-12 py-4 hover:bg-blue-900 hover:text-white font-bold text-xl text-blue-900">
              <div 
                className="flex items-center w-full py-2 px-4 transition-colors duration-200"
              >
                GIỚI THIỆU
                <FaCaretDown />
              </div>
              <ul className="absolute max-w-max min-w-72 left-0 hidden group-hover:block bg-white shadow-md mt-4 z-10">
                <li className="py-4 hover:bg-blue-900 flex justify-center">
                  <Link
                    className="p-4 hover:scale-105 text-blue-900 font-semibold text-lg hover:text-white transition-all duration-200 w-full text-center"
                    href={'/about/company'}
                  >
                    Công ty
                  </Link>
                </li>
                <li className="py-4 hover:bg-blue-900 flex justify-center">
                  <Link
                    className="p-4 hover:scale-105 text-blue-900 font-semibold text-lg hover:text-white transition-all duration-200 w-full text-center"
                    href={'/about/mission'}
                  >
                    Sứ mệnh
                  </Link>
                </li>
                <li className="py-4 hover:bg-blue-900 flex justify-center">
                  <Link
                    className="p-4 hover:scale-105 text-blue-900 font-semibold text-lg hover:text-white transition-all duration-200 w-full text-center"
                    href={'/about/vision'}
                  >
                    Tầm nhìn
                  </Link>
                </li>
              </ul>

            </li>
            <li className="relative group px-16 py-6 hover:bg-blue-900 hover:text-white font-bold text-xl text-blue-900">
              <Link href={'/new'}>TIN TỨC</Link>
            </li>
          </ul>
          <div className="ml-auto">
            <Button className='px-12 py-6 m-2 text-xl font-bold bg-blue-900'>Nhận báo giá</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
