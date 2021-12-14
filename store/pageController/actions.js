export default {

	getPages( { commit }, payload ) {

        const query = `api/v1/pages` + ( payload?.parent ? `/?parent=${payload.parent}` : `` ); 

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            await this.$http.$get( query ).then( response => {

                commit( 'SET_PAGES', { pages: response } );

                resolve( response );

            } ).catch( error => {

              reject( error );

		  } );

            // SET LOADING FALSE

        } );

    },    

    createPage( { commit }, payload ) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            await this.$http.$post( `api/v1/pages`, payload ).then( response => {

                resolve( response );

            } ).catch( error => {

              reject( error );

		  } );

            // SET LOADING FALSE

        } );

    },

    deletePage( { commit }, payload ) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

        
            await this.$http.$delete( `api/v1/pages/${ payload.id }`, {

                headers: {

                    'content-type': 'application/json',

                    'authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NzI1MjUsImZpbyI6ItCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAICAiLCJpZCI6MSwib3JpZ19pYXQiOjE2MTczNzI1MjV9.Kp3Jrs10cD8NB-CZLutrBEVzM6hEHfQhYycOu6R7qgqRJ2NhoBfcGyDuHxQ7TlZOujVCIlb8nNADVWj6kypS3w'

                }

            } ).then( response => {

                resolve( response );

            } ).catch( error => {

              reject( error );

		  } );

            // SET LOADING FALSE

        } );

    },

};
