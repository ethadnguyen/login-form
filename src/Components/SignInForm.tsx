import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Box,
  Stack,
  Alert,
  AlertTitle,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
// import SignUpForm from './SignUpForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[3],
    },
    button: {
      marginTop: theme.spacing(2),
    },
    link: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    alert: {
      marginTop: theme.spacing(2),
    },
  })
);

interface SignInFormProps {
  onSubmit: (email: string, password: string) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    if (!email) {
      setError('Please enter your email email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setError('Please enter a password');
      return;
    }
    onSubmit(email, password);
    navigate('/');
  };
  return (
    <Box className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant='h5' align='center'>
          Sign In
        </Typography>
        <TextField
          label='Email'
          variant='outlined'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          variant='outlined'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Alert severity='error' className={classes.alert}>
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          type='submit'
        >
          Sign In
        </Button>
        <Stack direction='row' justifyContent='center' alignItems='center'>
          <Typography>Don't have an account?</Typography>
          <Link to='/signup' className={classes.link}>
            Sign Up
          </Link>
        </Stack>
      </form>
    </Box>
  );
};

export default SignInForm;
