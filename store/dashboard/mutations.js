import _ from 'lodash';

export default {

	[ 'SET_DASHBOARD' ]: ( state, payload ) => state.dashboard = _.cloneDeep( payload.dashboard ),

};
