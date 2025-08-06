import React, { useState } from 'react';
import { styled } from '@stitches/react';
import { relative } from 'path';

const DefaultButton = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: 'auto',
  maxWidth: '250px',
  color: 'gray',
});

const Home = () => {
  const [inputs, setInputs] = useState<string[]>(['']); // 初期値として1つの空の入力を設定

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const addInputField = () => {
    setInputs([...inputs, '']); // 新しい空の入力を追加
  };

  const resetInputs = () => {
    setInputs(['']); // 初期状態にリセット
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type='text'
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`入力欄 ${index + 1}`}
          />
        </div>
      ))}
      <DefaultButton onClick={addInputField}>入力欄を増やす</DefaultButton>
      <DefaultButton onClick={resetInputs}>リセット</DefaultButton>
    </div>
  );
};

export default Home;
