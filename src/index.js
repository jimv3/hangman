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
            window.location.href = 'index.html';
        }
    }

    componentDidMount() {
        document.addEventListener("keypress", this.keyPressed);
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.keyPressed);
    }

    restart(e) {
        e.preventDefault();
        window.location.href = 'index.html';
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

    componentDidMount() {
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
                    {'q w e r t y u i o p'.split(' ').map(letter => <Key key={'key' + letter} kind={this.state.classes[letter.charCodeAt(0) - 97][0]} enabled={this.state.classes[letter.charCodeAt(0) - 97][1]} letter={letter} action={this.keyClicked} />)}
                </div>
                <div className="keyboard-row">
                    {'a s d f g h j k l'.split(' ').map(letter => <Key key={'key' + letter} kind={this.state.classes[letter.charCodeAt(0) - 97][0]} enabled={this.state.classes[letter.charCodeAt(0) - 97][1]} letter={letter} action={this.keyClicked} />)}
                </div>
                <div className="keyboard-row">
                    {'z x c v b n m'.split(' ').map(letter => <Key key={'key' + letter} kind={this.state.classes[letter.charCodeAt(0) - 97][0]} enabled={this.state.classes[letter.charCodeAt(0) - 97][1]} letter={letter} action={this.keyClicked} />)}
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
                {this.determineDisplayChar(this.props.secretWord, this.props.correctGuesses).map((l, i) => <p key={'ltr' + i} className="letter">{l}</p>)}
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
    let words = ['aardvark',
        'address',
        'adore',
        'airplane',
        'alarm',
        'album',
        'amber',
        'animal',
        'animosity',
        'answer',
        'ant',
        'antelope',
        'anxious',
        'apple',
        'armadillo',
        'automobile',
        'avalanche',
        'awesome',
        'baboon',
        'baby',
        'badger',
        'ball',
        'banana',
        'band',
        'bandage',
        'bandana',
        'barn',
        'bat',
        'batch',
        'bath',
        'bear',
        'beautiful',
        'beaver',
        'beige',
        'believe',
        'bend',
        'bible',
        'billion',
        'black',
        'blackberry',
        'blob',
        'block',
        'blue',
        'blueberry',
        'blur',
        'boar',
        'boat',
        'book',
        'bore',
        'boulder',
        'bounce',
        'bowl',
        'boy',
        'bracelet',
        'brick',
        'brother',
        'brown',
        'build',
        'building',
        'bump',
        'burgundy',
        'burp',
        'cage',
        'cake',
        'call',
        'camel',
        'canister',
        'canteloupe',
        'car',
        'carpet',
        'cash',
        'castle',
        'cat',
        'chair',
        'challenge',
        'charm',
        'chartreuse',
        'chat',
        'chief',
        'child',
        'chimpanzee',
        'church',
        'cinnamon',
        'clam',
        'cobra',
        'code',
        'cohort',
        'college',
        'computer',
        'concept',
        'convey',
        'conveyor',
        'convict',
        'coop',
        'cooperate',
        'cop',
        'corn',
        'cougar',
        'cousin',
        'cowboy',
        'cowgirl',
        'coyote',
        'crab',
        'critter',
        'crow',
        'crowd',
        'crutch',
        'cute',
        'cyan',
        'dance',
        'danger',
        'deer',
        'despise',
        'dinner',
        'dog',
        'dolphin',
        'donkey',
        'dove',
        'duck',
        'eager',
        'eagle',
        'eclectic',
        'egg',
        'ego',
        'electric',
        'elegant',
        'elephant',
        'elk',
        'embrace',
        'enemy',
        'energetic',
        'energy',
        'engage',
        'engine',
        'enigma',
        'entice',
        'evade',
        'extra',
        'extravagant',
        'farm',
        'farmer',
        'father',
        'ferret',
        'fever',
        'fiction',
        'file',
        'fire',
        'fireplace',
        'first',
        'fish',
        'football',
        'forge',
        'forget',
        'fowl',
        'fox',
        'frog',
        'function',
        'funny',
        'game',
        'garden',
        'gift',
        'girl',
        'globe',
        'glove',
        'goat',
        'gold',
        'goose',
        'gorilla',
        'grandfather',
        'grandmother',
        'gray',
        'green',
        'guitar',
        'gymnasium',
        'hair',
        'hall',
        'handsome',
        'harm',
        'harmony',
        'hawk',
        'heart',
        'help',
        'hero',
        'hill',
        'hold',
        'holiday',
        'home',
        'hop',
        'hope',
        'horse',
        'house',
        'humor',
        'humorous',
        'hump',
        'indigo',
        'infant',
        'injury',
        'insult',
        'jack',
        'jam',
        'jar',
        'jaw',
        'jewel',
        'jump',
        'junction',
        'jungle',
        'junior',
        'junk',
        'jury',
        'kangaroo',
        'laboratory',
        'lake',
        'lame',
        'lane',
        'laptop',
        'large',
        'last',
        'late',
        'later',
        'latest',
        'lavender',
        'lawn',
        'lazy',
        'leader',
        'ledger',
        'lemon',
        'lender',
        'letter',
        'lilac',
        'lion',
        'lizard',
        'llama',
        'lobster',
        'lonely',
        'lost',
        'lotion',
        'love',
        'lump',
        'magenta',
        'mail',
        'mailbox',
        'mallet',
        'man',
        'mansion',
        'maroon',
        'mauve',
        'maze',
        'meal',
        'meat',
        'meet',
        'meeting',
        'megaphone',
        'melon',
        'methane',
        'method',
        'middle',
        'mild',
        'mile',
        'million',
        'mistake',
        'mob',
        'mole',
        'monkey',
        'monopoly',
        'monsoon',
        'monster',
        'moose',
        'mother',
        'mountain',
        'mouse',
        'movie',
        'mule',
        'mullet',
        'music',
        'napkin',
        'necklace',
        'newt',
        'note',
        'oath',
        'obvious',
        'ocean',
        'office',
        'often',
        'old',
        'omen',
        'only',
        'orange',
        'orangutan',
        'orca',
        'organ',
        'otter',
        'owl',
        'oyster',
        'package',
        'pail',
        'palace',
        'pale',
        'pallet',
        'palm',
        'panda',
        'pants',
        'paper',
        'park',
        'parrot',
        'peace',
        'peanut',
        'pen',
        'pencil',
        'penguin',
        'pension',
        'perch',
        'person',
        'phone',
        'pie',
        'piece',
        'pig',
        'pigeon',
        'pimple',
        'pink',
        'pizza',
        'plain',
        'plan',
        'plane',
        'plank',
        'point',
        'police',
        'pond',
        'porch',
        'powder',
        'power',
        'present',
        'president',
        'pretty',
        'principal',
        'prison',
        'professional',
        'professor',
        'prom',
        'promise',
        'propane',
        'proper',
        'purple',
        'push',
        'python',
        'question',
        'rabbit',
        'radar',
        'ram',
        'rat',
        'ratio',
        'ration',
        'raven',
        'record',
        'red',
        'rhino',
        'ring',
        'rise',
        'risk',
        'river',
        'road',
        'rug',
        'rythm',
        'saddle',
        'salamander',
        'salmon',
        'school',
        'science',
        'scoop',
        'seal',
        'seat',
        'seldom',
        'senior',
        'shark',
        'sheep',
        'short',
        'show',
        'shrimp',
        'shrink',
        'signal',
        'silver',
        'sister',
        'ski',
        'skunk',
        'sky',
        'sloth',
        'small',
        'smile',
        'snake',
        'snow',
        'soccer',
        'song',
        'sour',
        'speak',
        'speech',
        'spider',
        'squirrel',
        'stoop',
        'stork',
        'strawberry',
        'swan',
        'swim',
        'symbol',
        'symbolic',
        'table',
        'tall',
        'tan',
        'taupe',
        'teacher',
        'teal',
        'television',
        'thief',
        'tiger',
        'timer',
        'toad',
        'toilet',
        'top',
        'toy',
        'traffic',
        'trail',
        'train',
        'trapeze',
        'trial',
        'trout',
        'truck',
        'turkey',
        'turtle',
        'umbrella',
        'university',
        'unless',
        'until',
        'unusual',
        'usual',
        'vagabond',
        'vagrant',
        'valiant',
        'vegetable',
        'vehicle',
        'vigorous',
        'violet',
        'virtual',
        'virtue',
        'virtuous',
        'volume',
        'wagon',
        'wall',
        'wallet',
        'warm',
        'watermelon',
        'weasel',
        'whale',
        'wheel',
        'when',
        'whether',
        'which',
        'white',
        'wise',
        'with',
        'wolf',
        'woman',
        'wombat',
        'word',
        'yellow',
        'young',
        'zebra',
        'zoo'];
    return words[Math.floor(Math.random() * words.length)];
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.guessMade = this.guessMade.bind(this);
        this.state = {
            secretWord: getWord(),
            misses: 0,
            correctGuesses: [],
        }
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
                    <RestartButton />
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