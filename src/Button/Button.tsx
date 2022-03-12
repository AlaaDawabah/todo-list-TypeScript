import React from 'react'

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.handleClick}>Login</button>
    )
}

export default Button