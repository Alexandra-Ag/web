import React, { useState, useEffect } from 'react';
import { FuncionRegistrarUsuario, FuncionObtenerListatipoDocumento } from '../js/registro';
import { Link } from 'react-router-dom';

function Usuario() {
  const [t_doc, settd] = useState('');
  const [id_usuario, setusu] = useState('');
  const [nombre, setnom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpass] = useState('');
  const [rol, setrol] = useState('');
  const [ListaTipoDocumento, setListaTipoDocumento] = useState([]);

  useEffect(() => {
    const cargarListaTipoDocumento = async () => {
      try {
        const tipoDocumento = await FuncionObtenerListatipoDocumento();
        console.log('Respuesta completa del servidor:', tipoDocumento);

        if (tipoDocumento && tipoDocumento.length > 0) {
          setListaTipoDocumento(tipoDocumento);
        } else {
          console.warn('La lista de carros está vacía o es nula.');
        }
      } catch (error) {
        console.error('Error al cargar la lista de carros:', error);
      }
    };

    cargarListaTipoDocumento();
  }, []);

  const infousuario = {
    t_doc: t_doc,
    id_usuario: id_usuario,
    nombre: nombre,
    email: email,
    password: password,
    rol: rol,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llamada al endpoint de registro
    const resultadoRegistro = await FuncionRegistrarUsuario(infousuario);
    console.log(resultadoRegistro);

    settd('');
    setusu('');
    setnom('');
    setEmail('');
    setpass('');
    setrol('');
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-dark rounded p-3">
        <form onSubmit={handleSubmit} className="bg-light p-4">
          <h2 className="mb-4">Registrarse</h2>
          <div className="mb-2">
            <label htmlFor="placaCarro">Tipo de Documento</label>
            <select
              className="form-select"
              value={t_doc}
              onChange={(e) => settd(e.target.value)}
            >
              <option value="">Seleccionar tipo de documento</option>
              {ListaTipoDocumento && ListaTipoDocumento.length > 0 ? (
                ListaTipoDocumento.map((tipoDocumento) => (
                  <option key={tipoDocumento._id} value={tipoDocumento._id}>
                    {tipoDocumento.t_doc}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  Sin tipos de documento disponibles
                </option>
              )}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Numero de documento
            </label>
            <input
              type="text"
              id="nom"
              className="form-control"
              placeholder="Ingrese numero de documento"
              value={id_usuario}
              onChange={(e) => setusu(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="Nombre"
              className="form-control"
              placeholder="Ingrese Nombre"
              value={nombre}
              onChange={(e) => setnom(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Ingrese Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              className="form-control"
              placeholder="Ingrese contraseña"
              value={password}
              onChange={(e) => setpass(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Rol Usuario
            </label>
            <input
              type="rol"
              id="rol"
              className="form-control"
              placeholder="Asignar Rol"
              value={rol}
              onChange={(e) => setrol(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg me-2">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Usuario;
