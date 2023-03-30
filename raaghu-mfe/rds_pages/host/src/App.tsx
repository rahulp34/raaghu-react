import React, { Suspense, useState, useEffect } from "react";

import "./App.scss";
import Main from "./Main";
import { Link } from "react-router-dom";
import Login from "../../rds-page-login/src/Login/Login";

const App = () => {
  const [themes, setThemes] = useState("light");

  const toggleTheme = (e: any) => {
    if (e.target.checked) {
      setThemes("dark");
    } else {
      setThemes("light");
    }
  };
  document.documentElement.setAttribute("theme", themes);
console.log("session root level ",localStorage.getItem("auth"), localStorage.getItem("token") )
  return (
    <Suspense>
      <Main toggleTheme={toggleTheme}></Main>
      </Suspense>
  );
};

export default App;
