import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginRight: '20px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  btn: {
    borderRadius: '20px !important',
    '&:hover': {
      backgroundColor: '#4EE0BC !important',
      color: 'white',
    },
  },
  form: {
    display: 'flex',
    width: '836px',
    height: '305px',
    flexDirection: 'column',
    alignItems: 'center',
  },

  input: {
    width: '100%',
  },
}));

const DashboardPage = () => {
  const [selected, setSelected] = useState(false);

  const navigate = useNavigate();
  const classes = useStyles();

  const handleLogOut = async (event) => {
    event.preventDefault();
    // Call function to handle login process and redirect to appropriate page
    try {
      await axios.get('https://all-well-9mwe.onrender.com/auth/logout');
      navigate(`/log-out`);
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
        <Typography variant="h3" sx={{ fontWeight: 'bold' }} color={'#006EFF'}>
          This is your beautiful test app!
        </Typography>
        <div className={classes.formContainer}>
          <div className={classes.form}>
            <Typography
              sx={{
                fontWeight: 'bold',
                padding: '20px 0',
                textAlign: 'center',
              }}
              variant="h5"
            >
              This app let’s you change the color of the button below from green
              to red each time you click it! isnt’ that amazing?
            </Typography>
            {!selected ? (
              <Button
                sx={{
                  backgroundColor: '#4EE0BC',
                  color: 'black',
                  padding: '10px',
                }}
                variant="contained"
                type="submit"
                className={classes.btn}
                selected={selected}
                onClick={() => {
                  setSelected(!selected);
                }}
              >
                Change the color of this button now
              </Button>
            ) : (
              <Button
                sx={{
                  '&:hover': {
                    backgroundColor: '#E0574E !important',
                    color: 'white',
                  },
                  backgroundColor: '#E0574E',
                  color: 'black',
                  padding: '10px',
                }}
                variant="contained"
                type="submit"
                className={classes.btn}
                selected={selected}
                onClick={() => {
                  setSelected(!selected);
                }}
              >
                Change the color of this button now
              </Button>
            )}
          </div>
          <Button
            sx={{
              backgroundColor: '#4EE0BC',
              color: 'black',
              width: '105px',
              padding: '10px',
            }}
            variant="contained"
            type="submit"
            className={classes.btn}
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DashboardPage;
