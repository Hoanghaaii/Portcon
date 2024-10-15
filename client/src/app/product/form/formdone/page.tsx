import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-slate-300 p-8 rounded-3xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Cảm ơn vì đã quan tâm tới dịch vụ của chúng tôi!</h1>
        <p className="text-xl font-semibold text-blue-900 mb-6">
          Đã nhận được yêu cầu tư vấn sản phẩm của bạn. 
        </p>
        <p className="text-lg font-medium text-blue-900 mb-6">
          Chúng tôi sẽ liên lạc với bạn sớm nhất có thể!
        </p>

        <a href="/" className="text-white font-semibold bg-blue-900 p-3 rounded-full hover:no-underline hover:bg-white hover:text-blue-900">
          Quay về trang chủ
        </a>
      </div>
    </div>
  );
}

export default ThankYouPage;
