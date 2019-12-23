import * as React from 'react'

import { RestartButton } from './RestartButton'
import { Keyboard } from './Keyboard'
import { Gallows } from './Gallows'
import { Board } from './Board'
import { getWord } from './getWord'
import { WinnerLoser } from './WinnerLoser'

export const Game = () => {
    const [secretWord] = React.useState(getWord())
    const [correctGuesses, setCorrectGuesses] = React.useState([])
    const [misses, setMisses] = React.useState(0)
    const [gameOver, setGameOver] = React.useState(false)

    const handleKeyClick = (letter) => {
        if (secretWord.indexOf(letter) >= 0) {
            const correct = [...correctGuesses]
            correct.push(letter)
            setCorrectGuesses(correct)
            return true
        } else {
            setMisses(misses + 1)
            console.log(misses)
            return false
        }
    }

    React.useEffect(() => {
        setGameOver(misses === 8 || isSolved(secretWord, correctGuesses))
    }, [misses, correctGuesses, secretWord])

    return (
        <div>
            {gameOver ? (
                <>
                    <Gallows misses={misses} />
                    <Board
                        secretWord={secretWord}
                        correctGuesses={secretWord.split('')}
                    />
                    <WinnerLoser correct={misses < 8} />
                    <RestartButton />
                </>
            ) : (
                    <>
                        <Gallows misses={misses} />
                        <Board secretWord={secretWord} correctGuesses={correctGuesses} />
                        <Keyboard onKeyClick={handleKeyClick} />
                    </>
                )}
        </div>
    )
}

const isSolved = (secretWord, guesses) => {
    for (let i = 0; i < secretWord.length; i++)
        if (guesses.indexOf(secretWord[i]) < 0) return false
    return true
}
