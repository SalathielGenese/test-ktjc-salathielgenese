export interface Pharmacy {
    responsible?: string;
    junction?: string;
    country?: string;
    image?: string;
    phone?: string;
    town?: string;
    name?: string;
    open?: {
        start?: Date;
        stop?: Date;
    };
    id?: number;
}
