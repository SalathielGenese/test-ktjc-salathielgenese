import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonAvatar, IonLabel, IonBadge } from '@ionic/react';
import React, { MutableRefObject } from 'react';
import { Pharmacy } from '../model/pharmacy';
import moment from 'moment';


export type Props =
    & {
        results?: Pharmacy[],
        search?: MutableRefObject<HTMLIonSearchbarElement>,
    }
    ;

export const HomePresentation = ({ search, results = [] }: Props ) =>
    <>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Closest pharmacy</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent padding>
            <IonSearchbar animated={ true } ref={ search }/>
            <IonList>
            {
                results.map( ({ image, name, country, town, junction, open = {} }) =>
                    <IonItem key={ name! + image! }>
                        <IonAvatar slot="start">
                            <img src={ `data:image/png;base64,${ image }` }/>
                        </IonAvatar>
                        <IonLabel>
                            <h1>
                                { name }
                            </h1>
                            <h3>
                                { [ town, country ].filter( _ => _ ).join( ' - ' ) }
                            </h3>
                            <h3>
                                { junction }
                            </h3>
                            <p>
                                <IonBadge color="secondary">
                                    Open: { moment( open.start ).format( 'hh:MM a') }
                                </IonBadge>
                                &nbsp;
                                <IonBadge color="primary">
                                    Close: { moment( open.stop ).format( 'hh:MM a') }
                                </IonBadge>
                            </p>
                        </IonLabel>
                    </IonItem>
            )}
            </IonList>
        </IonContent>
    </>
    ;
