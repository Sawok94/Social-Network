import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import '../src/App.css';
import NavBar from '../src/components/NavBar/NavBar';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import { getAuthMe } from './redux/auth-reducer';

function App(props) {
  return (
    <div className='app-container'>
      <HeaderContainer />
      <NavBar />
      <Main />
    </div>
  );
}

export default compose(withRouter, connect(null, { getAuthMe }))(App);
