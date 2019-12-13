import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Key extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            letter: props.letter,
            clicked: false,
        }
    }
    render() {
        return (
            <p className="button">{this.state.letter}</p>
        );
    }
}

class Gallows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hangmanPics: [' +---+\n     |\n     |\n     |\n   ===',
                ' +---+\n O   |\n     |\n     |\n   ===',
                ' +---+\n O   |\n |   |\n     |\n   ===',
                ' +---+\n O   |\n/|   |\n     |\n   ===',
                ' +---+\n O   |\n/|\\  |\n     |\n   ===',
                ' +---+\n O   |\n/|\\  |\n/    |\n   ===',
                ' +---+\n O   |\n/|\\  |\n/ \\  |\n   ===',
                ' +---+\n[O   |\n/|\\  |\n/ \\  |\n   ===',
                ' +---+\n[O]  |\n/|\\  |\n/ \\  |\n   ==='],
        }
    }
    render() {
        return (
            <div className="gallows">
                <pre>
                    {this.state.hangmanPics[8]}
                </pre>
            </div>
        )
    }
}

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <p className="letter">b</p> <p className="letter">l</p> <p className="letter">_</p> <p className="letter">c</p> <p className="letter">k</p>
            </div>
        );
    }
}

class Keyboard extends React.Component {
    render() {
        return (
            <div>
                <div className="keyboard-row">
                    {'q w e r t y u i o p'.split(' ').map(letter => <Key letter={letter.toUpperCase()} />)}
                </div>
                <div className="keyboard-row">
                    {'a s d f g h j k l'.split(' ').map(letter => <Key letter={letter.toUpperCase()} />)}
                </div>
                <div className="keyboard-row">
                    {'z x c v b n m'.split(' ').map(letter => <Key letter={letter.toUpperCase()} />)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div>
                <Gallows />
                <Board />
                <Keyboard />
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);