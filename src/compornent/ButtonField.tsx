import React from 'react';
import Button from '../common/button';

interface ButtonFieldProps {
  onAddInput: () => void;
  onReset: () => void;
}

const ButtonField: React.FC<ButtonFieldProps> = ({ onAddInput, onReset }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button onClick={onAddInput} label='入力欄を増やす' />
      <Button onClick={onReset} label='リセット' />
    </div>
  );
};

export default ButtonField;
