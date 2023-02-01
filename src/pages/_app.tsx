import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { store } from '@/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <NextUIProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      ,
    </NextUIProvider>
  );
}
