import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  const { isLogged } = useAuth();

  if (!isLogged()) {
    navigate(routes.login); // Redirige al usuario a la página de inicio de sesión
    return null; // No renderiza nada
  }

  return element; // Renderiza el contenido de la ruta protegida
};

export default PrivateRoute;
