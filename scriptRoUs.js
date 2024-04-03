export const FuncionRegistrarUsuRol = async (roles_has_usuario) => {
    try {
      const response = await fetch('http://localhost:3000/api/roles_has_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(roles_has_usuario),
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