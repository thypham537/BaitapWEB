import React from 'react';

function About() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Git', 'C++'];

  return (
    <section id="about" style={{ padding: '40px 20px' }}>
      <h2>About Me & Skills</h2>
      <p style={{ 
  fontSize: '16px', 
  lineHeight: '1.6', 
  maxWidth: '850px',      /* Tăng độ rộng để chứa đủ chữ trên dòng */
  textAlign: 'center',    /* Căn giữa nội dung chữ */
  margin: '0 auto 20px auto' /* Đưa cả khối ra chính giữa và tạo khoảng cách với phần dưới */
}}>
  Hiện tại mình đang là sinh viên ngành Kỹ thuật Phần mềm. Mình tập trung nghiên cứu sâu về các công nghệ Web Frontend và cấu trúc mã nguồn chuẩn component chỉn chu.
</p>
      <h3 style={{ marginTop: '20px' }}>Kỹ năng chuyên môn:</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
        {skills.map((skill, index) => (
          <span key={index} style={{ padding: '8px 15px', background: '#eaeaea', color: '#333', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;