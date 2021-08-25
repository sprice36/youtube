import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Subscriptions from './pages/Subscriptions';
import Trending from './pages/Trending';

import Sidebar from './components/Sidebar';
import SidebarRow from './components/SidebarRow';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      {/* <Router>
        <Sidebar>
          <Route path='/' component={Home} exact/>
          <Route path='/trending' component={Trending} />
          <Route path='/subscriptions' component={Subscriptions} />
        </Sidebar>
      </Router> */}

    </div>
  );
}

export default App;