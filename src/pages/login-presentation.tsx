import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonRow, IonCol, IonButton } from '@ionic/react';
import { Random } from '../utils/random';
import React from 'react';
import { Link } from 'react-router-dom';



export const LoginPresentation = () => {
    const id = { username: Random.string(), password: Random.string() };

    return <>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Identify</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent padding>
            <form>
                <div>
                    <label htmlFor={ id.username }>
                        Username
                    </label>
                    &nbsp;
                    <IonInput
                        required
                        type="text"
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
                    <IonButton type="submit">
                        Login
                    </IonButton>
                </div>
            </form>
        </IonContent>
    </>;
};
