export const FuncionRegistrarpro = async (productos2) => {
  try {
    const response = await fetch('http://localhost:3000/api/productos2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productos2),
    });

    if (response.ok) {
      const data = await response.json(); 
      alert(data.message)
    } else {
      const errorResponse = await response.json();
      alert(errorResponse.message);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};

// Función para obtener la lista completa de carros
export const FuncionObtenerListaproveedores = async () => {
  try {
      const response = await fetch('http://localhost:3000/api/proveedores');
  
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

  //eliminar productos
export const FuncionEliminarproductos2 = async (productos2Id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/productos2/${productos2Id}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error al eliminar carro. Detalles: ${errorMessage}`);
    }
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en FuncionEliminar:', error);
    throw error;
  }
  };

  //buscar productos
export const FuncionBuscarproductos2 = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/productos2');
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

//editar productos
export const FuncionEditarproductos2 = async (id, productos2) => {
  try {
      console.log('Datos a editar en FuncionEditar:', productos2);
  
      const response = await fetch(`http://localhost:3000/api/productos2/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(productos2),
      });
  
      if (!response.ok) {
          throw new Error('Error al editar proveedor');
      }
  
      const data = await response.json();
      console.log('Respuesta de FuncionEditar:', data);
      return data;
  } catch (error) {
      throw error;
  }
  };

   //obtener datos productos
export const FuncionObtenerDatosproductos2 = async (productos2Id) => {
  try {
      const response = await fetch(`http://localhost:3000/api/productos2/${productos2Id}`);
      
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