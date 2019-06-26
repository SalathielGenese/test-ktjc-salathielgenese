export interface Pharmacy {
    responsible?: string;
    junction?: string;
    country?: string;
    image?: string;
    phone?: string;
    town?: string;
    open?: {
        start?: Date;
        stop?: Date;
    };
    id?: number;
}
