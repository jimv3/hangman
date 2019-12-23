import * as React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import classnames from 'classnames'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: 45,
            height: 35,
            color: 'white',
            borderRadius: 8,

            margin: 2,
            textTransform: 'uppercase',
            fontSize: 16,
        },
        unclicked: {
            backgroundColor: 'blue',
        },
        correct: {
            backgroundColor: 'green',
        },
        wrong: {
            backgroundColor: 'red',
        },
    }),
)

export const KeyButton = (props) => {
    const { enabled, letter, keyState, action } = props
    const classes = useStyles({})

    const className = classnames(classes.root, classes[keyState])

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    })

    const handleKeyDown = (ev) => {
        if (ev.key === letter.toLowerCase()) chooseLetter()
    }

    const chooseLetter = () => {
        if (action && enabled) action(letter)
    }

    return (
        <button className={className} onClick={chooseLetter}>
            {letter}
        </button>
    )
}
