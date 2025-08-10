import localFont from 'next/font/local';

export const generalSans = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSans-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
});
