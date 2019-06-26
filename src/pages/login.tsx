import { LoginPresentation } from './login-presentation';
import React, { useRef } from 'react';



export const Login = () => {
    const formRef = useRef<HTMLFormElement>( null );
    const usernameRef = useRef<HTMLIonInputElement>( null );
    const passwordRef = useRef<HTMLIonInputElement>( null );

    return <LoginPresentation
        ref={ formRef }
        username={ usernameRef }
        password={ passwordRef }
    />
};
