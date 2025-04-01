import { render, screen } from '@testing-library/react';
import React from "react";
import Post from './Post';

test('renders Post feature', () => {
  render(<Post />);
});