export const FuncionRegistrar = async (usuarios) => {
    try {
      const response = await fetch('http://localhost:3000/api/usuario ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarios),
      });
  
      if (response.ok) {
        // La solicitud se completó correctamente (código de respuesta 200)
        const data = await response.json(); 
        console.log('Respuesta exitosa:', data);
        alert(data.message)// Puedes procesar la respuesta aquí
      } else {
        const errorResponse = await response.json();
        console.error('Error en la solicitud:', errorResponse);
        alert(errorResponse.message);
        // La solicitud no se completó correctamente (código de respuesta no es 200)
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  export const FuncionRegistrarrolusu = async (roles_has_usuario) => {
    try {
      const response = await fetch('http://localhost:3000/api/roles_has_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(roles_has_usuario),
      });
  
      if (response.ok) {
        // La solicitud se completó correctamente (código de respuesta 200)
        const data = await response.json(); 
        console.log('Respuesta exitosa:', data);
        alert(data.message)// Puedes procesar la respuesta aquí
      } else {
        const errorResponse = await response.json();
        console.error('Error en la solicitud:', errorResponse);
        alert(errorResponse.message);
        // La solicitud no se completó correctamente (código de respuesta no es 200)
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };