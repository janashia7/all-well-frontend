import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
  },
  navbar: {
    height: '88px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
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
    height: '360px',
    flexDirection: 'column',
  },

  input: {
    width: '100%',
  },
}));

const AccessPage = () => {
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

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:5000/auth/login', {
        email: email,
        password,
      });
      navigate('/dashboard');
    } catch (e) {
      alert(e.response.data.message);
    }
    // Call function to handle login process and redirect to appropriate page
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
              Access your test app
            </Typography>
          </div>
          <div className={classes.form}>
            <Typography
              sx={{ fontWeight: 'bold', padding: '20px 0' }}
              variant="h5"
            >
              Insert your credentials
            </Typography>
            <form
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                height: '100%',
              }}
              onSubmit={handleLogin}
            >
              <TextField
                className={classes.input}
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                className={classes.input}
                label="Password"
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
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', '& a': { color: 'inherit' } }}
              >
                Have you forgotten your password? Click{' '}
                <Link to="/reset-password">here</Link>
              </Typography>
              <Button
                sx={{ backgroundColor: '#4EE0BC', color: 'black' }}
                variant="contained"
                type="submit"
                className={classes.loginBtn}
              >
                Log In
              </Button>
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', '& a': { color: 'inherit' } }}
              >
                You don't have a profile yet? Sign up{' '}
                <Link color="body1" to="/signup">
                  here
                </Link>
              </Typography>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccessPage;
