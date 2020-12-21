import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

//component
import Room from './Room';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';

const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <p>This is the home page.</p>
        </Route>
        <Route path='/join' component={RoomJoinPage} />
        <Route path='/create' component={CreateRoomPage} />
        <Route path='/room/:roomCode' component={Room} />
      </Switch>
    </Router>
  );
};

export default HomePage;
