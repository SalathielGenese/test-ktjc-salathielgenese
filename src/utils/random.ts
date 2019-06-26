import { Base64 } from './base64';



const number = () => Math.random();

const string = () => Base64.to( number().toString() );

export const Random = { number, string };
