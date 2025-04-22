import { RefObject, useEffect } from 'react';

let isUsingKeyboard = false;
let isListenerAttached = false;
let elementsTrackingFocus = 0;

const className = 'focus-outline';

const handleGlobalKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Tab') {
    isUsingKeyboard = true;
  }
};

const handleGlobalMousedown = () => {
  isUsingKeyboard = false;
};

// Prevent outline from being added on click, add only on 'Tab' key
export const useAccessibleFocus = <T extends HTMLElement>(
  ref: RefObject<T | null>
) => {
  useEffect(() => {
    const target = ref?.current;
    if (!target) return;

    const handleFocus = () => {
      const hasClass = target.classList.contains(className);

      if (isUsingKeyboard && !hasClass) {
        target.classList.add(className);
      } else if (!isUsingKeyboard && hasClass) {
        target.classList.remove(className);
      }
    };

    target.addEventListener('focus', handleFocus);

    if (!isListenerAttached) {
      window.addEventListener('keydown', handleGlobalKeydown);
      window.addEventListener('mousedown', handleGlobalMousedown);
      isListenerAttached = true;
    }

    elementsTrackingFocus++;

    return () => {
      target.removeEventListener('focus', handleFocus);
      elementsTrackingFocus--;

      if (elementsTrackingFocus === 0 && isListenerAttached) {
        window.removeEventListener('keydown', handleGlobalKeydown);
        window.removeEventListener('mousedown', handleGlobalMousedown);
        isListenerAttached = false;
      }
    };
  }, [ref]);
};
