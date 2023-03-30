import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import FormsView from "./FormsView/FormsView";

function App (){
  const { id } = useParams();
  return (
    <FormsView id={id}></FormsView>
  );
  
  };
export default App;
