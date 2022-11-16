export const ControlButton = ({
  change,
  handlePercentageChange,
}: {
  change: number;
  handlePercentageChange: (change: number) => void;
}) => {
  return (
    <button
      onClick={() => handlePercentageChange(change)}
      data-testid={`progress-bars__control-button_${
        change < 0 ? 'minus' : 'plus'
      }-${Math.abs(change)}`}
    >
      {change > 0 ? `+${change}` : change}
    </button>
  );
};
