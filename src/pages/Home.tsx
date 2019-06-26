import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.SFC<any> = () => {
    return <>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Closest pharmacy</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent padding>
        </IonContent>
    </>
    ;
};

export default Home;
