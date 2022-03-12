import React from 'react'

type InputProps = {
    id: string,
    name: string,
    value: string,
    // value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = (props: InputProps) => {
    return (
        <input type="text" onChange={props.onChange} />
    )
}

export default Input