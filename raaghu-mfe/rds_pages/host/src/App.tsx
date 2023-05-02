import React, { Suspense, useState, useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.scss";
import Main from "./Main";
import { Link } from "react-router-dom";
import Login from "../../rds-page-login/src/Login/Login";

const App = () => {
  const [themes, setThemes] = useState("light");

  // const toggleTheme = (e: any) => {
  //   if (e.target.checked) {
  //     setThemes("dark");
  //     console.log(setThemes("dark"))
  //   } else {
  //     setThemes("light");
  //   } /*else {
  //     setThemes("semi-dark");
  //   }*/
  // };
  // document.documentElement.setAttribute("theme", themes);
  return (
    <Suspense>
      <Main></Main>
      </Suspense>
  );
};

export default App;
