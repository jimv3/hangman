import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class RestartButton extends React.Component {
    constructor(props) {
        super(props);
        this.keyPressed = this.keyPressed.bind(this)
    }

    keyPressed(event) {
        if (event.keyCode === 13) {
            this.props.action();
            //window.location.href = 'index.html';
        }
    }

    componentWillMount() {
        document.addEventListener("keypress", this.keyPressed);
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.keyPressed);
    }

    restart(e) {
        e.preventDefault();
        // window.location.href = 'index.html';
        this.props.action();
    }

    render() {
        return (
            <div className="reset">
                <button type="button" onClick={this.restart.bind(this)} className="button">Restart</button>
            </div>
        );
    }
}

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.keyPressed = this.keyPressed.bind(this);
    }

    keyPressed(event) {
        let guess = String.fromCharCode(event.charCode).toLowerCase();
        if (this.props.enabled && this.props.letter === guess) {
            this.props.action(this);
        }
    }

    componentWillMount() {
        document.addEventListener("keypress", this.keyPressed);
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.keyPressed);
    }

    keyClicked() {
        if (this.props.enabled)
            this.props.action(this);
    }

    render() {
        return (
            <p className={this.props.kind} onClick={this.keyClicked.bind(this)}>{this.props.letter}</p>
        );
    }
}

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.keyClicked = this.keyClicked.bind(this);
        var defaultClasses = [];
        for (let i = 0; i < 26; i++) {
            defaultClasses[i] = ["button", true];
        }
        this.state = {
            classes: defaultClasses,
        }
    }

    keyClicked(key) {
        if (key) {
            let g = this.state.classes;
            let guess = key.props.letter;
            let i = guess.charCodeAt(0) - 97;
            let newClass = "button";
            if (this.props.action(key.props.letter))
                newClass += " button-correct";
            else
                newClass += " button-wrong";
            g[i] = [newClass, false];
            this.setState({ classes: g });
        }
    }

    render() {
        return (
            <div>
                <div className="keyboard-row">
                    {'q w e r t y u i o p'.split(' ').map(letter => <Key kind={this.state.classes[letter.charCodeAt(0) - 97][0]} enabled={this.state.classes[letter.charCodeAt(0) - 97][1]} letter={letter} action={this.keyClicked} />)}
                </div>
                <div className="keyboard-row">
                    {'a s d f g h j k l'.split(' ').map(letter => <Key kind={this.state.classes[letter.charCodeAt(0) - 97][0]} enabled={this.state.classes[letter.charCodeAt(0) - 97][1]} letter={letter} action={this.keyClicked} />)}
                </div>
                <div className="keyboard-row">
                    {'z x c v b n m'.split(' ').map(letter => <Key kind={this.state.classes[letter.charCodeAt(0) - 97][0]} enabled={this.state.classes[letter.charCodeAt(0) - 97][1]} letter={letter} action={this.keyClicked} />)}
                </div>
            </div>
        );
    }
}

class Gallows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hangmanPics: [' +---+\n     |\n     |\n     |\n     ===',
                ' +---+\n O   |\n     |\n     |\n     ===',
                ' +---+\n O   |\n |   |\n     |\n     ===',
                ' +---+\n O   |\n/|   |\n     |\n     ===',
                ' +---+\n O   |\n/|\\  |\n     |\n     ===',
                ' +---+\n O   |\n/|\\  |\n/    |\n     ===',
                ' +---+\n O   |\n/|\\  |\n/ \\  |\n     ===',
                ' +---+\n[O   |\n/|\\  |\n/ \\  |\n     ===',
                ' +---+\n[O]  |\n/|\\  |\n/ \\  |\n     ==='],
        };
    }

    render() {
        return (
            <div className="gallows">
                <pre>
                    {this.state.hangmanPics[this.props.misses]}
                </pre>
            </div>
        );
    }
}

