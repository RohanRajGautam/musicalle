import React, { useState, useEffect } from 'react';
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

//mui
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';

const renderHomePage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} align='center'>
        <Typography variant='h3' compact='h3'>
          House Party
        </Typography>
      </Grid>
      <Grid item xs={12} align='center'>
        <ButtonGroup disableElevation variant='contained' color='primary'>
          <Button color='primary' to='/join' component={Link}>
            Join a Room
          </Button>
          <Button color='secondary' to='/create' component={Link}>
            Create a Room
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

const HomePage = () => {
  const [roomCode, setRoomCode] = null;

  useEffect(async () => {
    fetch('/api/user-in-room')
      .then((response) => response.json())
      .then((data) => {
        setRoomCode: data.code;
      });
  });

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return roomCode ? (
              <Redirect to={`/room/${roomCode}`} />
            ) : (
              renderHomePage()
            );
          }}
        />
        <Route path='/join' component={RoomJoinPage} />
        <Route path='/create' component={CreateRoomPage} />
        <Route path='/room/:roomCode' component={Room} />
      </Switch>
    </Router>
  );
};

export default HomePage;
