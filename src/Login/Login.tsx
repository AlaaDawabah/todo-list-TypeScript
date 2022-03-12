import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Input from '../Input/Input'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control-plaintext" id="email" name="email" />
                    <Input id="email" name="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <Input id="password" value={password} name="password" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>
            </div>
            <Button handleClick={(event) => {
                localStorage.setItem('email', email)
                localStorage.setItem('password', password)
                navigate(`/add-task`)
            }} />
        </form>
    )
}

export default Login