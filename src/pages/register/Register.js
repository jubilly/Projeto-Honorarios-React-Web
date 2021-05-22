import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
const Register = () => {
    const handleSumit = values => console.log(values);
    const validations = yup.object().shape({
        user: yup.string().email().required(),
        password: yup.string().min(8).required(),
        passwordregisterconfirmed: yup.string().min(8).required()
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
                <div className="form__content">
                    <p className="form_label">Confirmar Senha</p>  
                    <Field name="passwordregisterconfirmed" type="password" placeholder="Confirme a senha" className="form__input"/>
                    <ErrorMessage component="span" name="passwordregisterconfirmed" className="form_error"></ErrorMessage>
                </div>
                <button className="btn__submit" type="submit">Cadastrar</button>
            </Form>
        </Formik>
        <div className="register__content">
            <a href="login" className="register__link">	&#x2190; Voltar para a tela de Login</a>
        </div>
    </>
    )
}

export default Register