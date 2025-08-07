import React, { useState, useEffect } from 'react';
import InputField from '../common/InputField';
import { styled } from '../../stitches.config';
import Button from '../common/button';

const Home = () => {
  useEffect(() => {}, []);

  const [inputs, setInputs] = useState<string[]>(['']); // 初期値として1つの空の入力を設定
  const [selectedValue, setSelectedValue] = useState<string | null>(null); // ランダムに選ばれた値を保持

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
    setSelectedValue(null); // 選ばれた値もリセット
  };

  const handleGacha = () => {
    const filledInputs = inputs.map((input, index) => input.trim() || (index + 1).toString());
    const randomValue = filledInputs[Math.floor(Math.random() * filledInputs.length)];
    setSelectedValue(randomValue); // ランダムな値を選択
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <InputField key={index} value={input} onChange={(value) => handleInputChange(index, value)} index={index} />
      ))}
      <Button onClick={addInputField} label='入力欄を増やす' />
      <Button onClick={resetInputs} label='リセット' />
      <Button onClick={handleGacha} label='ガチャ' />
      {selectedValue && <div>選ばれた値: {selectedValue}</div>}
    </div>
  );
};

export default Home;
