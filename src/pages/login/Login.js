import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import './login.css'
import baseURL from '../services/api'


    fetch(`${baseURL}/usuario`,{
        method: 'GET',
        mode: 'no-cors',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
      },
    }).then(function(response) {
        return response.json(); 
    }).then((jsonData) => {
        console.log(jsonData)
        console.log('oi front para o servidor')
    }).catch(function(error) {  
        console.log('Request failed', error)  
    });

const Login = () => {


    const handleSumit = values => console.log(values);
    const validations = yup.object().shape({
        user: yup.string().email().required(),
        password: yup.string().min(8).required()
    });
    return (
    <>
        <Formik initialValues={{}} onSubmit={handleSumit} validationSchema={validations}>
            <Form className="form">
                <div className="form__content">
                    <p className="form_label">Usuário</p>
                    <Field name="user" placeholder="Digite o nome do usuário" className="form__input"/>
                    <ErrorMessage component="span" name="user" className="form_error"></ErrorMessage>
                </div>
                <div className="form__content">
                    <p className="form_label">Senha</p>  
                    <Field name="password" type="password" placeholder="Digite a senha" className="form__input"/>
                    <ErrorMessage component="span" name="password" className="form_error"></ErrorMessage>
                </div>
                <button className="btn__submit" type="submit">Entrar</button>
            </Form>
        </Formik>
        <div className="register__content">
            <a href="register" className="register__link">Cadastre-se 	&#x2192;</a>
            <a href="forgot-password" className="register__link">Recuperar senha 	&#x2192;</a>
        </div>
    </>
    )
}


export default Login