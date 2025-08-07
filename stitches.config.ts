import { createStitches } from '@stitches/react';
import { text } from 'stream/consumers';

export const { styled, css, globalCss, keyframes, getCssText, theme } = createStitches({
  theme: {
    colors: {
      surface: '#dae1ee',
      secondary: '#737373',
      onSurface: '#171926',
      toggleBtnColor: '#171926',
      ToggleBtn: '#dfaf3e',
      TtoggleBtnBg: '#e4e8f0',
      DefaultBtnColor: '#9a0000',
      primaryBtnBg: 'linear-gradient(45deg, #b51409 0%, #efae2d 50%, #46b4ab 100%)',
      secondaryBtnBg: 'linear-gradient(90deg, #efae2d 0%, #d9d9d9 100%)',
      HintBg: 'linear-gradient(45deg, #b51409 0%, #efae2d 50%, #46b4ab 100%)',
      textLink: '#9a0000',
      borderColor: '#dae1ee',
      border: '2px solid  #dae1ee',
      boxShadowLg: '4px 4px 0  #dae1ee',
      boxShadowSm: '2px 2px 0  #dae1ee',
      boxShadowInset: 'inset 4px 4px 0  #dae1ee',
      boxShadowInsetSm: 'inset 2px 2px 0  #dae1ee',
      borderRadiusFull: '625rem',
      sky: '#00a4fd',
      blue: '#0d20fc',
      teal: '#46b4ab',
      labelGreen: '#3BE5AE',
    },
    fontSizes: {
      textXXS: '0.65rem',
      textXS: '0.75rem',
      textSM: '0.875rem',
      textMD: '1rem',
      textLG: '1.25rem',
      textXL: '1.5rem',
      textXXL: '2rem',
    },

    fontWeights: {
      bold: 700,
      medium: 500,
      regular: 400,
    },
    fonts: {
      body: '"Zen Maru Gothic", "Quicksand", "Helvetica Neue", "Helvetica", "Hiragino Sans", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
      helvetica:
        '"Quicksand", "Helvetica Neue", "Helvetica", "Hiragino Sans", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
      yugothic: '"Zen Maru Gothic", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
    },
    // 他のテーマの設定
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
  },
});

// グローバルスタイルの設定
export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
  },
});
