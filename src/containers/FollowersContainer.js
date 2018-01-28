import { connect } from 'react-redux';
import FollowersList from '../Screens/FollowersList';
import { getFollowersList } from '../redux/modules/Home/actions';

const mapStateToProps = ({ home }) => (home);

export default connect(mapStateToProps, {
	getFollowersList
})(FollowersList);

