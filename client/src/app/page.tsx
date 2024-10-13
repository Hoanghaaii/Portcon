import { Button } from "@/components/ui/button";
import Image from "next/image";
import Cardpage from '../components/ui/cardpage'
import Infor from "../components/ui/infor";

export default function Home() {
  return (
    <div className="relative w-full">
      <div>
        <Image
          quality={100}
          layout="responsive"
          alt="pageImg"
          src="/pageImg.jpg"
          width={100}
          height={100}
          className="w-full"
        />
        <div className="absolute inset-0 flex mt-52 justify-center text-white text-lg text-center">
          <div>
            <p className="text-6xl font-extrabold whitespace-nowrap m-3">Chúng Tôi Ở Khắp Mọi Nơi</p>
            <p className="whitespace-nowrap">Công ty phân phối Container top 1 Hà Nội từ những năm 2003</p>
            <div className="mt-16">
              <Button className="text-white p-7 m-4">Tìm hiểu thêm</Button>
              <Button className="text-white p-7 m-4">Nhận báo giá</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <hr className="border-t-8 border-blue-600 my-4 w-3/4 rounded-full" />
      </div>
      <div>
        <div className="flex justify-center mb-5">
          <p className=" text-4xl font-semibold">Tại sao nên chọn chúng tôi?</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Cardpage src="link1" name="Khả năng mở rộng" description="Cho phép các doanh nghiệp mở rộng không gian lưu trữ khi cần thiết" />
              <Cardpage src="link2" name="Linh động" description="Có thể di chuyển linh động theo nhu cầu của khách hàng" />
              <Cardpage src="link3" name="Thiết bị chất lượng cao" description="Các thiết bị lắp đặt trong container đều đạt tiêu chuẩn và chất lượng cao nhất" />
              <Cardpage src="link4" name="Tối ưu hóa chi phí" description="Giúp các doanh nghiệp tiết kiệm chi phí hơn khi đầu tư vào kho truyền thống" />
              <Cardpage src="link5" name="Tuân thủ các tiêu chuẩn HACCP và ISO" description="giúp hàng hóa luôn đảm bảo chất lượng và đạt ở điều kiện tốt nhất" />
              <Cardpage src="link6" name="Chủ shop KMA xinh gái" description="...." />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <hr className="border-t-8 border-blue-600 my-4 w-3/4 rounded-full" />
      </div>
      <div>
        <div className="flex justify-center items-center flex-col mb-5">
          <p className=" text-4xl font-semibold">Thông tin liên hệ</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
            <Infor 
              src="/image1.jpg" 
              fallbackText="An" 
              name="Khúc Minh An" 
              description="0123456789" 
              role="Admin"
            />
            <Infor 
              src="/image1.jpg" 
              fallbackText="An" 
              name="Khúc Minh An" 
              description="0123456789" 
              role="Admin"
            />
            <Infor 
              src="/image1.jpg" 
              fallbackText="An" 
              name="Khúc Minh An" 
              description="0123456789" 
              role="Admin"
            />
            <Infor 
              src="/image1.jpg" 
              fallbackText="An" 
              name="Khúc Minh An" 
              description="0123456789" 
              role="Admin"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}
