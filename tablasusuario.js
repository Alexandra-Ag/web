import React, { useState, useEffect } from 'react';
import { FuncionBuscarUsuario, FuncionEliminarUsuario } from '../js/registro';
import { Link } from "react-router-dom";


function TablaUsuarios() {
  const [usuariosData, setUsuariosData] = useState([]);  // Definir usuariosData como estado

  useEffect(() => {
    // Hacer la solicitud a tu API usando FuncionBuscarUsuario
    FuncionBuscarUsuario()
      .then(data => {
        // Actualizar el estado con los datos de la API
        setUsuariosData(data);
      })
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  const handleDelete = async (usuarioId) => {
    try {
      // Confirmación antes de eliminar el usuario
      const confirmacion = window.confirm("¿Estás seguro de que quieres eliminar este usuario?");
      if (confirmacion) {
        // Realizar la solicitud para eliminar el usuario
        await FuncionEliminarUsuario(usuarioId);

        // Actualizar el estado eliminando el usuario de usuariosData
        setUsuariosData(prevUsuariosData => prevUsuariosData.filter(usuario => usuario._id !== usuarioId));
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error.message);
    }
  };

  return (
      <div>

        <div className="d-flex justify-content-end">
          <Link to="/roles" className="btn btn-outline-info mt-2">Asignar Rol</Link>
        </div>

        <div className="container mt-5">
          <h1 className="mb-4 text-center">Información de Usuarios</h1>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Tipo Documento</th>
                <th>ID de Usuario</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {usuariosData.map((usuario) => (
                <tr key={usuario._id}>
                  <td>{usuario.t_doc}</td>
                  <td>{usuario.id_usuario}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.codigo_Rol}</td>
                  <td>
                    <Link to={`/editarUsu/${usuario._id}`} className="btn btn-success"> Editar</Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(usuario._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <Link to="/usuario" className="btn btn-outline-primary">Atrás</Link>
        </div>
      </div>
    );
    
};

export default TablaUsuarios;
