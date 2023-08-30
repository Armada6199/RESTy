import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../App';

// Define a mock API server
const server = setupServer(
  rest.post('/api', (req, res, ctx) => {
    return res(ctx.json({ message: 'Mocked response' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders app with initial state', () => {
  render(<App />);
  
  expect(screen.getByText('Request Method:')).toBeInTheDocument();
  expect(screen.getByText('URL:')).toBeInTheDocument();
  expect(screen.getByText('Body:')).toBeInTheDocument();
  expect(screen.getByText('Submit')).toBeInTheDocument();
});

test('displays request details on form submission', async () => {
  render(<App />);
  
  const urlInput = screen.getByLabelText('URL');
  const methodSelect = screen.getByLabelText('Method');
  const bodyInput = screen.getByLabelText('Request Body');
  const submitButton = screen.getByText('Submit');
  
  userEvent.type(urlInput, 'https://example.com');
  userEvent.selectOptions(methodSelect, 'POST');
  userEvent.type(bodyInput, JSON.stringify({ key: 'value' }));
  
  userEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText('Request Method: POST')).toBeInTheDocument();
    expect(screen.getByText('URL: https://example.com')).toBeInTheDocument();
    expect(screen.getByText('Body: {"key":"value"}')).toBeInTheDocument();
  });
});

test('displays API response', async () => {
  render(<App />);
  
  const urlInput = screen.getByLabelText('URL');
  const methodSelect = screen.getByLabelText('Method');
  const bodyInput = screen.getByLabelText('Request Body');
  const submitButton = screen.getByText('Submit');
  
  userEvent.type(urlInput, '/api');
  userEvent.selectOptions(methodSelect, 'POST');
  userEvent.type(bodyInput, JSON.stringify({ key: 'value' }));
  
  userEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText('Mocked response')).toBeInTheDocument();
  });
});
