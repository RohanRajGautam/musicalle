import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';

const Room = (props) => {
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  const roomCode = props.match.params.roomCode;

  useEffect(() => {
    getRoomDetails();
  });

  const getRoomDetails = async () => {
    const response = await fetch(`/api/get-room?code=${roomCode}`);
    if (!response.ok) {
      props.leaveRoomCallback();
      props.history.push('/');
    }
    const data = await response.json();
    setVotesToSkip(data.votes_to_skip);
    setGuestCanPause(data.guest_can_pause);
    setIsHost(data.is_host);
  };

  const leaveButtonPressed = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    await fetch(`/api/leave-room`, requestOptions).then((_response) => {
      props.leaveRoomCallback();
      props.history.push('/');
    });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align='center'>
        <Typography variant='h4' component='h4'>
          Code: {roomCode}
        </Typography>
      </Grid>
      <Grid item xs={12} align='center'>
        <Typography variant='h6' component='h6'>
          Votes: {votesToSkip}
        </Typography>
      </Grid>
      <Grid item xs={12} align='center'>
        <Typography variant='h6' component='h6'>
          Guest Can Pause: {guestCanPause.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12} align='center'>
        <Typography variant='h6' component='h6'>
          Host: {isHost.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12} align='center'>
        <Button
          variant='contained'
          color='secondary'
          onClick={leaveButtonPressed}
        >
          Leave Room
        </Button>
      </Grid>
    </Grid>
  );
};

export default Room;
