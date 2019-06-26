const to = ( _: string ) => {
    const utf16 = new Uint16Array( _.length );

    utf16.forEach( ( current, i ) => utf16[ i ] = _.charCodeAt( i ) );

    return btoa( String.fromCharCode.apply( null, new Uint8Array( utf16.buffer ) as never ) );
};

const from = ( _: string ) => {
    const binary = atob( _ );
    const utf8 = new Uint8Array( binary.length );

    utf8.forEach( ( current, i ) => utf8[ i ] = binary.charCodeAt( i ) );

    return String.fromCharCode.apply( null, new Uint16Array( utf8.buffer ) as never );
};


export const Base64 = { to, from };
