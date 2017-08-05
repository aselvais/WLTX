'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Main from '../components/main';
import * as mainActions from '../actions/mainActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.main
// }))
class MainApp extends Component {
	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);
	}


	render() {
		const { state, actions } = this.props;
		return (
			<Main
				main={state.main}
				{...actions} />
		);
	}
}

export default connect(state => ({
		state: state.main
	}),
	(dispatch) => ({
		actions: bindActionCreators(mainActions, dispatch)
	})
)(MainApp);
