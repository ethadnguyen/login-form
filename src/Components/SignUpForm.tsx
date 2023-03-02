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
// import SignInForm from './SignInForm';

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

interface SignUpFormProps {
  onSubmit: (name: string, email: string, password: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) {
      setError('Please emter your name.');
      return;
    }
    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    //Validation
    if (!password) {
      setError('Please enter a password.');
      return;
    }

    if (password.length < 8) {
      setError('Your password must be at least 8 characters long.');
      return;
    }

    // Check if passwords match
    if (password !== retypePassword) {
      setError('Passwords do not match.');
      return;
    }

    onSubmit(name, email, password);
    navigate('/');
  };

  return (
    <Box className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant='h5' align='center'>
          Sign Up
        </Typography>
        <TextField
          label='Name'
          variant='outlined'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextField
          label='Retype Password'
          variant='outlined'
          type='password'
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
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
          Sign Up
        </Button>
        <Stack direction='row' justifyContent='center' alignItems='center'>
          <Typography>Already have an account?</Typography>
          <Link to='/signin' className={classes.link}>
            Sign In
          </Link>
        </Stack>
      </form>
    </Box>
  );
};

export default SignUpForm;
