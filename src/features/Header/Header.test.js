import { render, screen } from '@testing-library/react';
import React from "react";
import Header from './Header';

test('renders Header feature', () => {
  render(<Header />);
});
