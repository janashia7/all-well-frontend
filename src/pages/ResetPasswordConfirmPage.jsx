import { useNavigate, useParams } from 'react-router-dom';
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

const ResetPasswordConfirmPage = () => {
  const { token } = useParams();

  const navigate = useNavigate();
  const classes = useStyles();

  const handleReset = (event) => {
    event.preventDefault();
    // Call function to handle login process and redirect to appropriate page
    navigate(`/create-password/${token}`);
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
          <div className={classes.form}>
            <Typography
              sx={{ fontWeight: 'bold', padding: '20px 0' }}
              variant="h5"
            >
              Hi!
              <Typography variant="subtitle2" color="initial">
                We received a request to reset your password. Please click on
                the link below to proceed.
              </Typography>
            </Typography>

            <Button
              sx={{ backgroundColor: '#4EE0BC', color: 'black' }}
              variant="contained"
              type="submit"
              className={classes.btn}
              onClick={handleReset}
            >
              Reset your password
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResetPasswordConfirmPage;
