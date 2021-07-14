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
import { getIsAuth } from './selectors/auth-selectors';
import ErrorAll from './utils/OverallComponents/ErrorAll/ErrorAll';
import Preloader from './utils/OverallComponents/Preloader/Preloader';

const App = (props) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <article className='app-container'>
      {editMode && <ErrorAll />}
      <HeaderContainer />
      <NavBar isAuth={props.isAuth} />
      <Main />
    </article>
  );
};

const mapStateToProps = (state) => ({
  initialized: getInitialized(state),
  isAuth: getIsAuth(state),
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
