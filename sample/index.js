//index.js
// importing the react and react-dom package
import React from "react";
import ReactDOM from "react-dom";
import ImageOfBlah from "./images.jpeg"

// JSX element, header
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
    <img src={ImageOfBlah} alt="" />
  </header>
);

// JSX element, main
const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

// JSX element, footer
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
);

const datas= 'some datas'
const blah = (
 <div>
  <p>{datas}</p>
  <img src="{ImageOfBlah}" alt="" />
 </div>
);
// JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {footer}
    {main}
    
    {blah}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(app, rootElement);
// or
//  ReactDOM.render([header, main, footer], rootElement)
