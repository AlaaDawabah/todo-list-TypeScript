import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Button/Button'
import Authentication from '../../utils/Authentication'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                {Authentication() &&
                    <Button text="Logout" handleClick={() => {
                        localStorage.clear()
                        navigate(`/login`)
                    }} />}
            </div>
        </nav>
    )
}

export default NavBar