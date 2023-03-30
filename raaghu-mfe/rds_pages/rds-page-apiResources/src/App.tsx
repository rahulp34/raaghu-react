import React, { Suspense } from "react";
import ApiResources from "./apiResources/apiResources";

const App = () => (
  <Suspense>
    <ApiResources></ApiResources>
  </Suspense>
);

export default App;
