import React from 'react';
import { memo } from 'react';

interface ButtonProps {
  text: string;
  styles?: string;
  onClick: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, onClick, styles, ...props }, ref) => {
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
);

export default memo(Button);
