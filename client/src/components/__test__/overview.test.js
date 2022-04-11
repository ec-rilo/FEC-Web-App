import React from 'react';
import ReactDOM from 'react-dom';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import Overview from '../Overview/Overview.js';

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element, node) => element);
});

it('renders without ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Overview />, div);
});
