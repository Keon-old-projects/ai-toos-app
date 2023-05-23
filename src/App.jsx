import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  console.log(setCount);

  return (
    <>
      <h1>12</h1>
      <p>{count}</p>
    </>
  );
}

export default App;
