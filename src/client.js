import React from "react";
import ReactDOM from "react-dom";
import MyForm from "./myform";

const title = "My  React Webpack Babel Setup";

ReactDOM.render(
  <div>
    <a href="http://google.com" target="_blank">
      Google is good for you
    </a>
    {title}
    <br />
    <MyForm />
  </div>,
  document.getElementById("app")
);

module.hot.accept();
