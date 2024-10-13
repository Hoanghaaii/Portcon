"use client"; // Đảm bảo đây là component client
import { usePathname } from 'next/navigation'; // Sử dụng usePathname thay vì useRouter
import { Slash } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb';
import React from 'react';

export function MyBreadcrumb() {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại
  if (pathname === "/") {
    return null;
  }
  const paths = pathname.split('/').filter((path) => path); // Tách đường dẫn thành các phần

  return (
    <div className=' pl-10  bg-slate-200 border-solid border-slate-300 border-t-2'>
      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className=' text-blue-600 hover:text-blue-700 hover:scale-105'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        {paths.map((path, index) => {
          const href = '/' + paths.slice(0, index + 1).join('/'); // Tạo đường dẫn đầy đủ

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator>
                <Slash className='text-slate-300' />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {index === paths.length - 1 ? (
                  // Thêm màu nền cho trang hiện tại và hover
                  <BreadcrumbPage className=" text-black px-2 py-1 rounded capitalize">
                    {path}
                  </BreadcrumbPage>
                ) : (
                  // Các phần trước trang hiện tại
                  <BreadcrumbLink className="capitalize text-blue-600 hover:text-blue-700 hover:scale-105" href={href} >
                    {path}  
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
    </div>
  );
}
