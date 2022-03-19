import { Navigate } from 'react-router-dom'
import Authentication from './Authentication';

export type PrivateRoutesProps = {
    children: JSX.Element
}
const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
    return Authentication() ? children : <Navigate to="/login" />;

}

export default PrivateRoutes