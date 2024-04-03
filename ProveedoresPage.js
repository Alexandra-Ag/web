import React, { useState } from 'react';
import { FuncionRegistrarprov } from '../js/scriptPR';
import { Link, useNavigate } from 'react-router-dom';

function Proveedores() {
  const [id_proveedores, setidprov] = useState('');
  const [Nomb_proveedor, setnombre] = useState('');
  const [Tel_proveedor, settel] = useState('');
  const [Email_proveedor, setemail] = useState('');
  const navigate = useNavigate();

  const luicarry = {
    id_proveedores: id_proveedores,
    Nomb_proveedor: Nomb_proveedor,
    Tel_proveedor: Tel_proveedor,
    Email_proveedor: Email_proveedor,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmacion = window.confirm("¿Está seguro de agregar este proveedor?");

    if (!confirmacion) {
      console.log("Adición cancelada.");
      return;
    }

    const resultadoRegistro = await FuncionRegistrarprov(luicarry);
    console.log(resultadoRegistro);

    setidprov('');
    setnombre('');
    settel('');
    setemail('');

    // Renderiza la tabla de proveedores después de agregar uno nuevo
    navigate("/tablasprov");
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-dark rounded p-3">
        <form onSubmit={handleSubmit} className="bg-light p-4">
          <h2 className="mb-4">Proveedores</h2>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              Código proveedor
            </label>
            <input
              type="text"
              id="placa"
              className="form-control"
              placeholder="Ingrese el código"
              value={id_proveedores}
              onChange={(e) => setidprov(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Nombre proveedor
            </label>
            <input
              type="text"
              id="nom"
              className="form-control"
              placeholder="Poner Nombre del proveedor"
              value={Nomb_proveedor}
              onChange={(e) => setnombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">
              Teléfono del proveedor
            </label>
            <input
              type="text"
              id="telefono"
              className="form-control"
              placeholder="Poner teléfono del proveedor"
              value={Tel_proveedor}
              onChange={(e) => settel(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email del proveedor
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Poner Email del proveedor"
              value={Email_proveedor}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <button type="submit" className="btn btn-primary me-2">
                Agregar
              </button>
            </div>
            <div className="col-md-6 mb-3">
              <Link to="/tablasprov" className="btn btn-warning me-2">
                Buscar
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Proveedores;

