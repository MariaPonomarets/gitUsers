import { connect } from 'react-redux';
import Home from '../Screens/Home';
import { getUsersList, getFollowersList, getAboutInfo } from '../redux/modules/Home/actions';

const mapStateToProps = ({ home }) => (home);

export default connect(mapStateToProps, {
	getUsersList,
	getFollowersList,
	getAboutInfo
})(Home);
