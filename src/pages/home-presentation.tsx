import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/react';
import React from 'react';



export const HomePresentation = () =>
    <>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Closest pharmacy</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent padding>
            <IonSearchbar animated={ true }/>
        </IonContent>
    </>
    ;
