import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Roles from '../pages/admin/rolesPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import UserPage from '../pages/admin/UserPage';
import NotFoundPage from '../pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import routes from '../helpers/routes';
import ProveedoresPage from '../pages/ProveedoresPage';
import Productos from '../pages/ProjectsPage';
import Tablaproductos from '../pages/tablasprod';
import Editarprod from '../pages/editarprod';
import Proveedores from '../pages/ProveedoresPage'
import Tablasprov from '../pages/tablasprov'
import Editarprov from '../pages/editarprov'
import Productos2 from '../pages/ProjectsPage'
import TablasProductos2 from '../pages/tablasprod'
import EditarProductos2 from '../pages/editarprod'
import Usuario from '../pages/RegisterPage'
import TablasUsuario from '../pages/tablasusuario'
import Editarusuario from '../pages/editarusuario'
import RecuperarPage from '../pages/RecuperarPage'
import ResetPassword from '../pages/ResetPassword';

export default function AppRouter() {
  return (
    
    <Routes>
      <Route path={routes.home} element={<PublicRoute element={<HomePage />} />} />
      <Route path={routes.login} element={<PublicRoute element={<LoginPage />} />} />
      <Route path={routes.register} element={<PublicRoute element={<RegisterPage />} />} />
      <Route path={routes.proveedores} element={<PrivateRoute element={<ProveedoresPage />} />}/>
      <Route path={routes.projects} element={<PrivateRoute element={<ProjectsPage />} />}/>
      <Route path={routes.project()} element={<PrivateRoute element={<ProjectPage />} />}/>
      <Route path={routes.admin.users} element={<PrivateRoute element={<UserPage />} />}/>
      <Route path={routes.admin.users} element={<PrivateRoute element={<rolesPage />} />}/>
        
            <Route path='/' element={<Productos />} />
            <Route path='/get' element={<Tablaproductos />} />
            <Route path='/updateTan/:id' element={<Editarprod />} />
            <Route path='/proveedores' element={<Proveedores/>}></Route>
            <Route path='/tablasprov' element={<Tablasprov/>}></Route>
            <Route path='/editarprov/:id' element={<Editarprov/>}></Route>
            <Route path='/productos2' element={<Productos2/>}></Route>
          <Route path='/tablaspro' element={<TablasProductos2/>}></Route>
          <Route path='/editarproduc/:id' element={<EditarProductos2/>}></Route>
          <Route path='/usuario' element={<Usuario/>}></Route>
          <Route path='/roles' element={<Roles/>}></Route>
          <Route path='/tablasUsu' element={<TablasUsuario/>}></Route>
          <Route path='/editarUsu/:id' element={<Editarusuario/>}></Route>
          <Route path='/recuperar' element={<RecuperarPage/>}></Route>
          <Route path='/reset_password/:id/:token' element={<ResetPassword/>}></Route>


    
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    
  );
}

