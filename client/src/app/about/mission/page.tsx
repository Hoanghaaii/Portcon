import React from 'react';
import Image from 'next/image';

const Company = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">SỨ MỆNH</h1>
        </section>

        {/* About Section */}
        <section className="mb-20 ">
          <p className="text-blue-900 leading-relaxed my-5 font-semibold text-xl">
           Portcon cam kết mang đến giải pháp bảo quản thực phẩm tối ưu, đảm bảo chất lượng và an toàn vệ sinh thực phẩm, góp phần nâng cao giá trị sản phẩm và dịch vụ của khách hàng.

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
        <section className="mb-20 ">
          <p className="text-blue-900 leading-relaxed my-5 font-semibold text-xl">
            Chúng tôi hướng tới một tương lai bền vững, nơi mà thực phẩm luôn được bảo quản tốt nhất, giảm thiểu lãng phí và bảo vệ môi trường. Portcon cam kết đóng góp tích cực vào sự phát triển của ngành công nghiệp thực phẩm Việt Nam.
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
