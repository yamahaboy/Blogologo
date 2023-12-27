import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ThemeContextProvider } from './ThemeContext';
import { store } from '../store';

const MainContext: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </Provider>
  );
};

export default MainContext;