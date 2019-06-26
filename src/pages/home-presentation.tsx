import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/react';
import React, { MutableRefObject } from 'react';



export type Props =
    & {
        search?: MutableRefObject<HTMLIonSearchbarElement>,
    }
    ;

export const HomePresentation = ({ search }: Props ) =>
    <>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Closest pharmacy</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent padding>
            <IonSearchbar animated={ true } ref={ search }/>
        </IonContent>
    </>
    ;
