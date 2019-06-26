import { Moment } from 'moment';



export interface Pharmacy {
    responsible?: string;
    junction?: string;
    country?: string;
    image?: string;
    phone?: string;
    town?: string;
    name?: string;
    open?: {
        start?: Moment;
        stop?: Moment;
    };
    id?: number;
}
