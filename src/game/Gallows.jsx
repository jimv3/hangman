import React from 'react'

const hangmanPics = [' +---+\n     |\n     |\n     |\n     ===',
    ' +---+\n O   |\n     |\n     |\n     ===',
    ' +---+\n O   |\n |   |\n     |\n     ===',
    ' +---+\n O   |\n/|   |\n     |\n     ===',
    ' +---+\n O   |\n/|\\  |\n     |\n     ===',
    ' +---+\n O   |\n/|\\  |\n/    |\n     ===',
    ' +---+\n O   |\n/|\\  |\n/ \\  |\n     ===',
    ' +---+\n[O   |\n/|\\  |\n/ \\  |\n     ===',
    ' +---+\n[O]  |\n/|\\  |\n/ \\  |\n     ===']

export const Gallows = (props) => {
    return (
        <div className="gallows">
            <pre>
                {hangmanPics[props.misses]}
            </pre>
        </div>
    )
}
