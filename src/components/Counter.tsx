import React, { useCallback } from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function Counter({ count, onIncrease, onDecrease, onIncreaseBy }: CounterProps) {
  const onIncreaseByFive = useCallback(() => {
    onIncreaseBy(5);
  }, [onIncreaseBy]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onIncreaseByFive}>+5</button>
    </div>
  );
}

export default Counter;
