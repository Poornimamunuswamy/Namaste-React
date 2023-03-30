import React from "react";
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1", { id: "title1" }, "Hello World from React");
const heading2 = React.createElement("h2", { id: "title2" }, "Hello World");
const heading = React.createElement("div",{id:"div_container"},[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
