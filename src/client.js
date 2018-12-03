import React from "react";
import ReactDOM from "react-dom";
import MyForm from "./myform";

const title = "My  React Webpack Babel Setup";

ReactDOM.render(
  <div>
    {title}
    <br />
    <MyForm />
  </div>,
  document.getElementById("app")
);

module.hot.accept();
