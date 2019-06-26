import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonRow, IonCol, IonButton } from '@ionic/react';
import React, { MutableRefObject, forwardRef } from 'react';
import { Navigation } from '../widget/navigation';
import { Random } from '../utils/random';
import { Link } from 'react-router-dom';



export type Props =
    & {
        isValid?: boolean,
        username: MutableRefObject<HTMLIonInputElement | null>,
        password: MutableRefObject<HTMLIonInputElement | null>,
    };

export const LoginPresentation = forwardRef<HTMLFormElement, Props>( ({ isValid, username, password }, ref ) => {
    const id = { username: Random.string(), password: Random.string() };

    return <>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent padding>
            <Navigation/>
            <form ref={ ref }>
                <div>
                    <label htmlFor={ id.username }>
                        Username
                    </label>
                    &nbsp;
                    <IonInput
                        required
                        type="text"
                        ref={ username }
                        autocomplete="off"
                        id={ id.username }
                        style={{ borderBottom: '1px solid lightgrey'}}
                    ></IonInput>
                </div>
                <br/>
                <div>
                    <label htmlFor={ id.password }>
                        Password
                    </label>
                    &nbsp;
                    <IonInput
                        required
                        type="password"
                        ref={ password }
                        autocomplete="off"
                        id={ id.password }
                        style={{ borderBottom: '1px solid lightgrey'}}
                    ></IonInput>
                </div>
                <br/>
                <div>
                    <p>
                        Don't have an account?
                        &nbsp;
                        <Link to="/register">
                            Register
                        </Link>
                    </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <IonButton type="submit" disabled={ !isValid }>
                        Login
                    </IonButton>
                </div>
            </form>
        </IonContent>
    </>;
} );
