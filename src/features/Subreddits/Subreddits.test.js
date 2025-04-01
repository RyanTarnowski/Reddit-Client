import { render, screen } from '@testing-library/react';
import React from "react";
import Subreddits from './Subreddits';

test('renders Post feature', () => {
  render(<Subreddits />);
});