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
                    <p className="hover:text-black font-normal">{selectedOption}</p>
                    <FaCaretDown className="ml-auto" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-56">
                    <DropdownMenuItem onClick={() => handleSelect("1 Tháng")}>1 Tháng</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect("3 Tháng")}>3 Tháng</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect("6 Tháng")}>6 Tháng</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect("12 Tháng")}>12 Tháng</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default DropDownPicker;
