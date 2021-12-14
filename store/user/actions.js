export default {  

    signIn( { commit }, payload ) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            await this.$http.$post( `signin`, payload ).then( response => {

                resolve( response );

            } ).catch( error => {

                console.log('error');

                console.log(error);

                reject( error );

		    } );

            // SET LOADING FALSE

        } );

    },

};
