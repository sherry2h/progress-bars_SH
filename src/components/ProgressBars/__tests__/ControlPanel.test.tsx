import { render, screen } from '@testing-library/react';
import { ControlPanel } from '../ControlPanel';
import { progressBarsData } from './fixture';

describe('Test control panel', () => {
  render(
    <ControlPanel
      progressBars={progressBarsData}
      selectedBarId={progressBarsData[0].id}
      setSelectedBarId={() => {}}
      setSelectedBarPercentage={() => {}}
    />,
  );

  it('Should render control panel', () => {
    expect(screen.getAllByRole('option').length).toBe(4);
    expect(screen.getAllByRole('button').length).toBe(4);
  });
});
