import { act, render, screen } from '@testing-library/react';
import { HomeScreen } from '../index';

describe('Test HomeScreen', () => {
  render(<HomeScreen />);
  it('Click control button should update progress bar percentage', () => {
    expect(screen.getByText('50%')).toBeInTheDocument();
    const btnPlus10 = screen.getByTestId(
      'progress-bars__control-button_plus-10',
    );
    act(() => {
      btnPlus10.click();
    });
    expect(screen.getByText('60%')).toBeInTheDocument();
  });
});
