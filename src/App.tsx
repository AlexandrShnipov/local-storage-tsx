import React from 'react';
import './App.css';
import {Counter} from './LocalStorage/LocalStorage';
import {CounterWithHooks} from "./Hooks/Hooks";
import {DoubleCounter} from "./DoubleCounter/DoubleCounter";

function App() {
    return (
        <div className="App">
            <Counter title={'Counter LocalStorage'}/>
            <CounterWithHooks title={'Counter LocalStorage WithHooks'}/>
            <DoubleCounter title = {'Counter LocalStorage DoubleCounter'}/>
        </div>
    );
}

export default App;
