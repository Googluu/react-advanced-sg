import React, { useContext } from 'react'
import Context from '../Context';
import { UserForm } from '../components/UserForm'
import {  useRegisterMutation } from '../container/RegisterMutation'
import { UseLoginMutation } from '../container/LoginMutation';


export const NotRegisteredUser = () => {
    const { registerMutation, loading: loading, error: error } = useRegisterMutation()
    const { loginMutation, loading: loadingLogin, error: errorLogin } = UseLoginMutation()

    return (
        <Context.Consumer>
            {
                ({ activateAuth }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        registerMutation({ variables }).then(activateAuth)
                    }

                    const onSubmitLogin = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        loginMutation({ variables }).then(activateAuth)
                    }

                    const errorMsg = error && 'El usuario ya existe o hay algún problema.'
                    const errorLoginMsg = errorLogin && 'El usuario o la contraseña están errados.'

                    return (
                        <React.Fragment>
                            <UserForm onSubmit={onSubmit} title='Registrarse' error={errorMsg} disabled={loading} />
                            <UserForm onSubmit={onSubmitLogin} title='Iniciar sesión' error={errorLoginMsg} disabled={loadingLogin} />
                        </React.Fragment>
                    )
                }
            }
        </Context.Consumer>
    )
}
