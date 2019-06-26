import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonCheckbox } from '@ionic/react';
import React, { MutableRefObject, forwardRef } from 'react';
import { Random } from '../utils/random';
import { Link } from 'react-router-dom';



export type Props =
    & {
        isValid?: boolean,
        image?: MutableRefObject<HTMLIonInputElement | null>,
        email?: MutableRefObject<HTMLIonInputElement | null>,
        agree?: MutableRefObject<HTMLIonCheckboxElement | null>,
        username?: MutableRefObject<HTMLIonInputElement | null>,
        password?: MutableRefObject<HTMLIonInputElement | null>,
        lastname?: MutableRefObject<HTMLIonInputElement | null>,
        firstname?: MutableRefObject<HTMLIonInputElement | null>,
        telephone?: MutableRefObject<HTMLIonInputElement | null>,
        repassword?: MutableRefObject<HTMLIonInputElement | null>,
    };

export const RegisterPresentation = forwardRef<HTMLFormElement, Props>( ({ isValid, image, email, agree, username, password, lastname, telephone, firstname, repassword }, ref ) => {
    const id = {
        agree: Random.string(),
        email: Random.string(),
        image: Random.string(),
        username: Random.string(),
        password: Random.string(),
        lastname: Random.string(),
        telephone: Random.string(),
        firstname: Random.string(),
        repassword: Random.string(),
    };

    return <>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Register</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent padding>
            <form ref={ ref }>
                <div>
                    <h1>
                        Identity
                    </h1>
                    <br/>
                </div>
                <div>
                    <label htmlFor={ id.lastname }>
                        Lastname
                    </label>
                    &nbsp;
                    <IonInput
                        required
                        type="text"
                        ref={ lastname }
                        autocomplete="off"
                        id={ id.lastname }
                        placeholder="Salathiel Genèse"
                        style={{ borderBottom: '1px solid lightgrey' }}
                    ></IonInput>
                </div>
                <br/>
                <div>
                    <label htmlFor={ id.firstname }>
                        Firstname
                    </label>
                    &nbsp;
                    <IonInput
                        required
                        type="text"
                        ref={ firstname }
                        autocomplete="off"
                        id={ id.firstname }
                        placeholder="YIMGA YIMGA"
                        style={{ borderBottom: '1px solid lightgrey' }}
                    ></IonInput>
                </div>
                <br/>
                <div>
                    <label htmlFor={ id.email }>
                        Email
                    </label>
                    &nbsp;
                    <IonInput
                        required
                        type="email"
                        ref={ email }
                        id={ id.email }
                        autocomplete="off"
                        placeholder="salathielgenese+ktjc@gmail.com"
                        style={{ borderBottom: '1px solid lightgrey' }}
                    ></IonInput>
                </div>
                <br/>
                <div>
                    <label htmlFor={ id.telephone }>
                        Phone number
                    </label>
                    &nbsp;
                    <IonInput
                        required
                        type="tel"
                        ref={ telephone }
                        autocomplete="off"
                        id={ id.telephone }
                        placeholder="(+237) 695 31 28 38"
                        style={{ borderBottom: '1px solid lightgrey' }}
                    ></IonInput>
                </div>
                <br/>
                <div>
                    <label htmlFor={ id.image }>
                        Profile image
                    </label>
                    &nbsp;
                    <IonInput
                        required
                        type="text"
                        ref={ image }
                        id={ id.image }
                        autocomplete="off"
                        placeholder="https://i.imgur.com/qLk3ala.jpg"
                        style={{ borderBottom: '1px solid lightgrey' }}
                    ></IonInput>
                </div>
                <br/>
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
                        placeholder="SalathielGenese"
                        style={{ borderBottom: '1px solid lightgrey' }}
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
                        placeholder="//salathiel"
                        style={{ borderBottom: '1px solid lightgrey' }}
                    ></IonInput>
                </div>
                <br/>
                <div>
                    <label htmlFor={ id.repassword }>
                        Password confirmation
                    </label>
                    &nbsp;
                    <IonInput
                        required
                        type="password"
                        ref={ repassword }
                        autocomplete="off"
                        id={ id.repassword }
                        placeholder="//salathiel"
                        style={{ borderBottom: '1px solid lightgrey' }}
                    ></IonInput>
                </div>
                <br/>
                <div style={{ borderBottom: '1px solid lightgrey' }}>
                    <IonCheckbox
                        ref={ agree }
                        style={{ float: 'right' }}
                    />
                    <label style={{ display: 'block', paddingTop: '.35em', paddingBottom: '.35em' }}>
                        I agree to <Link to="/user-licence">terms &amp; conditions</Link>
                    </label>
                    &nbsp;
                </div>
                <br/>
                <div>
                    <p>
                        Already have an account?
                        &nbsp;
                        <Link to="/login">
                            Login
                        </Link>
                    </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <IonButton type="submit" disabled={ !isValid }>
                        Register
                    </IonButton>
                </div>
            </form>
        </IonContent>
    </>;
});
