import React, { useState } from 'react';
import { ReactComponent as ClipboardCopy } from '../imgs/clipboard.svg';

interface InputProps {
  label: string;
  showClipboardCopy?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Input = (props: InputProps) => {
  const {
    label,
    showClipboardCopy,
    value,
    defaultValue,
    onChange,
  } = props;

  const [localValue, setLocalValue] = useState(
    value != null
      ? value
      : defaultValue != null
        ? defaultValue
        : ''
  );

  const theValue = onChange != null
    ? value
    : localValue;

  const copyToClipboard = () => {
    if (!theValue) {
      return;
    }

    navigator.clipboard
      .writeText(theValue)
      .then(() => {
        // TODO toaster here
      });
  };

  return (
    <div>
      <span className="input-label">{label}</span>
      <div>
        <input
          type="text"
          className="input"
          value={theValue}
          onChange={
            (e) => onChange != null
              ? onChange(e.target.value)
              : setLocalValue(e.target.value)
          }
        />
        {
          showClipboardCopy && (
            <ClipboardCopy
              className="clipboard-copy"
              onClick={copyToClipboard}
            />
          )
        }
      </div>
    </div>
  );
};

export default Input;
