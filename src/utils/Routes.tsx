import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import AddTask from '../pages/task/AddTask'
import List from '../pages/task/List'
import PrivateRoutes from './PrivateRoutes'
import ProtectedRoutes from './ProtectedRoutes'

const RoutesComp = () => {
    return (
        <div className='my-5'>
            <Routes>
                <Route
                    path={`/login`}
                    element={<ProtectedRoutes><Login /></ProtectedRoutes>}
                />
                <Route
                    path="/list"
                    element={
                        <PrivateRoutes>
                            <List />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/add-task"
                    element={
                        <PrivateRoutes>
                            <AddTask />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/edit-task/:id"
                    element={
                        <PrivateRoutes>
                            <AddTask />
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </div>
    )
}

export default RoutesComp