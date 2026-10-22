import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeatureCard from './components/FeatureCard.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
// 프로젝트 카드 목록을 데이터 배열로 분리해 추가·수정이 쉽도록 합니다.
const projectsData = [
  { id:'arduino-shop', size:'wide', image:{ src:'images/projects/arduino-shop.jpg', width:1919, height:935, alt:'아두몰 메인 화면: 검색창, 카테고리 메뉴, 아두이노 회로 사진 배너, 개발보드·센서·모터 카테고리 카드' }, tag:'쇼핑몰', title:'아두이노 부품 쇼핑몰', text:'Next.js 16 (App Router) + Supabase + 토스페이먼츠(테스트 모드)로 만든 아두이노 부품 쇼핑몰.', stack:'Next.js 16 (App Router) · Supabase · 토스페이먼츠', links:[{ label:'Live Demo', href:'https://arduino-shop-roan.vercel.app/' }, { label:'GitHub Repo', href:'https://github.com/pakuyama/arduino-shop-test' }] },
  { id:'ohaeng-saju', size:'tall', image:{ src:'images/projects/ohaeng-saju.png', width:1812, height:941, alt:"오행 사주 입력 화면: 이름, 성별, 양력·음력 생년월일, 태어난 시간과 장소를 고르고 '내 오행 보기' 버튼을 누르는 폼" }, tag:'사주 · 재미', title:'오행사주', text:'재미로 보는 오행사주.', stack:'Firecrawl · AI 활용', links:[{ label:'Live Demo', href:'https://pakuyama.github.io/ohaeng-saju/' }, { label:'GitHub Repo', href:'https://github.com/pakuyama/ohaeng-saju' }] },
  { id:'draw-guess', size:'wide', image:{ src:'images/projects/draw-guess.png', width:1435, height:909, alt:'그려봐! 시작 화면: 닉네임을 입력하고 방을 만들거나 6자리 방 코드로 참가하는 카드' }, tag:'캐치마인드 · 퀴즈 · 멀티', title:'그려봐! (Draw & Guess)', text:'친구와 함께 그리고 맞히는 그림 퀴즈 게임(캐치마인드).', stack:'Python · HTML5 Canvas · AI 활용', links:[{ label:'Live Demo', href:'https://draw-guess-6jsk.onrender.com/' }, { label:'GitHub Repo', href:'https://github.com/pakuyama/draw-guess' }] }
];
const strengths = [
  { id:'web', title:'실용적인 웹 구현', text:'사용자 중심의 직관적인 인터페이스와 반응형 웹 구현' },
  { id:'auto', title:'효율성을 높이는 자동화', text:'반복 작업을 자동화하여 생산성을 높이는 도구 제작' },
  { id:'ship', title:'끝까지 완성하는 책임감', text:'기획에서 멈추지 않고 배포와 피드백까지 완결 — Ship fast, iterate often' }
];
const skills = [
  { id:'fe', title:'Frontend', text:'JavaScript (ES6+), React, HTML5 / CSS3, Tailwind CSS' },
  { id:'be', title:'Backend & Scripting', text:'Node.js, Python — 자동화 · 스크래핑 · 데이터 처리' },
  { id:'tools', title:'Tools & DevOps', text:'Git / GitHub, Vite, Vercel / GitHub Pages, VS Code, Figma' }
];
export default function App() {
  // Fragment(<></>)는 불필요한 상자 없이 형제 요소를 묶습니다.
  return <><Header /><main id="home">
    <Hero title="필요한 것을 빠르게 만들고," accent="계속 고칩니다." />
    <section id="about" className="container"><div className="section-head"><p className="eyebrow">About</p><h2>코드보다 먼저,<br />문제를 봅니다.</h2></div>
      <div className="about"><div className="shell"><div className="core"><p className="big">단순히 코드를 작성하는 것을 넘어, 제품이 해결해야 할 본질적인 문제에 집중합니다. 사용자 경험을 해치지 않는 깔끔한 UI와 데이터 흐름의 안정성을 함께 고민하며, 아이디어를 가장 빠르고 견고하게 세상에 내놓는 과정을 즐깁니다.</p></div></div>
        <div className="strengths">{strengths.map((item, index) => <article key={item.id} className="shell"><div className="core"><span className="num">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>
    <section id="projects" className="container"><div className="section-head"><p className="eyebrow">Featured Projects</p><h2>직접 만들고<br />배포한 것들</h2></div><div className="cards">{projectsData.map(({ id, ...project }) => <FeatureCard key={id} {...project} />)}</div></section>
    <section id="skills" className="container"><div className="split"><div><p className="eyebrow">Tech Stack</p><h2>익숙한 도구로,<br />단순하게.</h2></div><div className="skill-list">{skills.map(item => <div key={item.id} className="shell"><div className="core"><b>{item.title}</b><span>{item.text}</span></div></div>)}</div></div></section>
    <section id="faq" className="container"><div className="split"><div><p className="eyebrow">FAQ</p><h2>자주 묻는 것들</h2></div><div><FAQ id="faq-resume" question="이력서는 어디서 받을 수 있나요?" answer="상단 메뉴와 첫 화면의 이력서 PDF 버튼을 누르면 새 탭에서 열립니다." /><FAQ id="faq-contact" question="어떤 연락을 받나요?" answer="새로운 프로젝트, 협업 제안, 커피챗 등 언제든 편하게 연락해 주세요." /></div></div></section>
    <Contact /></main><footer><div className="container footer-row"><span>© 2026 Yunha Kim. Designed &amp; Built with focus on simplicity. · <a href="./index.html">HTML판 비교</a></span><nav aria-label="외부 링크"><a href="https://github.com/kimyunha">GitHub</a><a href="https://linkedin.com/in/kimyunha">LinkedIn</a></nav></div></footer></>;
}
