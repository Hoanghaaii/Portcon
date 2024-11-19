"use client";
import React, { useState } from "react";
import Image from "next/image";
import DropDownPicker from "../../../components/ui/ddpicker";
import { Button } from "../../../components/ui/button";
import ProductDetails from "../../../components/ui/productinf";
import { useRouter } from "next/navigation";
import DatePicker from "@/components/ui/datepicker";
import ProductChiaNgan from "@/components/contchiangan";
import ImageGrid from "@/components/ui/chianganpicker";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const router = useRouter();
  const products: {
    [key: string]: { name: string; inStock: string; imageUrls: string[] };
  } = {
    "1": {
      name: "Container PORTCON 20FT",
      inStock: "true",
      imageUrls: ["/containerbachhoa1.png", "/anhbentrongcont.webp", "/anhbentrongcont2.webp"],
    },
    "2": {
      name: "Container khô PORTCON 20FT",
      inStock: "true",
      imageUrls: ["/kho1.jpg", "/anhbentrongcont.webp", "/anhbentrongcont2.webp"],
    },
    "3": {
      name: "Container khô PORTCON 40FT",
      inStock: "true",
      imageUrls: ["/contbachhoa2.png", "/anhbentrongcont.webp", "/anhbentrongcont2.webp"],
    },
    "7": {
      name: "Container PORTCON 40FT",
      inStock: "true",
      imageUrls: ["/chiangan1.png", "/contchiangann.jpg"],
    },
    "8": {
      name: "Container khô PORTCON 40FT",
      inStock: "true",
      imageUrls: ["/chiangan2.png", "/contchiangann.jpg"],
    },
  };

  const product = products[params.id];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dropdownValue, setDropdownValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // State to manage selected date
  const [errorMessage, setErrorMessage] = useState<string>(""); // State to manage error message
  const [isShown, setIsShown] = useState<boolean>(false)
  const handleToggle = () => {
    setIsShown((prev) => !prev); // Chuyển đổi giá trị của isShown
  };
  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleDropdownChange = (value: string) => {
    setDropdownValue(value);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date); // Update selected date
  };

  const handleSubmit = () => {
    // Reset error message
    setErrorMessage("");

    // Check if all fields are filled
    if (!dropdownValue || !selectedOption || !selectedDate) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    const queryParams = new URLSearchParams({
      timerent: dropdownValue,
      location: selectedOption,
      date: selectedDate ? selectedDate.toISOString() : "", // Format date if selected
      id: params.id, // Thêm ID sản phẩm vào query params
    });

    router.push(`/product/form?${queryParams.toString()}`);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="flex w-full mb-4 p-8">
        <div className="rounded-3xl shadow-2xl bg-slate-100 max-w-max m-5 pb-5">
          <h2 className="text-xl font-semibold m-4 mb-20 text-blue-900">
            {product.name}
          </h2>
          <div className="m-6 w-[600px] h-[400px] rounded-3xl mb-10 flex justify-center items-center">
            <Image
              src={product.imageUrls[currentImageIndex]}
              alt={`Hình ảnh sản phẩm ${currentImageIndex + 1}`}
              width={600}
              height={400}
              className="rounded-3xl transition hover:scale-105 duration-1000 mb-12"
            />
          </div>
          <div className="flex justify-center space-x-2 m-4">
            {product.imageUrls.map((url, index) => (
              <button key={index} onClick={() => handleImageChange(index)}>
                <Image
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={75}
                  className={`object-cover rounded-lg ${
                    currentImageIndex === index ? "border-2 border-blue-900" : ""
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="ml-2">
            <p
              className={`mt-2 ${
                product.inStock === "true"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {product.inStock === "true" ? "Còn hàng" : "Hết hàng"}
            </p>
          </div>
        </div>

        <div className="min-w-[700px] max-h-max pt-5 rounded-3xl shadow-2xl bg-slate-100 max-w-max m-5">
          <div className="m-10">
            <p className="flex justify-center text-2xl font-semibold text-blue-900">
              Nhận báo giá ngay hôm nay!
            </p>
            <div className="grid grid-cols-2 gap-4 mt-20">
              <div>
                <DatePicker
                  selectedDate={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              <div>
                <DropDownPicker onChange={handleDropdownChange} />
              </div>
            </div>
            <p className="font-semibold mt-10 text-blue-900">
              Bạn lưu trữ container ở đâu?
            </p>
            <div className="flex ml-5 flex-col">
              <div className="flex space-x-5">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="option1"
                    name="portconOptions"
                    value="Vị trí có sẵn của PORTCON"
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="option1"
                    className="mx-2 text-blue-900"
                  >
                    Vị trí có sẵn của PORTCON
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="option2"
                    name="portconOptions"
                    value="Vị trí gợi ý"
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="option2"
                    className="mx-2 text-blue-900"
                  >
                    Vị trí gợi ý
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="option3"
                    name="portconOptions"
                    value="Đã có vị trí đặt kho"
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="option3"
                    className="mx-2 text-blue-900"
                  >
                    Đã có vị trí đặt kho
                  </label>
                </div>
              </div>
              <hr className="m-2" />
              {/* Kiểm tra isShown và hiển thị nội dung tương ứng */}
              {["7", "8"].includes(params.id) && (
        <div>
          {isShown ? (
            // Nếu isShown là true, hiển thị ImageGrid
            <ImageGrid />
          ) : (
            // Nếu isShown là false, hiển thị một hình ảnh
            <div className="flex justify-center mt-4">
              <Image
                src="/map.png"
                alt="default image"
                width={600}
                height={400}
                className="rounded-lg"
                onClick={handleToggle} // Khi nhấn vào ảnh, chuyển trạng thái toggle
              />
            </div>
          )}
        </div>
      )}
            </div>
            {errorMessage && (
              <p className="text-red-600">{errorMessage}</p>
            )}{" "}
            {/* Display error message */}
            <Button className="w-full mt-5 bg-blue-900" onClick={handleSubmit}>
              Đặt
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center rounded-3xl p-5 bg-slate-100 mx-5 shadow-lg">
        <div className="max-w-5xl flex justify-center space-x-5">
          <Image
            src={
              params.id === "1"
                ? "/thongso20.png"
                : params.id === "2"
                ? "/thongsocontkho20ft.png"
                : params.id === "3"
                ? "/thongsocontkho20ft.png"
                : params.id === "7"
                ? "/thongso40.png"
                : "/thongsocontkho40ft.png"
            }
            alt="thongso"
            width={700}
            height={700}
            className="object-contain"
          />
          <Image
            src={
              params.id === "1"
                ? "/banve.png"
                : "/banvekythuat.jpg"
            }
            alt="banve"
            width={700}
            height={700}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center w-[85%] m-auto bg-slate-100 shadow-xl mt-5 p-4 rounded-lg">
        {params.id === "1" ? <ProductDetails /> : <ProductChiaNgan />}
      </div>
    </div>
  );
};

export default ProductDetail;
