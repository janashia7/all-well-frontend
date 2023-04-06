import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
  },
  navbar: {
    height: '88px',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex !important',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    marginRight: '20px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  btn: {
    width: '100%',
    borderRadius: '50px !important',
    '&:hover': {
      backgroundColor: '#4EE0BC !important',
      color: 'white',
    },
  },
  form: {
    display: 'flex',
    width: '400px',
    height: '305px',
    flexDirection: 'column',
  },

  input: {
    width: '100%',
  },
}));

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const classes = useStyles();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSentRequest = async (event) => {
    event.preventDefault();
    // Call function to handle login process and redirect to appropriate page
    try {
      const res = await axios.post(
        'http://localhost:5000/password/reset-password-request',
        { email }
      );
      alert(res.data.message);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.navbar}>
        <div style={{ marginLeft: '54px' }}>
          <img src="../assets/all-well-logo.svg" alt="all-well-logo" />
        </div>
      </div>
      <Container
        style={{ height: 'calc(100vh - 88px)' }}
        className={classes.container}
      >
        <div className={classes.logo}>
          <img src="../assets/logo.svg" alt="logo" />
        </div>
        <div className={classes.formContainer}>
          <div className={classes.header}>
            <Typography
              sx={{ fontWeight: 'bold' }}
              color={'#006EFF'}
              variant="h3"
            >
              Reset your password.
            </Typography>
          </div>
          <div className={classes.form}>
            <Typography
              sx={{ fontWeight: 'bold', padding: '20px 0' }}
              variant="h5"
            >
              Have you forgot your password?
              <Typography variant="subtitle2" color="initial">
                Do not worry, insert here your email and we will send you a link
                to reset your password.
              </Typography>
            </Typography>
            <form
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                height: '100%',
              }}
              onSubmit={handleSentRequest}
            >
              <TextField
                className={classes.input}
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
              />
              <Button
                sx={{ backgroundColor: '#4EE0BC', color: 'black' }}
                variant="contained"
                type="submit"
                className={classes.btn}
              >
                Reset your password
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResetPasswordPage;
