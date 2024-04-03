
export const FuncionRegistrarUsuario = async (usuario) => {
  try {
    const response = await fetch('http://localhost:3000/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
    } else {
      const errorResponse = await response.json();
      alert(errorResponse.message);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};

export const FuncionEditarUsuario = async (id, usuario) => {
  try {
    console.log('Datos a editar en FuncionEditarUsuario:', usuario);

    const response = await fetch(`http://localhost:3000/api/usuario/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    if (!response.ok) {
      throw new Error('Error al editar usuario');
    }

    const data = await response.json();
    console.log('Respuesta de FuncionEditarUsuario:', data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const FuncionEliminarUsuario = async (usuarioId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/usuario/${usuarioId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error al eliminar usuario. Detalles: ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en FuncionEliminarUsuario:', error);
    throw error;
  }
};


export const FuncionObtenerListatipoDocumento = async () => {
  try {
      const response = await fetch('http://localhost:3000/api/tipoDocumento');
  
      if (!response.ok) {
          throw new Error(`Error al obtener la lista de carros. Código de estado: ${response.status}`);
      }
  
      const data = await response.json();
      return data || []; // Devuelve la respuesta completa del servidor
  } catch (error) {
      console.error('Error en FuncionObtenerListaCarros:', error);
      throw error;
  }
  };

  export const FuncionObtenerDatosusuario = async (usuarioId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/usuario/${usuarioId}`);
        
        if (!response.ok) {
            throw new Error('Error al obtener datos del carro');
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en FuncionObtenerDatos:', error);
        throw error;
    }
    };

    export const FuncionBuscarUsuario = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/usuario');
        console.log('Respuesta completa:', response);
      
        if (!response.ok) {
          throw new Error('Error al buscar proveedores');
        }
      
        const text = await response.text();
        console.log('Texto de la respuesta:', text);
      
        if (!text.trim()) {
          throw new Error('La respuesta está vacía');
        }
      
        const data = JSON.parse(text);
        return data;
      } catch (error) {
        console.error('Error en FuncionBuscar:', error);
        throw error;
      }
      };