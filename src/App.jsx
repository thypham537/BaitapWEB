import React, { useState, useEffect } from 'react'; // Nhớ import thêm useEffect
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  // 1. Khởi tạo state bằng cách check localStorage xem trước đó người dùng chọn gì chưa
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; // Nếu là 'dark' thì trả về true, ngược lại false
  });

  // 2. Sử dụng useEffect để tự động lưu giá trị mới vào localStorage mỗi khi darkMode thay đổi
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'} style={{ minHeight: '100vh', transition: 'all 0.3s ease' }}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main style={{ padding: '0 20px' }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;