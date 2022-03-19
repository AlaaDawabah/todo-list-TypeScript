import React from 'react'

type ButtonProps = {
    text: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    className?: string
}
const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.handleClick} className={`btn btn-primary ${props?.className}`}>{props.text}</button>
    )
}

export default Button