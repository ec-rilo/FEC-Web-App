import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Fetch from '../fetch';

import Overview from './src/components/Overview.js';

// overview tests
// const server = setupServer(
//   rest.get('/products', (req, res, ctx) => res(ctx.json({ greeting: 'hello there' }))),
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// test('test name', async () => {
//   render(<Overview />);

//   fireEvent.click(screen.getByText('Load Greeting'));

//   await waitFor(() => screen.getByRole('heading'));

//   expect(screen.getByRole('heading')).toHaveTextContent('hello there');
//   expect(screen.getByRole('button')).toBeDisabled();
// });

// test('handles server error', async () => {
//   server.use(
//     rest.get('/greeting', (req, res, ctx) => res(ctx.status(500))),
//   );

//   render(<Fetch url="/greeting" />);

//   fireEvent.click(screen.getByText('Load Greeting'));

//   await waitFor(() => screen.getByRole('alert'));

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
//   expect(screen.getByRole('button')).not.toBeDisabled();
// });

// reviews tests

// questions tests
