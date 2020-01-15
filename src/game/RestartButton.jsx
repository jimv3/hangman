import React from 'react'

export const RestartButton = (props) => {
    React.useEffect(
        () => {
            window.addEventListener('keydown', handleKeyDown)
            return () => {
                window.removeEventListener('keydown', handleKeyDown)
            }
        }
    )

    const handleClick = () => {
        restart()
    }

    const handleKeyDown = (ev) => {
        if (ev.key === 'Enter' || ev.keyCode === 32) {
            restart()
        }
    }

    const restart = () => {
        window.location.href = '/'
    }

    return (
        <div className="reset">
            <button type="button" onClick={handleClick} className="button">Restart</button>
        </div>
    );
}
