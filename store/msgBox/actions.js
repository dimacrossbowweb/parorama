import uuid from "~/plugins/uuid";

export default {

    setMessage( { commit }, payload ) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            const data = {

                id: uuid(),

                payload

            }

            commit( 'SET_MESSAGE', data );

            resolve( response );

            // SET LOADING FALSE

        } );

    }

};
