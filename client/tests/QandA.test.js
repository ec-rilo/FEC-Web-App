import React from 'react';
import ReactDOM from 'react-dom';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import Questions from '../src/components/QandA/Questions';

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element) => element);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Questions />, div);
});
