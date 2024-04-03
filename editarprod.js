import React, { useState, useEffect } from "react";
import { FuncionEditarproductos2, FuncionObtenerDatosproductos2 } from '../js/scriptP';
import { useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

function Updateprod() {
    const { id } = useParams();
    const [id_Productos, setidprod] = useState('');
    const [Nomb, setNom] = useState('');
    const [Marca, setvmarc] = useState('');
    const [Forma_farmaceutica, setForm] = useState('');
    const [Lote_fabricacion, setlote] = useState('');
    const [Fecha_caducidad, setcad] = useState('');
    const [Precio, setPrecio] = useState('');
    const [stock_maximo, setmaximo] = useState('');
    const [stock_minimo, setmin] = useState('');
    const [redirect, setRedirect] = useState(false); // Estado para redireccionar

    // Estado adicional para manejar la carga de datos
    const [loading, setLoading] = useState(true);

    // Aquí puedes utilizar useEffect para cargar los datos del carro al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const prodData = await FuncionObtenerDatosproductos2(id);
                setidprod(prodData.id_Productos || "");
                setNom(prodData.Nomb || "");
                setvmarc(prodData.Marca || "");
                setForm(prodData.Forma_farmaceutica || "");
                setlote(prodData.Lote_fabricacion || "");
                setcad(prodData.Fecha_caducidad || "");
                setPrecio(prodData.Precio || "");
                setmaximo(prodData.stock_maximo || "");
                setmin(prodData.stock_minimo || "");
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener datos del carro:', error.message);
            }
        };

        fetchData(); // Llama a la función para obtener datos al montar el componente
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const confirmacion = window.confirm("¿Estás seguro de editar los productos?");

        if (!confirmacion) {
            return; // Si el usuario cancela, no se realiza la actualización
        }
    
        // Validación básica de datos
        if (!id_Productos  || !Nomb|| !Marca|| !Forma_farmaceutica || !Lote_fabricacion || !Fecha_caducidad || !Precio || !Precio || !stock_maximo || !stock_minimo) {
            console.error('Todos los campos deben ser completados.');
            return;
        }
    
        try {
            const response = await FuncionEditarproductos2(id, { id_Productos, Nomb, Marca,Forma_farmaceutica,Lote_fabricacion, Fecha_caducidad,Precio,stock_maximo,stock_minimo});
            console.log('Respuesta de la función de editar:', response);
            setRedirect(true); // Establecer el estado de redirección a true después de editar
        } catch (error) {
            console.error('Error al editar carro:', error.message);
        }
    };
    
    if (redirect) {
        return <Navigate to="/tablasprov" />; // Redirigir a la página Tablaproductos si redirect es true
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit} className="bg-light p-4">
                    <h2>Actualizar Producto</h2>
                    <div className="mb-2">
                        <label htmlFor="id_productos">Código de Producto:</label>
                        <input
                            type="text"
                            id="id_productos"
                            placeholder="Editar código"
                            className="form-control"
                            value={id_Productos}
                            onChange={(e) => setidprod(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder="Nombre"
                            className="form-control"
                            value={Nomb}
                            onChange={(e) => setNom(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Marca">Marca:</label>
                        <input
                            type="text"
                            id="Marca"
                            placeholder="Editar marca"
                            className="form-control"
                            value={Marca}
                            onChange={(e) => setvmarc(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Forma_farmaceutica">Forma Farmacéutica:</label>
                        <input
                            type="text"
                            id="Forma_farmaceutica"
                            placeholder="Editar forma farmacéutica"
                            className="form-control"
                            value={Forma_farmaceutica}
                            onChange={(e) => setForm(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Lote_fabricacion">Lote de Fabricación:</label>
                        <input
                            type="text"
                            id="Lote_fabricacion"
                            placeholder="Editar lote de fabricación"
                            className="form-control"
                            value={Lote_fabricacion}
                            onChange={(e) => setlote(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Fecha_caducidad">Fecha de Caducidad:</label>
                        <input
                            type="text"
                            id="Fecha_caducidad"
                            placeholder="Editar fecha de caducidad"
                            className="form-control"
                            value={Fecha_caducidad}
                            onChange={(e) => setcad(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Precio_unitario">Precio:</label>
                        <input
                            type="text"
                            id="Precio_unitario"
                            placeholder="Editar precio unitario"
                            className="form-control"
                            value={Precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Stock_maximo">Stock Máximo:</label>
                        <input
                            type="text"
                            id="Stock_maximo"
                            placeholder="Editar stock máximo"
                            className="form-control"
                            value={stock_maximo}
                            onChange={(e) => setmaximo(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Stock_minimo">Stock Mínimo:</label>
                        <input
                            type="text"
                            id="Stock_minimo"
                            placeholder="Editar stock mínimo"
                            className="form-control"
                            value={stock_minimo}
                            onChange={(e) => setmin(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Actualizar
                    </button>
                    <Link to="/tablaspro" className="btn btn-warning me-2">Atrás</Link>
                </form>
            </div>
        </div>
    );
}

export default Updateprod;
