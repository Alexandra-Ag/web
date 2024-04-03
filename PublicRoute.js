import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

const PublicteRoute = ({ element }) => {
  const { isLogged } = useAuth(); // Usar el usuario autenticado desde el contexto

  if (isLogged()) { // Verificar si el usuario está autenticado
    return <Navigate to={routes.projects} />;
  }

  return (
    <>
      {element}
      <Outlet />
    </>
  );
};

export default PublicteRoute;
