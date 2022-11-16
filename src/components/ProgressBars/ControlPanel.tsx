import styled from 'styled-components';
import { ControlButton } from './ControlButton';
import { ProgressBarModel } from './types';

interface ControlPanelProps {
  progressBars: ProgressBarModel[];
  selectedBarId: string;
  setSelectedBarId: (id: string) => void;
  setSelectedBarPercentage: (id: string, percentage: number) => void;
}

const initialControls = [-25, -10, 10, 25];

export const ControlPanel = ({
  progressBars,
  selectedBarId,
  setSelectedBarId,
  setSelectedBarPercentage,
}: ControlPanelProps) => {
  const getCurrentBar = (): ProgressBarModel | undefined => {
    return progressBars.find((bar) => bar.id === selectedBarId);
  };

  const calcPercentage = (percentage: number, change: number): number => {
    const newPercentage = percentage + change;
    return newPercentage < 0 ? 0 : newPercentage;
  };

  const handlePercentageChange = (change: number) => {
    const currentBar = getCurrentBar();
    if (!currentBar) return;
    const newPercentage = calcPercentage(currentBar.percentage, change);
    setSelectedBarPercentage(selectedBarId, newPercentage);
  };

  return (
    <Wrapper data-testid="progress-bars__control-panel">
      <select
        value={selectedBarId}
        onChange={(evt) => {
          setSelectedBarId(evt.target.value);
        }}
      >
        {progressBars.map((bar) => (
          <option key={bar.id} value={bar.id}>
            {bar.name}
          </option>
        ))}
      </select>
      {initialControls.map((change) => (
        <ControlButton
          key={change}
          handlePercentageChange={handlePercentageChange}
          change={change}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  column-gap: 1rem;
`;
