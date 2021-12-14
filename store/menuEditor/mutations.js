export default {

    [ 'SET_MENUS' ]: ( state, payload ) => state.menus = _.cloneDeep( payload.menus ),

};
