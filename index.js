import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Conexion from './js/Conexion.js';

async function main(){
  await App.listen(9000);
  console.log('el servidor esta en el puerto 9000')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

