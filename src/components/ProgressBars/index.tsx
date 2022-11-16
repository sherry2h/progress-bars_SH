import styled from 'styled-components';
import { ProgressBar } from './ProgressBar';
import { ProgressBarModel } from './types';

interface ProgressBarsProps {
  progressBars: ProgressBarModel[];
}

export const ProgressBars = ({ progressBars }: ProgressBarsProps) => {
  return (
    <Wrapper>
      <h1>Progress Bars</h1>
      <ProgressBarWrapper>
        {progressBars.map((bar) => (
          <ProgressBar key={bar.id} percentage={bar.percentage} />
        ))}
      </ProgressBarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  width: 25rem;
  max-width: 100%;
  margin-bottom: 2rem;
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
