import React from 'react';
import { render } from '@testing-library/react';
import Results from './index';

describe('Results Component', () => {
  const testData = {
    data: {
      key1: 'value1',
      key2: 'value2',
    },
    headers: 'Test Headers',
  };

  it('renders headers correctly', () => {
    const { getByText } = render(<Results data={testData} />);
    const headerElement = getByText('Test Headers');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders JSON data correctly', () => {
    const { getByText } = render(<Results data={testData} />);
    const jsonData = JSON.stringify(testData.data, undefined, 2);
    const jsonElement = getByText(jsonData);
    expect(jsonElement).toBeInTheDocument();
  });

  it('does not render data if data prop is not provided', () => {
    const { container } = render(<Results />);
    const preElement = container.querySelector('pre');
    expect(preElement).toBeNull();
  });

  it('renders correct JSON data when provided', () => {
    const modifiedTestData = {
      data: {
        key1: 'new_value1',
        key3: 'value3',
      },
      headers: 'New Test Headers',
    };

    const { getByText } = render(<Results data={modifiedTestData} />);
    const jsonData = JSON.stringify(modifiedTestData.data, undefined, 2);
    const jsonElement = getByText(jsonData);
    expect(jsonElement).toBeInTheDocument();

    const headerElement = getByText('New Test Headers');
    expect(headerElement).toBeInTheDocument();
  });
});
