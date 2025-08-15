import React, { useEffect, useRef } from 'react';
import { styled } from '../../stitches.config';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  index: number;
}

const InputWrapper = styled('div', {
  maxWidth: '90%',
  display: 'flex',
  flexDirection: 'column',
  margin: '16px auto',
  border: '2px solid $onSurface',
  borderRadius: '8px',
  boxShadow: '4px 4px 0 #dae1ee',
  '&:active': {
    outline: '4px solid #0066ff46',
  },
});

const InputLabel = styled('label', {
  marginBottom: '4px',
  fontSize: '$textMD',
});

const InputText = styled('input', {
  fontSize: '$textXL',
  width: '100%',
  border: 'none',
  outline: 'none',
  paddingLeft: '8px',
  paddingBottom: '8px',
  boxSizing: 'border-box',
  // フォーカス時のアニメーションを適用
  '&:focus + .underline::before': {
    width: '100%',
  },
});

const InputUnderLine = styled('div', {
  position: 'relative',
  marginBottom: '16px',
  borderTop: '1px solid $secondary',
  '&::before': {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '0px',
    height: '1px',
    content: '',
    backgroundColor: '$labelGreen',
    transition: 'width 1.5s',
  },
});

const InputField: React.FC<InputFieldProps> = React.memo(function InputField({ value, onChange, index }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // フォーカスを設定
    }
  }, [value]); // valueが変更されたときにフォーカスを設定

  const inputId = `項目${index + 1}`;
  const labelId = `l_${inputId}`;

  return (
    <InputWrapper>
      <InputLabel htmlFor={inputId} id={labelId}>
        {inputId}
      </InputLabel>
      <InputText
        ref={inputRef}
        id={inputId}
        type='text'
        placeholder='文字を入力'
        value={value}
        onChange={(e) => {
          e.preventDefault();
          onChange(e.target.value);
        }}
      />
      <InputUnderLine className='underline' />
    </InputWrapper>
  );
});

export default InputField;
