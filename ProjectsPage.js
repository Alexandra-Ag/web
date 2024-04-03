import React, { useState, useEffect } from 'react';
import { FuncionRegistrarpro, FuncionObtenerListaproveedores } from '../js/scriptP';
import { Link, useNavigate } from 'react-router-dom';

function Proveedores() {
    const [id_Productos, setidprod] = useState('');
    const [id_proveedor, setidprov] = useState('');
    const [Nomb, setnom] = useState('');
    const [Marca, setmarca] = useState('');
    const [Forma_farmaceutica, setff] = useState('');
    const [Lote_fabricacion, setlf] = useState('');
    const [Fecha_caducidad, setfc] = useState('');
    const [Precio, setprecio] = useState('');
    const [stock_maximo, setsmax] = useState('');
    const [stock_minimo, setsmin] = useState('');
    const [ListaProveedores, setListaproveedores] = useState([]);
    const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

    useEffect(() => {
        const cargarListaproveedores = async () => {
            try {
                const proveedores = await FuncionObtenerListaproveedores();
                console.log('Respuesta completa del servidor:', proveedores);

                if (proveedores && proveedores.length > 0) {
                    setListaproveedores(proveedores);
                } else {
                    console.warn('La lista de carros está vacía o es nula.');
                }
            } catch (error) {
                console.error('Error al cargar la lista de carros:', error);
            }
        };

        cargarListaproveedores();
    }, []);

    const luicarry = {
        id_Productos: id_Productos,
        id_proveedor: id_proveedor,
        Nomb: Nomb,
        Marca: Marca,
        Forma_farmaceutica: Forma_farmaceutica,
        Lote_fabricacion: Lote_fabricacion,
        Fecha_caducidad: Fecha_caducidad,
        Precio: Precio,
        stock_maximo: stock_maximo,
        stock_minimo: stock_minimo,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Llamada al endpoint de registro
        try {
            await FuncionRegistrarpro(luicarry);
            console.log("Producto registrado correctamente");
            setidprod('');
            setidprov('');
            setnom('');
            setmarca('');
            setff('');
            setlf('');
            setfc('');
            setprecio('');
            setsmax('');
            setsmin('');
            navigate('/tablaspro'); // Utiliza navigate para redireccionar
        } catch (error) {
            console.error('Error al registrar el producto:', error);
        }
    };

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="w-75 bg-dark rounded p-3">
                <form onSubmit={handleSubmit} className="bg-light p-4">
                    <h2 className="mb-4">Productos</h2>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="id" className="form-label">
                Código producto
              </label>
              <input
                type="text"
                id="placa"
                className="form-control"
                placeholder="Ingrese el código"
                value={id_Productos}
                onChange={(e) => setidprod(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="placaCarro">Código proveedor</label>
              <select
                className="form-select"
                value={id_proveedor}
                onChange={(e) => setidprov(e.target.value)}
              >
                <option value="">Seleccionar código del proveedor</option>
                {ListaProveedores && ListaProveedores.length > 0 ? (
                  ListaProveedores.map((proveedores) => (
                    <option key={proveedores._id} value={proveedores._id}>
                      {proveedores.Nomb_proveedor}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    Sin Productos disponibles
                  </option>
                )}
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="nom" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="nom"
                className="form-control"
                placeholder="Poner Nombre del proveedor"
                value={Nomb}
                onChange={(e) => setnom(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="tel" className="form-label">
                Marca
              </label>
              <input
                type="text"
                id="telefono"
                className="form-control"
                placeholder="Poner Marca del proveedor"
                value={Marca}
                onChange={(e) => setmarca(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Forma Farmacéutica
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Poner Forma Farmaceutica del proveedor"
                value={Forma_farmaceutica}
                onChange={(e) => setff(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Lote de fabricación
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Lote de fabricacion del proveedor"
                value={Lote_fabricacion}
                onChange={(e) => setlf(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Fecha de caducidad
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Poner Fecha de Caducidad del proveedor"
                value={Fecha_caducidad}
                onChange={(e) => setfc(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Precio
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Poner Precio del proveedor"
                value={Precio}
                onChange={(e) => setprecio(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Stock Máximo
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Poner Stock Maximo del proveedor"
                value={stock_maximo}
                onChange={(e) => setsmax(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Stock Mínimo
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Poner Stock Minimo del proveedor"
                value={stock_minimo}
                onChange={(e) => setsmin(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <button type="submit" className="btn btn-primary me-2">
                Agregar
              </button>
            </div>
            <div className="col-md-6 mb-3">
              <Link to="/tablaspro" className="btn btn-warning me-2">
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
