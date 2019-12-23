import React from 'react'
import styled from 'styled-components'

const Winner = styled.div`
margin: 0 auto;
text-align: center;
`
export const WinnerLoser = (props) => {
    return (
        <Winner>
            <h1>{props.correct ? 'Winner!!' : 'Doh! Better luck next time.'}</h1>
        </Winner>
    )
}