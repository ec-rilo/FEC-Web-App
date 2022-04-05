import React from 'react';
import ReactDOM from 'react-dom';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import Reviews from '/Users/annywang/Documents/Hack Reactor/HR Immersive/week6/FEC/client/src/components/Reviews.js';

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element, node) => {
    return element
  })
});

it('renders without ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews />, div);
});
