import React from 'react'
import {compose} from "redux"
import {connect} from "react-redux"
import Modal from "../components/Modal/Modal";
import {modal_hide} from "../redux/actions/appActions";

class ModalContainer extends React.Component {

	componentDidMount() {

	}

	componentWillUnmount() {
	}

	render() {
		return (
			<>
				<Modal {...this.props} />
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
		modal_hide
	}),
)(ModalContainer)