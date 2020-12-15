import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import '../src/App.css';
import Header from '../src/components/Header/Header';
import NavBar from '../src/components/NavBar/NavBar';
import Main from '../src/components/Main/Main';
import Profile from '../src/components/Main/Profile/Profile';
import News from '../src/components/Main/News/News';
import Messages from '../src/components/Main/Messages/Messages';
import Friends from '../src/components/Main/Friends/Friends';
import Music from '../src/components/Main/Music/Music';
import Video from '../src/components/Main/Video/Video';
import Setting from '../src/components/Main/Settings/Settings';

function App() {
  return (
    <div className='app-container'>
      <header className='app-container-header'>
        <Header />
      </header>
      <nav className='app-container-navBar'>
        <NavBar />
        
      </nav>
      <main className='app-container-main'>
        <Main />
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/messages' render={() => <Messages />} />
        <Route path='/friends' render={() => <Friends />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/video' render={() => <Video />} />
        <Route path='/setting' render={() => <Setting />} />
      </main>
    </div>
  );
}

export default withRouter(App);
