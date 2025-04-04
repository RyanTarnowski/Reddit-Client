import { render, screen } from '@testing-library/react';
import React from "react";
import Post from './Post';
import { Provider } from 'react-redux';
import Store from '../../store';

test('renders Post feature', () => {
  const post = {}

  render(
    <Provider store={Store}>
      <Post post={post} />
    </Provider>
  );
});