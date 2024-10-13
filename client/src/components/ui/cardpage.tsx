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
    <div className="m-10 flex flex-col items-center">
        <Avatar className="w-32 h-32 mb-5 shadow-blue-600 shadow-md">
            <AvatarImage src={src} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="text-center text-2xl font-semibold text-slate-900">{name}</p>
        <p className="text-center font-normal text-slate-500">{description}</p>
    </div>
  );
}

export default Cardpage;
