import { ForwardedRef, memo } from 'react';

interface ButtonProps {
  text: string;
  styles?: string;
  ref?: ForwardedRef<HTMLButtonElement>;
  onClick: () => void;
}

function Button({ text, styles, ref, onClick, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      ref={ref}
      role='button'
      className={'btn-primary focus-outline w-[100px] ' + styles}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default memo(Button);
