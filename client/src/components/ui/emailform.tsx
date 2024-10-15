"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';

const EmailForm: React.FC = () => {
    const router = useRouter();
    
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [timerent, setTimerent] = useState('');
    const [location, setLocation] = useState('');
    const [productId, setProductId] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 

        const formData = {
            name,
            company,
            email,
            phone,
            address,
            date,
            timerent,
            location,
            productId,
        };

        // Gửi email
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                // Điều hướng đến trang khác sau khi gửi thành công
                router.push('/product/form/formdone');
            }, (err) => {
                console.error('Failed to send email. Error:', err);
            });

        console.log('Dữ liệu đã được gửi qua email:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Tên:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Công ty:</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Số điện thoại:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div>
                <label>Địa chỉ:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div>
                <label>Ngày:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Thời gian thuê:</label>
                <input type="text" value={timerent} onChange={(e) => setTimerent(e.target.value)} required />
            </div>
            <div>
                <label>Vị trí:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
            <div>
                <label>ID sản phẩm:</label>
                <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} required />
            </div>
            <button type="submit">Gửi Email</button>
        </form>
    );
};

export default EmailForm;
