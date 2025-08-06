import { createStitches } from '@stitches/react';

export const { config, createTheme, css, getCssText, globalCss, styled, theme, keyframes } = createStitches({
  theme: {
    colors: {
      //---旧コーポレイトサイト---
      //FIXME:不必要なcolorは改修後削除&コメント削除
      accent: '#337777',
      text: '#1F1F1F',
      extended: '#AAAAAA',
      line: '#E6E6E6',
      bgPrimary: '#F6F6F6',
      bgSecondary: '#FBFDFD',
      bgTertiary: '#ECF2F2',
      bgOriginal: '#333333',
      error: '#BF0000',
      errorBg: '#FFE8E8',
      //---新コーポレイトサイト---
      //-MainColor-
      asembleOrange: '#ED983B',
      freshOrange: '#F8B973',
      pailOrange: '#FEF3E7',
      burntOrange: '#BE7423',
      //-SubColor-
      calmBlue: '#3B5C82',
      softBlue: '#6D9FD5',
      //-SystemGray-
      black: '#1D1D1D',
      gray1: '#3D3D3D',
      gray2: '#707070',
      gray3: '#C8C8C8',
      gray4: '#EBEBEB',
      white: '#FFFFFF',
      //-SemanticColor-
      red1: '#CF3A3A',
      red2: '#F36E6E',
      red3: '#FFD5D5',
    },
    fonts: {
      body: '"Zen Maru Gothic", "Quicksand", "Helvetica Neue", "Helvetica", "Hiragino Sans", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
      helvetica:
        '"Quicksand", "Helvetica Neue", "Helvetica", "Hiragino Sans", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
      yugothic: '"Zen Maru Gothic", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
    },
    fontSizes: {
      8: '64px',
      4: '32px',
      3: '24px',
      2: '16px',
      1: '14px',
    },
    fontWeights: {
      bold: 700,
      medium: 500,
      regular: 400,
    },
    zIndices: {
      // Header, Footer, etc...
      LayoutPrimary: 100,

      // Others priority
      LayoutSecondary: 50,
    },
  },
  utils: {},
  media: {
    sp: '(max-width: 834px)',
    tb: '(max-width: 1024px)',
  },
});
