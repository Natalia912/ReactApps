import { ReactNode } from 'react';

import './button.css';

interface ButtonProps {
  class: 'rounded' | 'square';
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  return <button className={`button ${props.class}`}>{props.children}</button>;
};

export default Button;
