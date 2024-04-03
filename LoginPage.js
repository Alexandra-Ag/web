import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from './fetchLogin';
import useAuth from '../auth/useAuth';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [id_usuario, setid_usuario] = useState('');
  const [password, setpassword] = useState('');
  const [redirectLocation, setRedirectLocation] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectLocation || '/proveedores');
    }
  }, [isAuthenticated, redirectLocation, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    const userCredentials = { id_usuario, password };
    const result = await Login(userCredentials);
    if (result) login(userCredentials, window.location.pathname);
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">FORMULARIO</div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="NumeroDocuemnto" className="form-label">
                  Número de Documento:
                </label>
                <input
                  type="text"
                  required
                  id="NumeroDocuemnto"
                  className="form-control"
                  value={id_usuario}
                  onChange={(e) => setid_usuario(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Contraseña" className="form-label">
                Contraseña:
                </label>
                <input
                  type="password"
                  required
                  id="Contraseña"
                  className="form-control"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
                <div className="mb-3 d-grid gap-2">

                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                  <button type="button" className="btn btn-secondary" onClick={handleRegister}>
                    Registrarse
                  </button>
                  <Link to="/recuperar" type="button" className="btn btn-warning">¿Olvido Su Contraseña?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
    
    


