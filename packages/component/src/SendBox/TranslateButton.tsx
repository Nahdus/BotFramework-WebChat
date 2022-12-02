import { hooks } from 'botframework-webchat-api';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { FC, useCallback } from 'react';
import IconButton from './IconButton';
import TranslateIcon from './Assets/TranslateIcon';
import useFocus from '../hooks/useFocus';

const { useDisabled, useLocalizer } = hooks;

type TranslateButtonProps = {
  className?: string;
};

const TranslateButton: FC<TranslateButtonProps> = ({ className }) => {
  const [disabled] = useDisabled();
  const focus = useFocus();
  const localize = useLocalizer();
  const handleClick = useCallback(() => {
    focus('sendBoxWithoutKeyboard');
  }, [focus]);
  return (
    <IconButton
      alt={localize('TEXT_INPUT_TRANSLATE_BUTTON_ALT')}
      className={classNames('webchat__translate-button', className)}
      disabled={disabled}
      onClick={handleClick}
    >
      <TranslateIcon />
    </IconButton>
  );
};
TranslateButton.defaultProps = {
  className: undefined
};
TranslateButton.propTypes = {
  className: PropTypes.string
};
export default TranslateButton;
