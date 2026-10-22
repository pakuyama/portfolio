import React from 'react';
// 같은 모양의 부품에 서로 다른 내용(props)을 전달해 재사용합니다. size는 'wide', 'tall' 또는 빈 값입니다.
// image가 있으면 캡처를 보여 주고, 없으면 thumb 글자로 자리를 표시합니다.
export default function FeatureCard({ size = '', image, thumb, tag, title, text, stack, links }) {
  return <article className={`card shell ${size}`}><div className="core">
    <div className="thumb">{image ? <img src={`${import.meta.env.BASE_URL}${image.src}`} width={image.width} height={image.height} alt={image.alt} /> : thumb}</div><span className="tag">{tag}</span><h3>{title}</h3><p>{text}</p><span className="stack">{stack}</span>
    <div className="links">{links.map(link => <a key={link.label} href={link.href} target={link.href === '#' ? undefined : '_blank'} rel="noopener">{link.label} ↗</a>)}</div>
  </div></article>;
}
