import * as React from 'react'
import { KeyButton } from './KeyButton'

const createKeys = (letters) => {
    console.log(`creating row for ${letters}`)
    return letters.split('').map(l => {
        return {
            letter: l,
            enabled: true,
            keyState: 'unclicked',
        }
    })
}

const allKeys = createKeys('qwertyuiopasdfghjklzxcvbnm')

export const Keyboard = (props) => {
    const { onKeyClick } = props
    const [keys, setKeys] = React.useState(allKeys)
    const topKeys = keys.filter(k => 'qwertyuiop'.indexOf(k.letter) >= 0)
    const middleKeys = keys.filter(k => 'asdfghjkl'.indexOf(k.letter) >= 0)
    const bottomKeys = keys.filter(k => 'zxcvbnm'.indexOf(k.letter) >= 0)

    const handleKeyClick = (letter) => {
        const _keys = [...keys]
        const key = _keys.find(k => k.letter === letter)
        if (key) {
            console.log(letter)
            key.enabled = false
            key.keyState = onKeyClick(letter) ? 'correct' : 'wrong'
        }
        setKeys(_keys)
    }

    return (
        <div>
            <div>
                {topKeys.map(k => (
                    <KeyButton
                        key={`KeyBoardLetter${k.letter}${
                            k.enabled ? 'enabeld' : 'disabled'
                            }`}
                        action={handleKeyClick}
                        {...k}
                    />
                ))}
            </div>
            <div>
                {middleKeys.map(k => (
                    <KeyButton
                        key={`KeyBoardLetter${k.letter}${
                            k.enabled ? 'enabeld' : 'disabled'
                            }`}
                        action={handleKeyClick}
                        {...k}
                    />
                ))}
            </div>
            <div>
                {bottomKeys.map(k => (
                    <KeyButton
                        key={`KeyBoardLetter${k.letter}${
                            k.enabled ? 'enabeld' : 'disabled'
                            }`}
                        action={handleKeyClick}
                        {...k}
                    />
                ))}
            </div>
        </div>
    )
}
