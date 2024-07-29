import { enableFetchMocks } from 'jest-fetch-mock';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../renderer/App';

enableFetchMocks();

describe('App', () => {
  it('should render without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
