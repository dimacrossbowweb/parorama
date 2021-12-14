import _ from 'lodash';

export default {

    [ 'SET_PAGES' ]: ( state, payload ) => state.pages = _.cloneDeep( payload.pages ),

};
