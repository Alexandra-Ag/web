//registro proveedor
export const FuncionRegistrarprov = async (proveedores) => {
  try {
    const response = await fetch('http://localhost:3000/api/proveedores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proveedores),
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

//buscar proveedores
export const FuncionBuscarprov = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/proveedores');
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

//editar proveedores
export const FuncionEditarprov = async (id, proveedores) => {
  try {
      console.log('Datos a editar en FuncionEditar:', proveedores);
  
      const response = await fetch(`http://localhost:3000/api/proveedores/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(proveedores),
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

  //eliminar proveedor
export const FuncionEliminarprov = async (proveedoresId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/proveedores/${proveedoresId}`, {
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

  //obtener datos proveedores
export const FuncionObtenerDatosprov = async (proveedoresId) => {
  try {
      const response = await fetch(`http://localhost:3000/api/proveedores/${proveedoresId}`);
      
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
