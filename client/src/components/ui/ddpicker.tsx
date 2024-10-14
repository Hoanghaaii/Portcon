import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./dropdown-menu";
import { FaCaretDown } from "react-icons/fa";
import React, { useState } from 'react';

const DropDownPicker = () => {
    const [selectedOption, setSelectedOption] = useState("Chọn thời gian thuê");

    const handleSelect = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="rounded-3xl bg-white min-w-56 py-1.5 px-3 flex items-center">
                    <p className="hover:text-black font-normal text-blue-900">{selectedOption}</p>
                    <FaCaretDown className="ml-auto text-blue-900" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-56">
                    <DropdownMenuItem onClick={() => handleSelect("1 Tháng")} className=" text-blue-900">1 Tháng</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect("3 Tháng")} className=" text-blue-900">3 Tháng</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect("6 Tháng")} className=" text-blue-900">6 Tháng</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect("12 Tháng")} className=" text-blue-900">12 Tháng</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default DropDownPicker;
