import React, { useState, useEffect } from 'react';
import { FuncionBuscarprov, FuncionEliminarprov } from '../js/scriptPR';
import { Link } from "react-router-dom";

function Tablaprov() {
  const [provData, setprovData] = useState([]);

  useEffect(() => {
    FuncionBuscarprov()
      .then(data => {
        setprovData(data);
      })
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  const handleDelete = async (proveedoresId) => {
    const confirmacion = window.confirm("¿Está seguro de eliminar este proveedor?");

    if (!confirmacion) {
      console.log("Eliminación cancelada.");
      return;
    }

    try {
      await FuncionEliminarprov(proveedoresId);
      setprovData(prevprovData => prevprovData.filter(prov => prov._id !== proveedoresId));
    } catch (error) {
      console.error('Error al eliminar proveedor:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Información del proveedor</h1>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>codigo proveedor</th>
            <th>Nomb_proveedor</th>
            <th>Tel_proveedor</th>
            <th>Email_proveedor</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {provData.map((prov) => (
            <tr key={prov._id}>
              <td>{prov.id_proveedores}</td>
              <td>{prov.Nomb_proveedor}</td>
              <td>{prov.Tel_proveedor}</td>
              <td>{prov.Email_proveedor}</td>
              <td>
                <Link to={`/editarprov/${prov._id}`} className="btn btn-success">Editar</Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(prov._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <td>
        <Link to="/proveedores" className="btn btn-outline-primary">Atrás</Link>
      </td>
    </div>
  );
};

export default Tablaprov;

