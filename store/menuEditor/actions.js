export default {

	getMenus( { commit } ) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            await this.$http.$get( `menus` ).then( response => {

                commit( 'SET_MENUS', { menus: response } );

                resolve( response );

            } ).catch( error => {

              reject( error );

		  } );

            // SET LOADING FALSE

        } );

    },  

};
