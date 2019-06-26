import { LoginPresentation } from './login-presentation';
import React, { useRef, useState } from 'react';



export const Login = () => {
    const [ username, setUsername ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    const formRef = useRef<HTMLFormElement>( null );
    const usernameRef = useRef<HTMLIonInputElement>( null );
    const passwordRef = useRef<HTMLIonInputElement>( null );

    return <LoginPresentation
        ref={ formRef }
        username={ usernameRef }
        password={ passwordRef }
    />
};
