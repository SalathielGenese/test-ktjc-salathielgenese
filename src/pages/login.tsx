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

    useEffect( () => {
        const { current } = formRef;

        if ( !current ) return;

        const submitListener = ( event: FormEvent<HTMLFormElement> ) => {
            event.preventDefault();

            const wasValid = isValid;

            setIsValid( false );
            // FIXME: Implement login submission
            Promise.resolve().then( () => {
                // TODO: Redirect...
            }).catch( error => {
                // TODO: Log errors
            });
        };

        current.addEventListener( 'submit', submitListener as never );

        return () => current.removeEventListener( 'submit', submitListener as never );
    }, [ formRef, isValid, username, password ]);

    return <LoginPresentation
        ref={ formRef }
        isValid={ isValid }
        username={ usernameRef }
        password={ passwordRef }
    />
};
