import React from 'react';
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import History from './index';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('History Component', () => {
  it('displays history data', async () => {
    const historyData = [
      {
        requestDetails: {
          method: 'GET',
          url: '/fake-api',
          body: '',
        },
        results: {
          data: { info: 'mocked response' },
        },
      },
    ];

    render(<History history={historyData} />);

    // Assert that the data is displayed correctly
    const methodElement = screen.getByText('Method GET');
    expect(methodElement).toBeInTheDocument();

    const urlElement = screen.getByText('URL /fake-api');
    expect(urlElement).toBeInTheDocument();

    const bodyElement = screen.getByText('BODY');
    expect(bodyElement).toBeInTheDocument();

    const resultsElement = screen.getByText('Results');
    expect(resultsElement).toBeInTheDocument();

    const responseData = screen.getByText('{"info":"mocked response"}');
    expect(responseData).toBeInTheDocument();
  });

  it('displays multiple history entries', async () => {
    const historyData = [
      /* ... Add more history entries here ... */
    ];

    render(<History history={historyData} />);

    // Assert that multiple history entries are displayed
    const methodElements = screen.getAllByText(/Method/);
    expect(methodElements).toHaveLength(historyData.length);

    const urlElements = screen.getAllByText(/URL/);
    expect(urlElements).toHaveLength(historyData.length);
    
    // ... Other assertions for the other parts of the history entries ...
  });
});
