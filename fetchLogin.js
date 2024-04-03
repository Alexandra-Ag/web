
export const Login = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/api/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
     return true;
    } else {
      const errorResponse = await response.json();
      alert("Usuario No Registrado En la BD")
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    alert("No Esta")
  }
};
