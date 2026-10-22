import { validateContact } from './validate.js';
// # 뒤 이름은 HTML id와 정확히 같아야 합니다.
const button = document.querySelector('#menu-button');
const navigation = document.querySelector('#navigation');
button.addEventListener('click', () => {
  const wasOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!wasOpen));
  navigation.classList.toggle('is-open', !wasOpen);
});
// 링크로 이동한 뒤 모바일 메뉴를 닫아 다음 내용을 가리지 않습니다.
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('is-open'); button.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault(); // 브라우저의 기본 페이지 이동을 멈춥니다.
  const values = Object.fromEntries(new FormData(event.currentTarget));
  const result = validateContact(values); // HTML·React판이 같은 검사 함수를 씁니다.
  document.querySelector('#form-status').textContent = result.message;
});
// 이메일 주소를 클립보드에 복사하고, 버튼 글자로 결과를 알려 줍니다.
const copyButton = document.querySelector('#copy-mail');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(document.querySelector('#mail-address').textContent);
    copyButton.textContent = '복사됨';
  } catch {
    copyButton.textContent = '직접 복사해 주세요';
  }
  setTimeout(() => { copyButton.textContent = '복사하기'; }, 2000);
});
// 화면에 들어온 섹션에 in 클래스를 붙여 부드럽게 나타나게 합니다.
document.documentElement.classList.add('js');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('in');
}), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
