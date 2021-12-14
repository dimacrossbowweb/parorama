export default {

	getLayoutsFromData ( { commit } ) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            await this.$http.$get( `api/v1/layouts` ).then( response => {

                commit( 'SET_LAYOUTS', { layouts: response } );

                resolve( response );

            } ).catch( error => {

              reject( error );

		  } );

            // SET LOADING FALSE

        } );

    },

	getLayoutByName ( { commit }, payload ) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            await this.$http.$get( `api/v1/layouts/${ payload.name }` ).then( response => {

                // commit( 'SET_LAYOUTS', { layouts: response } );

                resolve( response );

            } ).catch( error => {

              reject( error );

		  } );

            // SET LOADING FALSE

        } );

    },

    createLayout( { commit }, payload ) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            await this.$http.$post( `api/v1/layouts`, 
            
                payload,

                {

                    headers: {

                        'content-type': 'application/json',

                        'authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NzI1MjUsImZpbyI6ItCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAICAiLCJpZCI6MSwib3JpZ19pYXQiOjE2MTczNzI1MjV9.Kp3Jrs10cD8NB-CZLutrBEVzM6hEHfQhYycOu6R7qgqRJ2NhoBfcGyDuHxQ7TlZOujVCIlb8nNADVWj6kypS3w'

                    },

                }

            ).then( response => {

                resolve( response );

            } ).catch( error => {

              reject( error );

		  } );

            // SET LOADING FALSE

        } );

    },


    updateLayout( { commit }, payload ) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            await this.$http.$put( `api/v1/layouts/${ payload._id }`, 
            
                payload,

                {

                    headers: {

                        'content-type': 'application/json',

                        'authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NzI1MjUsImZpbyI6ItCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAICAiLCJpZCI6MSwib3JpZ19pYXQiOjE2MTczNzI1MjV9.Kp3Jrs10cD8NB-CZLutrBEVzM6hEHfQhYycOu6R7qgqRJ2NhoBfcGyDuHxQ7TlZOujVCIlb8nNADVWj6kypS3w'

                    },

                }

            ).then( response => {

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

        
            await this.$http.$delete( `api/v1/layouts/${ payload._id }`, {

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
