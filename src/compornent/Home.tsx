import React, { useState, useEffect } from 'react';
import { styled } from '../../stitches.config';
import InputField from '../common/InputField';
import ButtonField from '../compornent/ButtonField';
import Modal from '../common/Modal';
import Button from '../common/button';

const Home = () => {
  const HomeWrapper = styled('div', {
    width: '60%',
    minWidth: '428px',
    margin: '0 auto',
    color: '$onSurface',
    textAlign: 'center',
    background: '$background',
    border: '2px solid $onSurface',
    borderRadius: '8px',
    boxShadow: '4px 4px 0 #dae1ee',
    animation: 'pop 0.2s ease-in-out 1',
  });

  useEffect(() => {}, []);

  const [inputs, setInputs] = useState<string[]>(['']); // 初期値として1つの空の入力を設定
  const [selectedValue, setSelectedValue] = useState<string | null>(null); // ランダムに選ばれた値を保持
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの表示状態を管理

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
    setIsModalOpen(true); // モーダルをオープン
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // モーダルを閉じる
  };

  const handleRetry = () => {
    handleGacha(); // もう一回ガチャを実行
  };

  return (
    <HomeWrapper>
      {inputs.map((input, index) => (
        <InputField key={index} value={input} onChange={(value) => handleInputChange(index, value)} index={index} />
      ))}
      <ButtonField onAddInput={addInputField} onReset={resetInputs} />
      <Button onClick={handleGacha} label='ガチャ' />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onRetry={handleRetry} result={selectedValue} />
    </HomeWrapper>
  );
};

export default Home;
