export default {

    fileUpload( context, data ) {

        return new Promise( async ( resolve, reject ) => {


            console.log('data.file', data);

            // SET LOADING TRUE

            await this.$http.$post( 
                
                `api/v1/file`, 
                                    
                data.file,

                // {

                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     }

                // }
                
            ).then( response => {

                resolve( response );

            } ).catch( error => {

              reject( error );

		  } );

            // SET LOADING FALSE

        } );       

    },


    getImage(context, data) {

        return new Promise( async ( resolve, reject ) => {

            // SET LOADING TRUE

            await this.$http.$get(
                
                `files/images/{file}`

            ).then( response => {

                resolve( response );

            } ).catch( error => {

              reject( error );

		  } );

            // SET LOADING FALSE

        } );

    },

};
