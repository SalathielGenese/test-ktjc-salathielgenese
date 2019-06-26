import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import React, { useRef, useState, FormEvent, useEffect } from 'react';
import { RegisterPresentation } from './register-presentation';


export const Register = () => {
    const [ email, setEmail ] = useState( '' );
    const [ image, setImage ] = useState( '' );
    const [ agree, setAgree ] = useState( false );
    const [ username, setUsername ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ lastname, setLastname ] = useState( '' );
    const [ isValid, setIsValid ] = useState( false );
    const [ firstname, setFirstname ] = useState( '' );
    const [ telephone, setTelephone ] = useState( '' );
    const [ repassword, setRepassword ] = useState( '' );

    const formRef = useRef<HTMLFormElement>( null );
    const emailRef = useRef<HTMLIonInputElement>( null );
    const imageRef = useRef<HTMLIonInputElement>( null );
    const agreeRef = useRef<HTMLIonCheckboxElement>( null );
    const usernameRef = useRef<HTMLIonInputElement>( null );
    const passwordRef = useRef<HTMLIonInputElement>( null );
    const lastnameRef = useRef<HTMLIonInputElement>( null );
    const firstnameRef = useRef<HTMLIonInputElement>( null );
    const telephoneRef = useRef<HTMLIonInputElement>( null );
    const repasswordRef = useRef<HTMLIonInputElement>( null );

    useEffect( () => {
        const current = emailRef.current;

        if ( !current ) return;

        const inputListener = ( event: FormEvent<HTMLIonInputElement> ) =>
            setEmail( event.currentTarget.value! )
        ;

        current.addEventListener( 'input', inputListener as never );

        return () => current.removeEventListener( 'input', inputListener as never );
    }, [ emailRef ]);

    useEffect( () => {
        const current = imageRef.current;

        if ( !current ) return;

        const focusListener = ( event: FormEvent<HTMLIonInputElement> ) => {
            event.preventDefault();
            current.readonly = true;
            Plugins.Camera.getPhoto({
                source: CameraSource.Camera,
                resultType: CameraResultType.Base64,
            }).then( ({ base64String }) => {
                console.log({ base64String });
                setImage( base64String! );
            }).catch( error => {
                // FIXME: Log errors
                // TODO: Forward error message for UX
            }).then( () => {
                current.readonly = false;
            });
        };

        current.addEventListener( 'ionFocus', focusListener as never );

        return () => current.removeEventListener( 'ionFocus', focusListener as never );
    }, [ imageRef ]);

    useEffect( () => {
        const current = agreeRef.current;

        if ( !current ) return;

        // FIXME to base64 string when we get image from camera OR filesystem
        const inputListener = ( event: FormEvent<HTMLIonCheckboxElement> ) =>
            setAgree( event.currentTarget.checked! )
        ;

        current.addEventListener( 'input', inputListener as never );

        return () => current.removeEventListener( 'input', inputListener as never );
    }, [ agreeRef ]);

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
        const current = lastnameRef.current;

        if ( !current ) return;

        const inputListener = ( event: FormEvent<HTMLIonInputElement> ) =>
            setLastname( event.currentTarget.value! )
        ;

        current.addEventListener( 'input', inputListener as never );

        return () => current.removeEventListener( 'input', inputListener as never );
    }, [ lastnameRef ]);

    useEffect( () => {
        const current = firstnameRef.current;

        if ( !current ) return;

        const inputListener = ( event: FormEvent<HTMLIonInputElement> ) =>
            setFirstname( event.currentTarget.value! )
        ;

        current.addEventListener( 'input', inputListener as never );

        return () => current.removeEventListener( 'input', inputListener as never );
    }, [ firstnameRef ]);

    useEffect( () => {
        const current = telephoneRef.current;

        if ( !current ) return;

        const inputListener = ( event: FormEvent<HTMLIonInputElement> ) =>
            setTelephone( event.currentTarget.value! )
        ;

        current.addEventListener( 'input', inputListener as never );

        return () => current.removeEventListener( 'input', inputListener as never );
    }, [ telephoneRef ]);

    useEffect( () => {
        const current = repasswordRef.current;

        if ( !current ) return;

        const inputListener = ( event: FormEvent<HTMLIonInputElement> ) =>
            setRepassword( event.currentTarget.value! )
        ;

        current.addEventListener( 'input', inputListener as never );

        return () => current.removeEventListener( 'input', inputListener as never );
    }, [ repasswordRef ]);

    useEffect( () => {
        const { current } = formRef;

        if ( !current ) return;

        const submitListener = ( event: FormEvent<HTMLFormElement> ) => {
            event.preventDefault();

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
    }, [ formRef, isValid, email, image, agree, username, password, lastname, firstname, telephone, repassword ]);

    return <RegisterPresentation
        ref={ formRef }
        isValid={ isValid }
        agree={ agreeRef }
        email={ emailRef }
        image={ imageRef }
        username={ usernameRef }
        password={ passwordRef }
        lastname={ lastnameRef }
        firstname={ firstnameRef }
        telephone={ telephoneRef }
        repassword={ repasswordRef }
    />
};
