import React from "react";
import ReactDOM from "react-dom";
import MyForm from "./myform";
import PartsList from "./partslist";

const title = "My  React Webpack Babel Setup";

ReactDOM.render(
  <div>
    <h1> circuito.io Component Editor</h1>
    <PartsList />
    <br />
    <MyForm />
  </div>,
  document.getElementById("app")
);

module.hot.accept();