class Board extends React.Component {
    determineDisplayChar(secretWord, correctGuesses) {
        let letters = [];
        for (let i = 0; i < secretWord.length; i++) {
            if (correctGuesses.indexOf(secretWord[i]) >= 0) {
                letters.push(secretWord[i]);
            } else {
                letters.push('_');
            }
        }
        return letters;
    }

    render() {
        return (
            <div className="board">
                {this.determineDisplayChar(this.props.secretWord, this.props.correctGuesses).map(l => <p className="letter">{l}</p>)}
            </div>
        );
    }
}

class WinnerLoser extends React.Component {
    render() {
        return (
            <div className="winner-loser">
                <h1>{this.props.correct ? "Winner!" : "Doh! Better luck next time."}</h1>
            </div>
        );
    }
}

function getWord() {
    let words = ('ant baboon badger bat bear beaver camel cat clam cobra cougar coyote crow deer dog donkey duck ' +
        'eagle ferret fox frog goat goose hawk lion lizard llama mole monkey moose mouse mule newt ' +
        'otter owl panda parrot pigeon python rabbit ram rat raven rhino salmon seal shark sheep ' +
        'skunk sloth snake spider stork swan tiger toad trout turkey turtle weasel whale wolf wombat zebra ' +
        'shrimp lobster crab fish squirrel elk dove dolphin orca penguin ' +
        'amsterdam asheville athens atlanta birmingham chattanooga huntsville knoxville memphis nashville ' +
        'tallahassee topeka chicago denver boulder flagstaff missoula detroit indianapolis boston tampa miami orlando ' +
        'omaha seattle portland murfreesboro shelbyville smyrna lavergne hendersonville gallatin lebanon watertown ' +
        'gainsville jacksonville hershey pittsburgh lewisburg cornersville bucksnort columbia cincinnati ' +
        'daytona destin lexington albany london paris sacramento phoenix bozeman cheyenne montreal tokyo ' +
        'moscow vienna juneau anchorage vancouver philadelphia austin houston dallas helsinki cancun honolulu ' +
        'hartsville jackson louisville ' +
        'blue brown amber orange red yellow green purple indigo cyan magenta black white lavender mauve ' +
        'lilac tan beige teal pink gray violet taupe maroon burgundy chartreuse').split(' ');
    return words[Math.floor(Math.random() * words.length)];
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.newGame = this.newGame.bind(this);
        this.guessMade = this.guessMade.bind(this);
        this.state = {
            secretWord: getWord(),
            misses: 0,
            correctGuesses: [],
        }
    }

    newGame() {
        this.setState({
            secretWord: getWord(),
            misses: 0,
            correctGuesses: [],
        });
    }

    guessMade(guess) {
        if (this.state.secretWord.indexOf(guess) < 0) {
            this.setState({
                misses: this.state.misses + 1,
                correctGuesses: this.state.correctGuesses,
            });
            return false;
        }
        else {
            let correctGuesses = this.state.correctGuesses;
            correctGuesses.push(guess);
            this.setState({
                misses: this.state.misses,
                correctGuesses: correctGuesses,
            });
            return true;
        }
    }

    render() {
        if (this.state.misses === 8 || gameOver(this.state.secretWord, this.state.correctGuesses)) {
            return (
                <div>
                    <Gallows misses={this.state.misses} />
                    <Board correctGuesses={this.state.secretWord.split('')} secretWord={this.state.secretWord} />
                    <RestartButton action={this.newGame} />
                    <WinnerLoser correct={this.state.misses < 8} />
                </div>
            );
        }
        return (
            <div>
                <Gallows misses={this.state.misses} />
                <Board correctGuesses={this.state.correctGuesses} secretWord={this.state.secretWord} />
                <Keyboard action={this.guessMade} />
            </div>
        );
    }
}

function gameOver(secretWord, guesses) {
    for (let i = 0; i < secretWord.length; i++)
        if (guesses.indexOf(secretWord[i]) < 0)
            return false;
    return true;
}
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);