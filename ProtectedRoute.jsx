import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({
    canActivate,
    redirecPath = '/'
}) => {
    if(!canActivate) {
        return <Navigate to={redirecPath} replace />

    }
    return <Outlet />;
        
  


}

export default ProtectedRoute