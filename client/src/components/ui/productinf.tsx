"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const ProductDetails = () => {
  // Khởi tạo state để theo dõi phần nào đang được hiển thị
  const [activeSection, setActiveSection] = useState<'devices' | 'features' | 'shipping'>('devices');

  // Dữ liệu cho các phần
  const sections = {
    devices: {
      title: 'Thiết bị',
      content: (
        <>
          <div className=' text-blue-900 text-opacity-75 space-y-4'>
          <Image quality={100} src={'/thietbi.jpeg'} alt='daukeo' width={1000} height={1000} className=' rounded-4xl my-5'>
            
            </Image>
            <p>Thiết bị bay hơi (còn gọi là thiết bị trao đổi nhiệt) - Hoạt động bằng cách hấp thụ nhiệt từ môi trường lạnh sau đó chuyển hóa thành hơi lạnh. Đây cũng chính là phần trao đổi nhiệt chính của các container lạnh.</p>
            <p>Thiết bị ngưng tụ (còn gọi là dàn ngưng tụ) - Có tác dụng hóa lỏng chất dung môi sau khi nén trong chu trình làm lạnh, làm mát bằng không khí lưu động. Chính vì thế nên thiết bị ngưng tụ cũng cần được vệ sinh thường xuyên, không để bụi bẩn bám dày và phát huy hiệu quả tối đa khi làm lạnh.</p>
            <p>Máy nén (hay nén môi chất lạnh): Bộ phận này có nhiệm vụ nén môi chất lạnh từ áp suất thấp lên áp suất cao hơn. Trên thị trường cũng có nhiều loại máy nén khác nhau, tùy vào từng hãng sử dụng (máy nén Piston, máy nén ro-to, máy nén trục vít, máy nén xoắn ốc, máy nén ly tâm).</p>
            <p>Van tiết lưu có tác dụng làm giảm áp suất, điều chỉnh môi chất lạnh vào thiết bị bay hơi.</p>
            <p>Hệ ngắt điện tự động sử dụng dòng điện 3 pha (380V).</p>
            <p>Hệ thống ngắt nhiệt tự động, làm lạnh bằng quạt gió.</p>
            <p>Trong trường hợp nguồn điện không ổn định, thông qua cảm biến, container lạnh sẽ tự động điều chỉnh để nhiệt độ và độ ẩm trong khoảng luôn ở một trạng thái ổn định.</p>
          </div>
        </>
      ),
    },
    features: {
      title: 'Tính năng',
      content: (
        <>
          <div className=' text-blue-900 text-opacity-75 space-x-8'>
          <Image src={'/tinhnang.jpg'} alt='daukeo' width={1000} height={1000} className=' rounded-3xl my-5'>
            
            </Image>
            <p className=' mb-4 font-semibold'>Các tính năng nổi bật của sản phẩm bao gồm:</p>
            <ul className=' space-y-4'>
                <li>- Thiết kế chống chịu thời tiết</li>
                <li>- Chống thấm nước và chống động vật hoang dã</li>
                <li>- Lối vào ở tầng trệt</li>
                <li>- Thông số kỹ thuật ISO</li>
                <li>- Sàn chịu tải</li>
                <li>- Có thể tuỳ chỉnh</li>
                <li>- Giao hàng dễ dàng</li>
            </ul>
          </div>
        </>
      ),
    },
    shipping: {
      title: 'Dịch vụ vận chuyển',
      content: (
        <>
          <Image src={'/dichvuvanchuyenn.jpg'} alt='daukeo' width={1000} height={1000} className=' rounded-3xl my-5'>
            
          </Image>
          <p className=' text-blue-900'>Chúng tôi sử dụng xe đầu kéo rơ mooc để vận chuyển container. là một loại xe tải có một hoặc nhiều rơ mooc gắn phía sau để vận chuyển hàng hóa. Xe đầu kéo thường có động cơ mạnh mẽ và có thể kéo được nhiều rơ mooc. Rơ mooc thường có kích thước lớn và có thể chứa được nhiều hàng hóa.
          </p>
        </>
      ),
    },
  } as const; // Đánh dấu sections là hằng số

  // Hàm để xử lý việc chọn phần
  const handleSectionClick = (section: keyof typeof sections) => {
    setActiveSection(section);
  };

  return (
    <div className="m-5 rounded-3xl shadow-2xl bg-slate-100 p-5">
      {/* Thanh điều hướng */}
      <div className="flex space-x-4 mb-4 justify-center">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section as keyof typeof sections)}
            className={`py-2 px-4 rounded-lg font-bold transition duration-300 ${activeSection === section ? 'bg-blue-900 text-white' : 'bg-slate-100 text-blue-900'}`}
          >
            {sections[section as keyof typeof sections].title}
          </button>
        ))}
      </div>

      {/* Nội dung hiển thị */}
      <div className="border-t-2 border-gray-300 pt-4">
        <h3 className="text-2xl font-bold text-blue-900">{sections[activeSection].title}</h3>
        
        {/* Hiển thị nội dung với chiều cao tối thiểu 700px */}
        <div className="mt-2 text-gray-700 min-h-[700px]">
          {sections[activeSection].content}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
