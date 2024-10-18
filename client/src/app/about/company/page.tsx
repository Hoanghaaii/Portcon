import React from 'react';
import Image from 'next/image';
import Timeline from '../../../components/ui/timeline';
import Cardpage from '../../../components/ui/cardpage';

const Company = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">VỀ CHÚNG TÔI</h1>
        </section>

        {/* About Section */}
        <section className="mb-20 ">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6"><u className=''>Giới Thiệu Công Ty</u></h2>
          <p className="text-blue-900 leading-relaxed my-5 font-semibold text-md">
          Công ty cổ phần Portcon tự hào là  đơn vị tiên phong trong lĩnh vực cung cấp dịch vụ cho thuê container di động thông minh, chuyên dụng cho ngành thực phẩm tại Việt Nam. Với hệ thống container được trang bị công nghệ hiện đại, được tích hợp nhiều tính năng hiện đại như hệ thống giám sát an ninh 24/7, kiểm soát nhiệt độ và độ ẩm tự động, đảm bảo hàng hóa của bạn luôn được bảo quản trong điều kiện tốt nhất. Chúng tôi cam kết bảo quản hàng hóa của Quý khách luôn tươi ngon, đảm bảo chất lượng và an toàn vệ sinh thực phẩm.
          </p>
          <div className=' w-full h-50'>
            <Image
              src="/gioithieucty.jpg"
              alt="Company Logo"
              width={10000}
              height={10000}
              >
            </Image>
          </div>
        </section>
        <section className=" mb-48 ">
          <div className="flex flex-col items-center">
            <p className="text-center text-md font-semibold text-blue-900">Phù hợp với (Bấm vào các mục để xem chi tiết)</p>
            <Timeline />
          </div>
        </section>
        <section className=" ">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6"><u className=''>Hỗ trợ khách hàng</u></h2>
          <p className=" leading-relaxed my-5 text-blue-900 font-semibold">
              Chúng tôi có một đội ngũ nhân viên giàu kinh nghiệm và đam mê, luôn nỗ lực để đáp ứng mọi nhu cầu của
            khách hàng với thái độ làm việc chỉn chu, chuyên nghiệp.
          </p>
          <div className='flex justify-center'>
          <Cardpage src='/huongdanmuahang.png' name='Hướng dẫn mua hàng' description=''/>
          <Cardpage src='/chinhsachbaohanh.jpg' name='Chính sách bảo hành' description=''/>
          <Cardpage src='/dichvuvanchuyen.jpeg' name='Chính sách vận chuyển' description=''/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Company;
