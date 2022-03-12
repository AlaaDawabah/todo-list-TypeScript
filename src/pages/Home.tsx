import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar/NavBar'
import Login from '../Login/Login'

const Home = () => {
    return (
        <Container>
            <NavBar />
            <Login />
        </Container>
    )
}

export default Home