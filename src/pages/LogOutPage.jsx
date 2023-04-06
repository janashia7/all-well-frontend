import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    borderRadius: '50px !important',
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

const LogOutPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleLogOut = async (event) => {
    event.preventDefault();

    navigate(`/`);
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
          You logged out!
        </Typography>

        <Button
          sx={{
            backgroundColor: '#4EE0BC',
            color: 'black',
            width: '350px',
            padding: '10px',
            marginTop: '20px',
          }}
          variant="contained"
          type="submit"
          className={classes.btn}
          onClick={handleLogOut}
        >
          Click here to Access your app again!
        </Button>
      </Container>
    </div>
  );
};

export default LogOutPage;
