import React from 'react'

export type InputProps = {
    id: string,
    name: string,
    value: string,
    placeholder?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = (props: InputProps) => {
    return (
        <input type="text" onChange={props.onChange} className='w-100' placeholder={props?.placeholder} />
    )
}

export default Input