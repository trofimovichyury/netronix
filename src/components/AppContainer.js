import { connect } from 'react-redux';
import App from './App';
import { UPDATE_MEASUREMENTS } from '../saga';

const mapStateToProps = state => ({
    measurements: state.measurements
});

const mapDispatchToProps = dispatch => ({
    onMessage: message => dispatch({ type: UPDATE_MEASUREMENTS, message })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);