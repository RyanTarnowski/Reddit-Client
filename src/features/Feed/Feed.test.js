import { render, screen } from '@testing-library/react';
import React from "react";
import Feed from './Feed';

test('renders Post feature', () => {
  render(<Feed />);
});