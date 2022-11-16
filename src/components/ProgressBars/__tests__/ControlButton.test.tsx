import { render, screen } from '@testing-library/react';
import { ControlButton } from '../ControlButton';

describe('Test control button', () => {
  it('Should render positive number', () => {
    render(<ControlButton handlePercentageChange={() => {}} change={10} />);
    expect(screen.getByText('+', { exact: false })).toBeInTheDocument();
  });

  it('Should render negative number', () => {
    render(<ControlButton handlePercentageChange={() => {}} change={-10} />);
    expect(screen.getByText('-', { exact: false })).toBeInTheDocument();
  });
});
