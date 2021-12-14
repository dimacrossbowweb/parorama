export default {

	getDashboardFromData ( { commit } ) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            await this.$http.$get( `api/v1/dashboard` ).then( response => {

                commit( 'SET_DASHBOARD', { dashboard: response } );

                resolve( response );

            } ).catch( error => {

              reject( error );

		  } );

            // SET LOADING FALSE

        } );

    },

};
