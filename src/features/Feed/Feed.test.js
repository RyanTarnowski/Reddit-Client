import { render, screen } from '@testing-library/react';
import React from "react";
import Feed from './Feed';
import { Provider } from 'react-redux';
import Store from '../../store';

test('renders Post feature', () => {
  render(
    <Provider store={Store}>
      <Feed />
    </Provider>
  );
});