import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import roles from '../helpers/roles';

const schema = yup.object().shape({
    name: yup

    .string("El nombre debe ser un texto")
    .required("Debes ingresar un nombre"),

    email: yup
    .string("El email debe ser un texto")
    .required("Debes ser un correo electronico")
    .email("Debe ingresar un corro electronico valido"),

    role: yup
    .string("El rol debe ser texto")
    //.required("Debes ingresar un rol valido")
    .oneOf(Object.keys(roles), "El rol no es valido elija otro"),

})

export default yupResolver(schema)