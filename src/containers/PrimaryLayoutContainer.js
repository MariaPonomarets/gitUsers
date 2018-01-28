import { connect } from 'react-redux';
import PrimaryLayout from '../components/PrimaryLayout';

const mapStateToProps = ({ home }) => (home);

export default connect(mapStateToProps, {})(PrimaryLayout);
