import _ from 'lodash';

export default {

	[ 'SET_LAYOUTS' ]: ( state, payload ) => state.layouts = _.cloneDeep( payload.layouts ),

};
