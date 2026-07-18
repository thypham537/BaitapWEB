import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Chặn hành vi tải lại trang mặc định
    setError('');
    setSuccess('');

    // Kiểm tra tính hợp lệ cơ bản (Validation)
    if (!formData.name || !formData.email || !formData.message) {
      setError('Vui lòng điền đầy đủ tất cả các trường dữ liệu!');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Email không đúng định dạng!');
      return;
    }

    // Nếu hợp lệ
    setSuccess('Gửi tin nhắn thành công! Cảm ơn bạn.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section id="contact" style={{ 
      padding: '60px 20px', 
      backgroundColor: '#252525', // Màu nền riêng tách biệt cho phần Liên hệ
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      borderRadius: '10px',      // Bo góc cho đẹp
      margin: '20px'             // Tạo khoảng cách với các phần khác
    }}>
      <h2 style={{ marginBottom: '20px' }}>Liên hệ</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
        <input 
          type="text" 
          name="name" 
          placeholder="Họ tên" 
          value={formData.name} 
          onChange={handleChange} 
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <input 
          type="text" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <textarea 
          name="message" 
          placeholder="Lời nhắn của bạn..." 
          value={formData.message} 
          onChange={handleChange}
          style={{ padding: '10px', fontSize: '16px', height: '100px' }}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Gửi
        </button>
      </form>

      {/* Đã dọn dẹp các dấu ngoặc nhọn dư thừa ở đây */}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginTop: '10px' }}>{success}</p>}
    </section>
  );
}

export default Contact;