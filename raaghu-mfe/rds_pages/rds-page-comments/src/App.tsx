import React, { Suspense } from "react";
import Comments from "./comments/comments";

const App = () => (
  <Suspense>
    <Comments></Comments>
  </Suspense>
);

export default App;
