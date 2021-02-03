import { withRouter } from 'react-router-dom';
import '../src/App.css';
import Header from '../src/components/Header/Header';
import NavBar from '../src/components/NavBar/NavBar';
import Main from './components/Main/Main';
// import MainContainer from './components/Main/MainContainer';

function App(props) {
  return (
    <div className='app-container'>
      <Header />
      <NavBar />
      <Main />
    </div>
  );
}

export default withRouter(App);
