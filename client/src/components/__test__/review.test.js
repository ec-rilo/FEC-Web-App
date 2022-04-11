import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import Reviews from '../Reviews';

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element) => element);
});

it('renders without crashing', () => {
  const container = document.createElement('div');
  // const root = createRoot(div);
  act(() => {
    ReactDOM.createRoot(container).render(<Reviews />);
  });
  // const button = container.querySelector('button');
  // expect(document.text).toBe('Ratings and reviews');
});
