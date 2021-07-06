import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import '../src/App.css';
import NavBar from '../src/components/NavBar/NavBar';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import { initializeApp } from './redux/app-reducer';
import { getInitialized } from './selectors/app-selectors ';
import ErrorAll from './utils/OverallComponents/ErrorAll/ErrorAll';
import Preloader from './utils/OverallComponents/Preloader/Preloader';

function App(props) {
  const [editMode, setEditMode] = useState(false);

  const allError = () => {
    setEditMode(true);
    const timer = setTimeout(() => {
      setEditMode(false);
      clearTimeout(timer);
    }, 5000);
  };

  useEffect(() => {
    props.initializeApp();
    window.addEventListener('unhandledrejection', allError);
    return () => {
      window.removeEventListener('unhandledrejection', allError);
    };
  }, [props]);

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <div className='app-container'>
      {editMode && <ErrorAll />}
      <HeaderContainer />
      <NavBar />
      <Main />
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: getInitialized(state),
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
