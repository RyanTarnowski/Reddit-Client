import { render, screen } from '@testing-library/react';
import React from "react";
import Header from './Header';
import { Provider } from 'react-redux';
import Store from '../../store';

test('renders Header feature', () => {
  render(
    <Provider store={Store}>
      <Header />
    </Provider>
  );
});