import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import React from 'react';

// Định nghĩa kiểu cho các props
interface CardpageProps {
  src: string;         // Kiểu cho src là string
  name: string;        // Kiểu cho name là string
  description: string; // Kiểu cho description là string
}

const Cardpage: React.FC<CardpageProps> = ({ src, name, description }) => {
  return (
    <div className="m-10 flex flex-col items-center hover:scale-110 transition duration-200">
        <Avatar className="w-32 h-32 mb-5 shadow-blue-900 shadow-md bg-blue-900">
            <AvatarImage src={src} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="text-center text-2xl font-semibold text-blue-900">{name}</p>
        <p className="text-center font-normal text-blue-900">{description}</p>
    </div>
  );
}

export default Cardpage;
