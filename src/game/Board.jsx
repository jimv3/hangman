import React from 'react'
import styled from 'styled-components'

const BoardPieces = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0px;
  font-size: 2rem;
`

const Piece = styled.div`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 2.5rem;
  font-size: 2rem;
  font-weight: 400;
  padding: .2rem;
  margin: 0;
  display: inline-block;
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