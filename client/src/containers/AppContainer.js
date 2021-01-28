import React from 'react'
import {compose} from "redux"
import {connect} from "react-redux"
import {gallery_hide, gallery_show, modal_hide, modal_show} from "../redux/actions/appActions";
import App from "../App";

class AppContainer extends React.Component {

	componentDidMount() {

	}

	componentWillUnmount() {
	}

	render() {
		return (
			<>
				<App {...this.props} />
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		app: state.appReducer.app
	}
}
export default compose(
	connect(mapStateToProps, {
		modal_show,
		gallery_show,
		modal_hide,
		gallery_hide
	}),
)(AppContainer)