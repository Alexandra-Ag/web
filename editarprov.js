import React, { useState, useEffect } from "react";
import { FuncionEditarprov, FuncionObtenerDatosprov } from '../js/scriptPR';
import { useParams, useNavigate } from "react-router-dom"; // Importa useNavigate
import { Link } from "react-router-dom";

function UpdateUsers() {
    const { id } = useParams();
    const [id_proveedores, setidprov] = useState('');
    const [Nomb_proveedor, setnombre] = useState('');
    const [Tel_proveedor, settel] = useState('');
    const [Email_proveedor, setemail] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Obtener la función de navegación

    useEffect(() => {
        const fetchData = async () => {
            try {
                const provData = await FuncionObtenerDatosprov(id);
                setidprov(provData.id_proveedores || "");
                setnombre(provData.Nomb_proveedor || "");
                settel(provData.Tel_proveedor || "");
                setemail(provData.Email_proveedor || "");
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener datos del carro:', error.message);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const confirmacion = window.confirm("¿Está seguro de editar los productos?");

        if (!confirmacion) {
            console.log("Edición cancelada.");
            return;
        }

        if (!id_proveedores || !Nomb_proveedor || !Tel_proveedor || !Email_proveedor) {
            console.error('Todos los campos deben ser completados.');
            return;
        }

        try {
            const response = await FuncionEditarprov(id, { id_proveedores, Nomb_proveedor, Tel_proveedor, Email_proveedor });
            console.log('Respuesta de la función de editar:', response);
            // Utilizar navigate para redirigir al componente Tablaprov después de la edición exitosa
            navigate("/tablasprov");
        } catch (error) {
            console.error('Error al editar carro:', error.message);
        }
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit} className="bg-light p-4">
                    <h2>Actualizar</h2>
                    <div className="mb-2">
                        <label htmlFor="placa">codigo proveedor:</label>
                        <input
                            type="text"
                            id="placa"
                            placeholder="editar codigo"
                            className="form-control"
                            value={id_proveedores}
                            onChange={(e) => setidprov(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="marca">Nombre Proveedor:</label>
                        <input
                            type="text"
                            id="marca"
                            placeholder="editar nombre"
                            className="form-control"
                            value={Nomb_proveedor}
                            onChange={(e) => setnombre(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="color">Telefono Proveedor:</label>
                        <input
                            type="text"
                            id="color"
                            placeholder="Editar Telefono"
                            className="form-control"
                            value={Tel_proveedor}
                            onChange={(e) => settel(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="color">Email Proveedor:</label>
                        <input
                            type="text"
                            id="color"
                            placeholder="Editar Email"
                            className="form-control"
                            value={Email_proveedor}
                            onChange={(e) => setemail(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Actualizar
                    </button>
                    <Link to="/tablasprov" className="btn btn-warning me-2">atras</Link>
                </form>
            </div>
        </div>
    );
}

export default UpdateUsers;


