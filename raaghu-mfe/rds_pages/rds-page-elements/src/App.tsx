import React, { Suspense } from 'react'
import { useParams } from "react-router-dom";
import Elements from './elements/elements';

const App = () => {
  const { type } = useParams();
  console.log(type)
  return (
    <Suspense>
      <Elements type={type}></Elements>
    </Suspense>
  );
};
export default App;
