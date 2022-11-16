import { render, screen } from '@testing-library/react';
import { ProgressBar } from '../ProgressBar';

describe('Test progress bar', () => {
  it('Should render with normal background when percentage <= 100', () => {
    render(<ProgressBar percentage={50} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByTestId('progress-bar__bar')).toHaveStyle({
      backgroundColor: '#90cdf4',
    });
  });

  it('Should render with red background when percentage > 100', () => {
    render(<ProgressBar percentage={120} />);
    expect(screen.getByTestId('progress-bar__bar')).toHaveStyle({
      backgroundColor: '#e53e3e',
    });
  });
});
