import React, { useState, useEffect } from 'react';
import { FuncionEditarUsuario, FuncionObtenerDatosusuario } from '../js/registro';
import { FuncionObtenerListaRoles, FuncionObtenerListaUsuarios } from '../js/scriptRol';
import { FuncionRegistrarUsuRol } from '../js/scriptRoUs';
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function UpdateTan() {
    const { id } = useParams();
    const [id_usuario, setusu] = useState("");
    const [nombre, setnom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpass] = useState("");
    const [codigo_Rol, setrol] = useState("");
    const [loading, setLoading] = useState(true);
    const [ListaRoles, setListaRoles] = useState([]);
    const navigate = useNavigate(); // Importar useNavigate para la redirección

    useEffect(() => {
        const fetchData = async () => {
            try {
                const UsData = await FuncionObtenerDatosusuario(id);
                setusu(UsData.id_usuario || "");
                setnom(UsData.nombre || "");
                setEmail(UsData.email || "");
                setpass(UsData.password || "");
                setrol(UsData.codigo_Rol || "");
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener datos del usuario:', error.message);
            }
        };

        fetchData(); // Llama a la función para obtener datos al montar el componente
    }, [id]);

    useEffect(() => {
        const cargarListaRoles = async () => {
            try {
                const roles = await FuncionObtenerListaRoles();
                console.log('Respuesta completa del servidor:', roles);

                if (roles && roles.length > 0) {
                    setListaRoles(roles);
                } else {
                    console.warn('La lista de los roles está vacía o es nula.');
                }
            } catch (error) {
                console.error('Error al cargar la lista de los roles:', error);
            }
        };

        cargarListaRoles();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación del formulario
        if (!id_usuario || !nombre || !email || !password || !codigo_Rol) {
            console.error('Todos los campos deben ser completados.');
            return;
        }

        // Confirmación del usuario
        if (!window.confirm('¿Está seguro de editar este usuario y asignarle el rol?')) {
            return;
        }

        try {
            // Llamada al endpoint de edición de usuario
            const response = await FuncionEditarUsuario(id, { id_usuario, nombre, email, password, codigo_Rol });
            console.log('Respuesta de la función de editar usuario:', response);

            // Llamada al endpoint de registro de rol
            const resultadoRegistro = await FuncionRegistrarUsuRol({
                codigo_Rol,
                id_usuario,
            });
            console.log(resultadoRegistro);

            navigate("/tablasUsu"); // Redireccionar a la página de tablasUsu después de la edición y asignación de rol
        } catch (error) {
            console.error('Error al editar usuario o asignar rol:', error);
            alert('Hubo un error al editar el usuario o asignar el rol. Por favor, inténtelo de nuevo.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Actualizar Usuario y Asignar Rol</h5>
                            <form onSubmit={handleSubmit} className="bg-light p-4">
                                <h2>Actualizar Usuario</h2>
                                <div className="mb-2">
                                    <label htmlFor="placa">Numero de documento:</label>
                                    <input
                                        type="text"
                                        id="placa"
                                        placeholder="poner Placa"
                                        className="form-control"
                                        value={id_usuario}
                                        onChange={(e) => setusu(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="marca">Nombre:</label>
                                    <input
                                        type="text"
                                        id="marca"
                                        placeholder="poner Marca"
                                        className="form-control"
                                        value={nombre}
                                        onChange={(e) => setnom(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="color">Email:</label>
                                    <input
                                        type="text"
                                        id="color"
                                        placeholder="poner Color"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="color">Contraseña:</label>
                                    <input
                                        type="text"
                                        id="color"
                                        placeholder="poner Color"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setpass(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="codigo_Rol" className="form-label">Código de Rol:</label>
                                    <select
                                        className="form-select"
                                        value={codigo_Rol}
                                        onChange={(e) => setrol(e.target.value)}
                                    >
                                        <option value="">Seleccionar Rol</option>
                                        {ListaRoles && ListaRoles.length > 0 ? (
                                            ListaRoles.map((roles) => (
                                                <option key={roles._id} value={roles._id}>
                                                    {roles.desc_Rol}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="" disabled>
                                                Sin roles disponibles
                                            </option>
                                        )}
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-success">
                                    Actualizar Usuario y Asignar Rol
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateTan;


