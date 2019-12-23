import React from 'react'
import { render } from 'react-dom'
import { Game } from './game/Game'
import './index.css'

function App() {
    return (
        <div className="App">
            <h1>Hangman</h1>
            <Game />
        </div>
    )
}

render(
    <App />,
    document.getElementById('root')
);