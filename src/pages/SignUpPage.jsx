import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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
  loginBtn: {
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
    height: '346px',
    flexDirection: 'column',
  },

  input: {
    width: '100%',
  },
}));

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const classes = useStyles();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    // Call function to handle login process and redirect to appropriate page

    try {
      await axios.post('http://localhost:5000/auth/signup', {
        email: email,
        password,
      });
      navigate('/confirm-signup');
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
              Sign-up to your test app.
            </Typography>
          </div>
          <div className={classes.form}>
            <Typography
              sx={{ fontWeight: 'bold', padding: '20px 0' }}
              variant="h5"
            >
              Choose a email and a password
            </Typography>
            <form
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                height: '100%',
              }}
              onSubmit={handleSignUp}
            >
              <TextField
                className={classes.input}
                label="choose a user email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                className={classes.input}
                label="choose a password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                sx={{ backgroundColor: '#4EE0BC', color: 'black' }}
                variant="contained"
                type="submit"
                className={classes.loginBtn}
              >
                Sign-up!
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUpPage;
