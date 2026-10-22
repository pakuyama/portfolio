import React, { useState } from 'react';
import { validateContact } from '../validate.js';
export default function Contact() {
  const [message, setMessage] = useState(''); // 검사 결과만 state에 보관합니다.
  const [copyLabel, setCopyLabel] = useState('복사하기');
  function submit(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    setMessage(validateContact(values).message); // 서버 요청은 하지 않습니다.
  }
  async function copyMail() {
    try { await navigator.clipboard.writeText('kimyunha@example.com'); setCopyLabel('복사됨'); }
    catch { setCopyLabel('직접 복사해 주세요'); }
    setTimeout(() => setCopyLabel('복사하기'), 2000);
  }
  return <div className="container"><section id="contact" className="closing"><div><p className="eyebrow">Contact</p><h2>함께 가치 있는 프로젝트를 만들어 볼까요?</h2><p className="muted">새로운 프로젝트, 협업 제안, 커피챗 등 언제든 편하게 연락해 주세요.</p>
    <div className="mail"><span>kimyunha@example.com</span><button type="button" onClick={copyMail}>{copyLabel}</button></div></div>
    <form noValidate onSubmit={submit}>
    <label htmlFor="name">이름<input id="name" name="name" autoComplete="off" /></label>
    <label htmlFor="email">이메일<input id="email" name="email" type="email" autoComplete="off" /></label>
    <label htmlFor="message">제안 내용<textarea id="message" name="message" /></label>
    <button type="submit">입력 확인하기 <i aria-hidden="true">→</i></button><p className="message" role="status" aria-live="polite">{message}</p>
    <p className="note">정보는 서버로 전송되지 않습니다. 실제 개인정보 대신 가상 값을 사용하세요.</p>
  </form></section></div>;
}
