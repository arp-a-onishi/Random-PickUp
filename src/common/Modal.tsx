import React from 'react';
import Button from './button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
  result: string | null; // 結果を受け取る
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onRetry, result }) => {
  if (!isOpen) {
    return null; // モーダルがオープンでないときは何も表示しない
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    // クリックされた要素がモーダル内でない場合にモーダルを閉じる
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={modalStyles.overlay} onClick={handleOverlayClick}>
      <div style={modalStyles.modal}>
        <h2>ガチャの結果</h2>
        <p>選ばれた値: {result}</p>
        <Button onClick={onRetry} label='もう一回'></Button>
        <Button onClick={onClose} label='戻る'></Button>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
  modal: {
    backgroundColor: 'white',
    width: '60%',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  } as React.CSSProperties,
};

export default Modal;
