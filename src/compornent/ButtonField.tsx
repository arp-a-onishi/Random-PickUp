import React from 'react';
import Button from '../common/Button';

interface ButtonFieldProps {
  onAddInput: () => void;
  onReset: () => void;
}

const ButtonField: React.FC<ButtonFieldProps> = ({ onAddInput, onReset }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button onClick={onAddInput} label='入力欄を増やす' className='add-input' />
      <Button onClick={onReset} label='リセット' className='reset' />
    </div>
  );
};

export default ButtonField;
