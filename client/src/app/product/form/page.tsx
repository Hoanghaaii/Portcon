"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from 'emailjs-com'; // Import emailjs

const Form: React.FC = () => {
  const router = useRouter();
  const [date, setDate] = useState<string | null>(null);
  const [timerent, setTimerent] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [productId, setProductId] = useState<string | null>(null);

  // Trạng thái cho thông tin khách hàng
  const [customerName, setCustomerName] = useState<string>('');
  const [businessName, setBusinessName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    setDate(currentUrl.searchParams.get('date'));
    setTimerent(currentUrl.searchParams.get('timerent'));
    setLocation(currentUrl.searchParams.get('location'));
    setProductId(currentUrl.searchParams.get('id'));
  }, []); // Lắng nghe sự thay đổi của URL

  // Xử lý gửi form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra các trường không được bỏ trống
    if (!customerName || !businessName || !email || !phone || !address) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    // Thông tin để gửi qua EmailJS
    const templateParams = {
      customerName,
      businessName,
      email,
      phone,
      address,
      productId,
      date,
      timerent,
      location,
    };

    // Gửi email
    emailjs.send('service_un0kykl', 'template_pl8po24', templateParams, 'E3_CEEU85HkX2f1Z_')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Thông tin đã được gửi thành công!');
        // Điều hướng đến trang khác sau khi gửi
        router.push('/product/form/formdone');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Gửi email thất bại!');
      });
  };

  return (
    <div className=''> 
      <div className="w-full mx-auto p-4 bg-gradient-to-br from-blue-50 to-blue-900">
        <h2 className="text-3xl flex justify-center font-semibold mb-4 text-blue-900">Nhận báo giá</h2>
        <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md text-blue-900">
          <div>
            <div className='flex space-x-8 w-full'>
              {/* Thông tin sản phẩm */}
              <div className='flex-1 shadow-2xl rounded-2xl p-4 bg-slate-100'>
                <h3 className='font-bold text-2xl mb-4'>Thông tin sản phẩm</h3>
                <div className="mb-4">
                  <label className="block font-semibold mb-2">ID Sản phẩm:</label>
                  <input
                    type="text"
                    value={productId || ''}
                    readOnly
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold mb-2">Ngày:</label>
                  <input
                    type="text"
                    value={date || ''}
                    readOnly
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold mb-2">Thời gian thuê:</label>
                  <input
                    type="text"
                    value={timerent || ''}
                    readOnly
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold mb-2">Vị trí:</label>
                  <input
                    type="text"
                    value={location || ''}
                    readOnly
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Thông tin khách hàng */}
              <div className='flex-1 shadow-2xl rounded-2xl p-4 bg-slate-100'>
                <h3 className='font-bold text-2xl mb-4'>Thông tin khách hàng</h3>
                <div className='space-y-4'>
                  <div className="mb-4">
                    <label className="block font-semibold mb-2">Họ tên:</label>
                    <input
                      placeholder='Nhập họ tên khách hàng'
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className="mb-4">
                    <label className="block font-semibold mb-2">Doanh nghiệp:</label>
                    <input
                      placeholder='Nhập tên doanh nghiệp khách hàng'
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className="mb-4">
                    <label className="block font-semibold mb-2">Email:</label>
                    <input
                      placeholder='Nhập email khách hàng'
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className="mb-4">
                    <label className="block font-semibold mb-2">Số điện thoại:</label>
                    <input
                      placeholder='Nhập số điện thoại khách hàng'
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className="mb-4">
                    <label className="block font-semibold mb-2">Địa chỉ:</label>
                    <input
                      placeholder='Nhập địa chỉ khách hàng'
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                type="submit"
                className="w-96 flex justify-center bg-blue-900 rounded-full text-white py-2 hover:bg-blue-700 transition duration-300 mt-6"
              >
                Gửi
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
