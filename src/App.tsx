import React, { useEffect } from 'react';
import B from 'components/B';
import A from 'components/A';

type AppProps = {
  count: number;
  list: Array<number>;
};

const App: React.FC<AppProps> = ({ count, list }) => {
  useEffect(() => {
    console.log('test');
    list.push();
  }, []);

  return (
    <div>
      <h1>Count</h1>
      <h2>{count}</h2>
      <A />
      <B />
    </div>
  );
};

export default App;
