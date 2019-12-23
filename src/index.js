import React from 'react'
import { render } from 'react-dom'
import { Game } from './game/Game'
import './index.css'

function App() {
    return (
        <div className="App">
            <h1 className="banner">Hangman</h1>
            <Game />
        </div>
    )
}

render(
    <App />,
    document.getElementById('root')
);