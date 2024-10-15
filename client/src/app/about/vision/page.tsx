import React from 'react';
import Image from 'next/image';

const Company = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">TẦM NHÌN</h1>
        </section>

        {/* About Section */}
        <section className="mb-20 ">
          <p className=' text-blue-900 font-extrabold text-6xl  justify-center flex text-center'>&quot;Portcon - Đồng hành cùng bạn bảo vệ giá trị sản phẩm&quot;</p>
          <p className="text-blue-900 leading-relaxed my-5 font-semibold text-xl">
          Trở thành nhà cung cấp hàng đầu các giải pháp lưu trữ thông minh và linh hoạt, đáp ứng mọi nhu cầu của khách hàng, từ doanh nghiệp vừa và nhỏ đến các tập đoàn lớn. Chúng tôi cam kết mang đến những trải nghiệm dịch vụ vượt trội thông qua việc ứng dụng công nghệ tiên tiến và tối ưu hóa quy trình vận hành.

          </p>
          <div className=' w-full h-50'>
            <Image
              src="/pageImg.jpg"
              alt="Company Logo"
              width={10000}
              height={10000}
              >
            </Image>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Company;
