import React from 'react';

function ProjectCard({ project }) {
  // 1. Thêm một số style cho ảnh để nó không bị méo
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ảnh sẽ lấp đầy ô mà không bị méo, có thể bị cắt bớt
    borderRadius: '4px'
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '20px', 
      width: '300px', // Tăng một chút cho đẹp
      background: '#1e1e1e', // Màu nền thẻ cho chế độ tối
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      {/* 2. Ô chứa ảnh cũ */}
      <div style={{ 
        height: '180px', // Tăng chiều cao
        background: '#ddd', 
        borderRadius: '4px', 
        marginBottom: '15px', 
        overflow: 'hidden', // Để bo góc ảnh con
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: '#666' 
      }}>
        {/* 3. Thêm thẻ ảnh vào đây */}
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            style={imageStyle} 
          />
        ) : (
          // Nếu không có ảnh, hiện ô trống cũ
          <span>[ Hình ảnh dự án ]</span>
        )}
      </div>

      {/* Phần thông tin giữ nguyên */}
      <h3 style={{ margin: '0 0 10px 0', textAlign: 'center', color: '#fff' }}>{project.title}</h3>
      <p style={{ color: '#aaa', fontSize: '14px', height: '40px', overflow: 'hidden', textAlign: 'center' }}>{project.desc}</p>
      
      <div style={{ margin: '15px 0', fontSize: '12px', fontWeight: 'bold', color: '#3b82f6', textAlign: 'center' }}>
        Công nghệ: {project.tech}
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#3b82f6', fontWeight: 'bold', fontSize: '14px' }}>
          Xem trên GitHub →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;