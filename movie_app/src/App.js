import React from "react";
import Home from "./routes/Home";
import './App.css';
import { HashRouter, Route } from 'react-router-dom'; //라우터 url, 컴포넌트 매칭
import About from './routes/About';

function App() {
    return (
        <HashRouter>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
        </HashRouter>
    );
}

export default App;