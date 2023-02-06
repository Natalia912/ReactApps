import { FC, useRef, useState } from 'react';

import './link.css';

type LinkProps = {
  originalUrl: string;
  shortUrl: string;
};

const Link: FC<LinkProps> = ({ originalUrl, shortUrl }) => {
  const [copied, setCopied] = useState(false);
  const linkRef = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    if (linkRef.current)
      navigator.clipboard.writeText(linkRef.current.innerText);
    setCopied(true);
  };

  return (
    <li className="link-container">
      <p className="link-original">{originalUrl}</p>
      <div className="link-box">
        <span ref={linkRef} className="link-short">
          {shortUrl}
        </span>
        <button
          className={`link-button ${copied ? 'copied' : 'null'}`}
          onClick={handleClick}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </li>
  );
};

export default Link;
