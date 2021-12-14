export default (context, inject) => {

    const timestampToDate = ( dt ) => {

        return ( ( new Date( dt ) ).toISOString() ).replace( /^([^T]+)T(.+)$/,'$1' ).replace( /^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1' );

    }

    const rusToTranslit = ( str ) => {
    
        const ru = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
            'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
            'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
            'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
            'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
            'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
        }, n_str = [];
        
        str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');
        
        for ( let i = 0; i < str.length; ++i ) {
           n_str.push(
                  ru[ str[i] ]
               || ru[ str[i].toLowerCase() ] == undefined && str[i]
               || ru[ str[i].toLowerCase() ].toUpperCase()
           );
        }
        
        return n_str.join('');
    }

    

    // Inject $hello(msg) in Vue, context and store.
    inject('timestampToDate', timestampToDate);

    inject('rusToTranslit', rusToTranslit);

    // For Nuxt <= 2.12, also add 👇
    context.$timestampToDate = timestampToDate;

    context.$rusToTranslit = rusToTranslit;

}
