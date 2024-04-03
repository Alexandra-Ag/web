export const FuncionRegistrar = async (categorias) => {
    try {
      const response = await fetch('http://localhost:3000/api/categorias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categorias),
      });
  
      if (response.ok) {
        // La solicitud se completó correctamente (código de respuesta 200)
        const data = await response.json(); 
        alert(data.message)// Puedes procesar la respuesta aquí
      } else {
        const errorResponse = await response.json();
        alert(errorResponse.message);
        // La solicitud no se completó correctamente (código de respuesta no es 200)
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };