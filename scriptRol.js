// Función para obtener la lista completa de carros
export const FuncionObtenerListaRoles = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/roles');
    
        if (!response.ok) {
            throw new Error(`Error al obtener la lista de los Roles. Código de estado: ${response.status}`);
        }
    
        const data = await response.json();
        return data || []; // Devuelve la respuesta completa del servidor
    } catch (error) {
        console.error('Error en FuncionObtenerListaRoles:', error);
        throw error;
    }
    };

    export const FuncionObtenerListaUsuarios = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/usuario');
        
            if (!response.ok) {
                throw new Error(`Error al obtener la lista de los Usuarios. Código de estado: ${response.status}`);
            }
        
            const data = await response.json();
            return data || []; // Devuelve la respuesta completa del servidor
        } catch (error) {
            console.error('Error en FuncionObtenerListaRoles:', error);
            throw error;
        }
        };