import React from "react";
import Home from "./routes/Home";
import './App.css';
import { HashRouter, Route } from 'react-router-dom'; //라우터 url, 컴포넌트 매칭
import About from './routes/About';
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/movie-detail" component={Detail} />
        </HashRouter>
    );
}

export default App;