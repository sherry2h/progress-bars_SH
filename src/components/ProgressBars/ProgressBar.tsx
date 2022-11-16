import styled from 'styled-components';

export const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <Wrapper data-testid="progress-bar">
      <Bar percentage={percentage} data-testid="progress-bar__bar" />
      <Percentage>{percentage}%</Percentage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #ddd;
  background-color: #f7fafc;
  width: 100%;
  position: relative;
  height: 2rem;
`;

const Bar = styled.div`
  height: 100%;
  background-color: #90cdf4;
  background-color: ${(props: { percentage: number }) =>
    props.percentage > 100 ? `#e53e3e` : `#90cdf4`};
  width: ${(props: { percentage: number }) =>
    props.percentage > 100 ? 100 : `${props.percentage}%`};
  transition: all 0.2s ease-in-out;
`;

const Percentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
