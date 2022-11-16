import { useState } from 'react';
import styled from 'styled-components';
import { ProgressBars } from '../../components/ProgressBars';
import { ControlPanel } from '../../components/ProgressBars/ControlPanel';
import { ProgressBarModel } from '../../components/ProgressBars/types';

const initialProgressBars = [
  { id: 'progress-1', name: 'progress-1', percentage: 50 },
  { id: 'progress-2', name: 'progress-2', percentage: 30 },
  { id: 'progress-3', name: 'progress-3', percentage: 20 },
];

export const HomeScreen = () => {
  const [progressBars, setProgressBars] =
    useState<ProgressBarModel[]>(initialProgressBars);

  const [selectedBarId, setSelectedBarId] = useState<string>('progress-1');

  const setSelectedBarPercentage = (id: string, percentage: number) => {
    const newProgressBars = [...progressBars];
    const index = newProgressBars.findIndex((bar) => bar.id === id);
    if (index === -1) return;
    newProgressBars.splice(index, 1, { ...newProgressBars[index], percentage });
    setProgressBars(newProgressBars);
  };

  return (
    <Container>
      <ProgressBars progressBars={progressBars} />
      <ControlPanel
        progressBars={progressBars}
        selectedBarId={selectedBarId}
        setSelectedBarId={setSelectedBarId}
        setSelectedBarPercentage={setSelectedBarPercentage}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
