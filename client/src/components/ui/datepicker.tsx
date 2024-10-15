// components/ui/DatePicker.tsx
import React from 'react';
import DatePickerComponent from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  selectedDate: Date | null; // Ngày được chọn
  onChange: (date: Date | null) => void; // Hàm xử lý thay đổi ngày
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  return (
    <DatePickerComponent
      selected={selectedDate}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      className="border border-gray-300 p-2 text-blue-900 rounded-full"
      placeholderText="Chọn ngày bắt đầu"
    />
  );
};

export default DatePicker;
