import { render, screen } from '@testing-library/react';
import { ProgressBars } from '../index';
import { progressBarsData } from './fixture';

describe('Test progress bars', () => {
  render(<ProgressBars progressBars={progressBarsData} />);

  it('Should render progress bars', () => {
    expect(screen.getByText('Progress Bars')).toBeInTheDocument();
    expect(screen.getAllByTestId('progress-bar').length).toBe(4);
  });
});
