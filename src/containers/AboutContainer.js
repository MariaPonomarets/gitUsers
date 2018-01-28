import { connect } from 'react-redux';
import About from '../Screens/About';

const mapStateToProps = ({ home: { aboutMe } }) => ({aboutMe});

export default connect(mapStateToProps, {
})(About);

