import React from 'react'
import styled from 'styled-components'

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
