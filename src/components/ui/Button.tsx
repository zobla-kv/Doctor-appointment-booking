import { memo } from 'react';

interface ButtonProps {
  text: string;
  styles?: string;
  onClick: () => void;
}

function Button({ text, styles, onClick }: ButtonProps) {
  return (
    <button className={'btn-primary w-[100px] ' + styles} onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(Button);
