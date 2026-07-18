import React from 'react';

function Hero() {
  return (
    <section id="hero" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>Xin chào, mình là một Frontend Developer</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
        Đam mê xây dựng những giao diện web đẹp, mượt mà và tối ưu trải nghiệm người dùng.
      </p>
      <a href="#contact">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px' }}>
          Liên hệ ngay
        </button>
      </a>
    </section>
  );
}

export default Hero;