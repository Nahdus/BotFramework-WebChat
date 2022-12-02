import { hooks } from 'botframework-webchat-api';
import classNames from 'classnames';
import React from 'react';

import useStyleToEmotionObject from '../../hooks/internal/useStyleToEmotionObject';

const { useDirection } = hooks;

const ROOT_STYLE = {
  '&.webchat__send-icon': {
    '&.webchat__send-icon--rtl': {
      transform: 'scale(-1, 1)'
    }
  }
};

const TranslateIcon = () => {
  const [direction] = useDirection();
  const rootClassName = useStyleToEmotionObject()(ROOT_STYLE) + '';

  return (
    <svg
      className={classNames(
        'webchat__translate-icon',
        { 'webchat__translate-icon--rtl': direction === 'rtl' },
        rootClassName
      )}
      height={48}
      viewBox="0 0 45.7 33.8"
      width={48}
    >
      <path d="M24.05 44 22 38H8q-1.75 0-2.875-1.125T4 34V8q0-1.75 1.125-2.875T8 4h12l1.75 5.95H40q1.75 0 2.875 1.125T44 13.95V40q0 1.75-1.125 2.875T40 44Zm-9.7-14.8q3.45 0 5.65-2.25t2.2-5.8v-.775q0-.325-.1-.575h-7.95v3.05h4.5q-.4 1.45-1.525 2.25t-2.725.8q-1.95 0-3.35-1.425Q9.65 23.05 9.65 21t1.4-3.475q1.4-1.425 3.35-1.425.9 0 1.675.325t1.425.975l2.45-2.3q-1-1.1-2.5-1.7-1.5-.6-3.1-.6-3.4 0-5.775 2.4Q6.2 17.6 6.2 21t2.375 5.8q2.375 2.4 5.775 2.4Zm13.35.95 1.15-1.05q-.7-.85-1.3-1.625-.6-.775-1.15-1.675Zm2.5-2.55q1.45-1.65 2.175-3.15.725-1.5.975-2.35H25.4l.55 2.15h2q.4.75.95 1.6.55.85 1.3 1.75ZM26.05 42H40q.85 0 1.425-.575Q42 40.85 42 40V13.95q0-.85-.575-1.425-.575-.575-1.425-.575H22.4l2.3 8.15h3.95v-2.15h2.05v2.15h7.35v2h-2.6Q35 24 34 25.8q-1 1.8-2.35 3.35l5.45 5.4L35.65 36l-5.45-5.4-1.8 1.8 1.65 5.6Z" />
    </svg>
  );
};

export default TranslateIcon;
