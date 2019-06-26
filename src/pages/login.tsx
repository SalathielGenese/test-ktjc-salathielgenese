import React, { useRef, useState, FormEvent, useEffect } from 'react';
import { LoginPresentation } from './login-presentation';



export const Login = () => {
    const [ username, setUsername ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ isValid, setIsValid ] = useState( false );

    const formRef = useRef<HTMLFormElement>( null );
    const usernameRef = useRef<HTMLIonInputElement>( null );
    const passwordRef = useRef<HTMLIonInputElement>( null );

    useEffect( () => {
        const IS_VALID_USERNAME = !!username;
        const IS_VALID_PASSWORD = !!password;

        const IS_VALID_FORM =
            true
            && IS_VALID_USERNAME
            && IS_VALID_PASSWORD;

        setIsValid( IS_VALID_FORM );
    }, [ username, password ]);

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
        isValid={ isValid }
        username={ usernameRef }
        password={ passwordRef }
    />
};
