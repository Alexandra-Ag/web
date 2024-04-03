import React, { useState, useEffect } from 'react';
import { FuncionBuscarproductos2, FuncionEliminarproductos2 } from '../js/scriptP';
import { Link } from "react-router-dom";

function Tablaproductos() {
    const [prodData, setprovData] = useState([]); // Definir carData como estado

    useEffect(() => {
        FuncionBuscarproductos2()
            .then(data => {
                setprovData(data);
            })
            .catch(error => console.error('Error al obtener datos de la API:', error));
    }, []);

    const handleDelete = async (prodId) => {
        const confirmacion = window.confirm("¿Estás seguro de eliminar este producto?");

        if (!confirmacion) {
            return; // Si el usuario cancela, no se realiza la eliminación
        }

        try {
            await FuncionEliminarproductos2(prodId);
            setprovData(prodTanData => prodTanData.filter(prod => prod._id !== prodId));
        } catch (error) {
            console.error('Error al eliminar producto:', error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Información productos</h1>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Codigo productos</th>
                        <th>codigo proveedores</th>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Forma farmaceutica</th>
                        <th>Lote fabricación</th>
                        <th>Fecha de caducidad</th>
                        <th>Precio</th>
                        <th>Stock maximo</th>
                        <th>Stock minimo</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {prodData.map((prod) => (
                        <tr key={prod._id}>
                            <td>{prod.id_Productos}</td>
                            <td>{prod.id_proveedor}</td>
                            <td>{prod.Nomb}</td>
                            <td>{prod.Marca}</td>
                            <td>{prod.Forma_farmaceutica}</td>
                            <td>{prod.Lote_fabricacion}</td>
                            <td>{prod.Fecha_caducidad}</td>
                            <td>{prod.Precio}</td>
                            <td>{prod.stock_maximo}</td>
                            <td>{prod.stock_minimo}</td>
                            <td>
                                <Link to={`/editarproduc/${prod._id}`} className="btn btn-success">
                                    Editar
                                </Link>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(prod._id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <td>
                <Link to="/productos2" className="btn btn-outline-primary">atras</Link>
            </td>
        </div>
    );
};

export default Tablaproductos;
