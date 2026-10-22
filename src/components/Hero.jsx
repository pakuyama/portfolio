import React from 'react';
// 부모가 title과 accent를 전달합니다. 중괄호 안의 이름은 변수 값으로 바뀝니다.
export default function Hero({ title, accent }) {
  return <section className="hero container"><p className="eyebrow">Hello, World! I am Yunha Kim</p><h1>{title} <span>{accent}</span></h1><p className="lede">사용자에게 필요한 것을 빠르게 만들고 개선하는 개발자, 김윤하입니다. 웹 프론트엔드부터 서비스 구현, 반복 업무를 줄이는 자동화 스크립트까지 — 문제를 직시하고 코드로 답을 찾아냅니다.</p>
    <div className="actions"><a className="button" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener">상세 이력서 (PDF) <i aria-hidden="true">↓</i></a><a className="button ghost" href="#projects">프로젝트 보러가기</a></div></section>;
}
