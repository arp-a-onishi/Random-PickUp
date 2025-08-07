import React from 'react';
import { styled } from '../../stitches.config';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  index: number;
}

// スタイルを定義
const InputWrapper = styled('div', {
  maxWidth: '30%',
  display: 'flex',
  flexDirection: 'column',
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

// InputFieldコンポーネントの実装
const InputField: React.FC<InputFieldProps> = ({ value, onChange, index }) => {
  const inputId = `text${index + 1}`;
  const labelId = `l_${inputId}`;

  return (
    <InputWrapper>
      <InputLabel htmlFor={inputId} id={labelId}>
        {inputId}
      </InputLabel>
      <InputText
        id={inputId}
        type='text'
        placeholder='コメントを入力する'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <InputUnderLine className='underline' />
    </InputWrapper>
  );
};

export default InputField;
