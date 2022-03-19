import { Navigate, useLocation } from 'react-router-dom'
import Authentication from './Authentication'

export type ProtectedRoutesProps = {
    children: JSX.Element
}
const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {

    const location = useLocation()
    return (
        Authentication() && location.pathname.includes("login") ? <Navigate to="/list" /> : children
    )
}

export default ProtectedRoutes