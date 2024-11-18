import Image from "next/image";
import { useState } from "react";

const ImageGrid: React.FC = () => {
  // State để theo dõi ảnh được chọn
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Danh sách ảnh
  const images: string[] = [
    "/go1.png",
    "/go2.png",
    "/go3.png",
    "/go4.png",
    "/go5.png",
    "/go6.png",
  ];

  // Xử lý khi bấm vào ảnh
  const handleImageClick = (index: number) => {
    // Nếu là ảnh 1 hoặc 3 (index 0 hoặc 2), không thực hiện gì
    if (index === 0 || index === 2) {
      alert("Ngăn này đã được đặt!");
      return;
    }
    setSelectedImage(index);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((src, index: number) => (
        <div
          key={index}
          onClick={() => handleImageClick(index)}
          className={`relative cursor-pointer transition-all duration-300 ${
            selectedImage === index
              ? "ring-4 ring-blue-500 brightness-110"
              : "opacity-80"
          }`}
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-40 object-cover"
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
