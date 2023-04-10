import React, { Suspense } from "react";
import NewPage from "./new-page/new-page";

const App = () => (
  <Suspense>
    <NewPage></NewPage>
  </Suspense>
);

export default App;
