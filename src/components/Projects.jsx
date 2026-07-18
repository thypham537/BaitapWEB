import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

// 1. Import ảnh từ thư mục assets vào
import imgProject1 from '../assets/anh1.jpg'; // Thay 'duan1.png' bằng tên file thật của bạn
import imgProject2 from '../assets/gbfb.png'; // Thay 'duan2.jpg'
import imgProject3 from '../assets/anh3.jpg'; // Thay 'duan3.webp'

// 2. Thêm trường 'image' vào danh sách dữ liệu mock
const mockProjects = [
  { 
    id: 1, 
    title: 'Dự án 1', 
    desc: 'Web bán hàng', 
    tech: 'ReactJS', 
    link: 'https://github.com',
    image: imgProject1 // <--- Đường dẫn ảnh đã import
  },
  { 
    id: 2, 
    title: 'Dự án 2', 
    desc: 'App học tiếng Nhật', 
    tech: 'JavaScript', 
    link: 'https://github.com',
    image: imgProject2
  },
  { 
    id: 3, 
    title: 'Dự án 3', 
    desc: 'Game Caro', 
    tech: 'HTML/CSS', 
    link: 'https://github.com',
    image: imgProject3
  },
];

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = mockProjects.filter(project =>
    project.tech.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="projects" style={{ padding: '40px 20px' }}>
      <h2>Danh sách dự án</h2>
      <div style={{ marginBottom: '25px' }}>
        <input
          type="text"
          placeholder="🔍 Tìm theo công nghệ (ví dụ: ReactJS)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', width: '320px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px', color: '#fff', background: '#333' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map(proj => (
            <ProjectCard key={proj.id} project={proj} />
          ))
        ) : (
          <p style={{ color: '#888' }}>Không tìm thấy dự án sử dụng công nghệ này.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;