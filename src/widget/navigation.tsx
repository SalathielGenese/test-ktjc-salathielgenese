import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';



export const Navigation = () =>
    <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <IonFabButton>
            <IonIcon name="apps" />
        </IonFabButton>
        <IonFabList side="top">
            <Link to="/pharmacy/new">
                <IonFabButton>
                    <IonIcon name="add-circle" />
                </IonFabButton>
            </Link>
            <Link to="/">
                <IonFabButton>
                    <IonIcon name="home" />
                </IonFabButton>
            </Link>
        </IonFabList>
        <IonFabList side="end">
            <Link to="/profile">
                <IonFabButton>
                    <IonIcon name="person" />
                </IonFabButton>
            </Link>
        </IonFabList>
    </IonFab>
    ;
