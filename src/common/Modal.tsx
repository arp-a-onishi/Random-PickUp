import React from 'react';
import Button from './Button';
import { styled, keyframes } from '../../stitches.config';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
  result: string | null; // 結果を受け取る
}

const ResultWrapper = styled('div', {
  maxWidth: '90%',
  display: 'flex',
  flexDirection: 'column',
  margin: '16px auto',
});

const fadeInScaleUp = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.8)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const rainbowAnimation = keyframes({
  '0%': { color: 'red' },
  '14%': { color: 'orange' },
  '28%': { color: 'yellow' },
  '42%': { color: 'green' },
  '57%': { color: 'blue' },
  '71%': { color: 'indigo' },
  '85%': { color: 'violet' },
  '100%': { color: 'red' },
});

const StyledResultText = styled('text', {
  fontSize: '$textXXL',
  fontWeight: '$bold',
});

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onRetry, result }) => {
  const { width, height } = useWindowSize();

  if (!isOpen) {
    return null; // モーダルがオープンでないときは何も表示しない
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    // クリックされた要素がモーダル内でない場合にモーダルを閉じる
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const StyledResult = styled('text', {
    fontSize: '48px',
    fontWeight: '$bold',
    animation: `${rainbowAnimation} 3s linear infinite, ${fadeInScaleUp} 0.5s ease-in-out`,
  });

  return (
    <div style={modalStyles.overlay} onClick={handleOverlayClick}>
      <div style={modalStyles.modal}>
        <Confetti width={width} height={height} recycle={true} />
        <ResultWrapper>
          {' '}
          <StyledResultText>ガチャの結果</StyledResultText>
          <StyledResult> {result}</StyledResult>
        </ResultWrapper>

        <Button onClick={onRetry} label='もう一回' className='gacha'></Button>
        <Button onClick={onClose} label='戻る' className='reset'></Button>
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
    zIndex: 999,
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
