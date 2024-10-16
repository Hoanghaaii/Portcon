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
          src="/trangchu.png"
          width={100}
          height={100}
          className="w-full"
        />
        <div className="absolute inset-0 flex mt-52 justify-center text-white text-lg text-center">
          <div>
            <p className="text-6xl font-bold whitespace-nowrap m-3">Chúng Tôi Ở Khắp Mọi Nơi</p>
            <div className="mt-16">
              <Button className="text-white p-7 m-4 bg-blue-900 font-bold">Tìm hiểu thêm</Button>
              <Button className="text-white p-7 m-4 bg-blue-900 font-bold">Nhận báo giá</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <hr className="border-t-8 border-blue-900 my-4 w-3/4 rounded-full" />
      </div>
      <div>
        <div className="flex justify-center mb-5">
          <p className=" text-4xl font-semibold text-blue-900">Tại sao nên chọn chúng tôi?</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="grid gap-4">
            {/* Div chứa 3 thẻ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <Cardpage src="/scaleImg.png" name="Khả năng mở rộng" description="Cho phép các doanh nghiệp mở rộng không gian lưu trữ khi cần thiết" />
              <Cardpage src="/flexImg.png" name="Linh động" description="Có thể di chuyển linh động theo nhu cầu của khách hàng" />
              <Cardpage src="/qualityImg.png" name="Thiết bị chất lượng cao" description="Các thiết bị lắp đặt trong container đều đạt tiêu chuẩn và chất lượng cao nhất" />
            </div>

            {/* Div chứa 2 thẻ */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <Cardpage src="/economyImg.png" name="Tối ưu hóa chi phí" description="Giúp các doanh nghiệp tiết kiệm chi phí hơn khi đầu tư vào kho truyền thống" />
              <Cardpage src="/haccp.png" name="Tuân thủ các tiêu chuẩn HACCP và ISO" description="Giúp hàng hóa luôn đảm bảo chất lượng và đạt ở điều kiện tốt nhất" />
            </div>
          </div>


        </div>
      </div>
      <div className="flex justify-center my-20">
        <hr className="border-t-8 border-blue-900 my-4 w-3/4 rounded-full" />
      </div>
      <div>
        <div className="flex justify-center items-center flex-col mb-5">
          <p className=" text-4xl font-semibold text-blue-900">Thông tin liên hệ</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
          <Infor 
              src="/avagirl.webp" 
              fallbackText="An" 
              name="Khúc Minh An" 
              description="0123456789" 
              role="Admin"
            />
            <Infor 
              src="/avaboy.png" 
              fallbackText="phong" 
              name="Nguyễn Hoàng Phong" 
              description="0866159001" 
              role="Admin"
            />
            <Infor 
              src="/avagirl3.jpg" 
              fallbackText="anh" 
              name="Trần Thị Ngọc Anh " 
              description="0339882124" 
              role="Admin"
            />
            <Infor 
              src="/avagirl5.jpg" 
              fallbackText="duong" 
              name="Đỗ Thị Thùy Dương" 
              description="0399377669" 
              role="Admin"
            />
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
