import { LoginPresentation } from './login-presentation';
import React, { useRef, useState, FormEvent, useEffect } from 'react';



export const Login = () => {
    const [ username, setUsername ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    const formRef = useRef<HTMLFormElement>( null );
    const usernameRef = useRef<HTMLIonInputElement>( null );
    const passwordRef = useRef<HTMLIonInputElement>( null );

    useEffect( () => {
        const current = usernameRef.current;

        if ( !current ) return;

        const inputListener = ( event: FormEvent<HTMLIonInputElement> ) =>
            setUsername( event.currentTarget.value! )
        ;

        current.addEventListener( 'input', inputListener as never );

        return () => current.removeEventListener( 'input', inputListener as never );
    }, [ usernameRef ]);

    useEffect( () => {
        const current = passwordRef.current;

        if ( !current ) return;

        const inputListener = ( event: FormEvent<HTMLIonInputElement> ) =>
            setPassword( event.currentTarget.value! )
        ;

        current.addEventListener( 'input', inputListener as never );

        return () => current.removeEventListener( 'input', inputListener as never );
    }, [ passwordRef ]);

    return <LoginPresentation
        ref={ formRef }
        username={ usernameRef }
        password={ passwordRef }
    />
};
