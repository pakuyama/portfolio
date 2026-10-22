import React, { useState } from 'react';
export default function Header() {
  const [open, setOpen] = useState(false); // 처음에는 메뉴가 닫혀 있습니다.
  return <header className="site-header"><div className="header-row">
    <a className="brand" href="#home">Yunha Kim</a>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="react-nav" onClick={() => setOpen(!open)}>메뉴</button>
    <nav id="react-nav" className={open ? 'is-open' : ''} aria-label="주요 메뉴">
      <a href="#about" onClick={() => setOpen(false)}>About</a><a href="#projects" onClick={() => setOpen(false)}>Projects</a><a href="#skills" onClick={() => setOpen(false)}>Skills</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      <a className="button small" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener">이력서 PDF <i aria-hidden="true">↓</i></a>
    </nav></div></header>;
}
