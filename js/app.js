import React, {Component} from "react";
import ReactDOM from "react-dom";
import PhotoDisplay from "./PhotoDisplay";

const App = () => {
    return (
    <>
        <header className="header">Recruitment task for Higher by Grzegorz Sikora</header>
        <PhotoDisplay/>
        <footer className="footer">Contact me: <a href="mailto: grzegorzsikoramail@gmail.com"> grzegorzsikoramail@gmail.com</a> </footer>
    </>
)};


ReactDOM.render(<App/>, document.getElementById("app"));