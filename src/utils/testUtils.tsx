import React, { FC } from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';

const AllTheProviders: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
