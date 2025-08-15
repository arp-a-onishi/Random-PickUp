import React from 'react';
import { styled } from '../../stitches.config';

interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const StyledButton = styled('button', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: 'auto',
  marginBottom: '16px',
  height: '46px',
  maxWidth: '250px',
  padding: '5px 11px',
  minWidth: '200px',
  width: '10%',
  color: '$secondary',
  background: '$gray3',
  fontSize: '$textLG',
  whiteSpace: 'nowrap preserve',
  textDecoration: 'none',
  fontFamily: '$body',
  fontWeight: '$bold',
  borderRadius: '8px',
  borderBottom: 'solid 5px #999',
  '&.add-input': {
    background: '$AddBtn',
    color: '$textOnColor',
  },
  '&.reset': {
    background: '$ResetBtn',
    color: '$textOnColor',
  },
  '&.gacha': {
    background: '$GachaBg',
    color: '$textOnColor',
  },
  '&:active': {
    outline: '4px solid #0066ff46',
  },
  '&:hover': {
    cursor: 'pointer',
    borderBottom: 'solid 2px #999',
    transform: 'translateY(3px)',
    transition: '0.3s',
  },
});

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {label}
    </StyledButton>
  );
};

export default Button;
