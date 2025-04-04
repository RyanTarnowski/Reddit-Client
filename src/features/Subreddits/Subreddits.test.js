import { render, screen } from '@testing-library/react';
import React from "react";
import Subreddits from './Subreddits';
import { Provider } from 'react-redux';
import Store from '../../store';

test('renders Post feature', () => {
  render(
    <Provider store={Store}>
      <Subreddits />
    </Provider>
  );
});