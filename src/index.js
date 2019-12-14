import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class RestartButton extends React.Component {
    restart(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    }

    render() {
        return (
            <button type="button" onClick={this.restart.bind(this)}>Restart</button>
        );
    }
}
class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            letter: props.letter,
            handleClick: props.clicked,
        };
    }

    render() {
        return (
            <p className="button" onClick={this.state.handleClick.bind(this)}>{this.state.letter}</p>
        );
    }
}

class Gallows extends React.Component {
    constructor(props) {
        super(props);
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
        };
    }
    
    render() {
        return (
            <div className="gallows">
                <pre>
                    {this.state.hangmanPics[0]}
                </pre>
            </div>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            letters: props.letters,
        };
    }

    render() {
        return (
            <div className="board">
                {this.state.letters.map(l => <p className="letter">{l}</p>)}
            </div>
        );
    }
}

class Keyboard extends React.Component {
    keyboardClick(e) {
        alert(e.state.letter);
    }

    render() {
        return (
            <div>
                <div className="keyboard-row">
                    {'q w e r t y u i o p'.split(' ').map(letter => <Key letter={letter.toUpperCase()} clicked={this.keyboardClick} />)}
                </div>
                <div className="keyboard-row">
                    {'a s d f g h j k l'.split(' ').map(letter => <Key letter={letter.toUpperCase()} clicked={this.keyboardClick} />)}
                </div>
                <div className="keyboard-row">
                    {'z x c v b n m'.split(' ').map(letter => <Key letter={letter.toUpperCase()} clicked={this.keyboardClick} />)}
                </div>
            </div>
        );
    }
}

function getWord() {
    let letters = [];
    for (let i = 0; i < Math.floor(Math.random() * 11) + 3; i++) {
        letters.push('_');
    }

    return letters;
}

class Game extends React.Component {
    render() {
        return (
            <div>
                <Gallows />
                <Board letters={getWord()} />
                <Keyboard />
                <RestartButton />
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);