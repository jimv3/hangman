import React from 'react'
import styled from 'styled-components'

const BoardPieces = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0px;
`

const Piece = styled.div`
  display: inline-block;
  margin: 0px 20px;
`

const determineDisplayChar = (secretWord, correctGuesses) => {
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

export const Board = (props) => {
    return (
        <BoardPieces>
            {determineDisplayChar(props.secretWord, props.correctGuesses).map(
                (l, i) => (
                    <Piece key={'ltr' + i}>{l}</Piece>
                ),
            )}
        </BoardPieces>
    )
}