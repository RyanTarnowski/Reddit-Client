import { render, screen } from '@testing-library/react';
import React from "react";
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';

test('renders App feature', () => {
  render(
  <Provider store={Store}>
    <App />
  </Provider>
);
});