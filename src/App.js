import { withRouter } from 'react-router-dom';
import '../src/App.css';
import NavBar from '../src/components/NavBar/NavBar';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';

function App(props) {
  return (
    <div className='app-container'>
      <HeaderContainer />
      <NavBar />
      <Main />
    </div>
  );
}

export default withRouter(App);
