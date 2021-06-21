import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import '../src/App.css';
import NavBar from '../src/components/NavBar/NavBar';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import { initializeApp } from './redux/app-reducer';
import Preloader from './utils/OverallComponents/Preloader/Preloader';

function App(props) {
  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <div className='app-container'>
      <HeaderContainer />
      <NavBar />
      <Main />
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
