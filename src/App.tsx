import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import HomePage from './HomePage/HomePage';
import SignInForm from './Components/SignInForm';
import SignUpForm from './Components/SignUpForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: theme.spacing(3),
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const handleSignIn = (email: string, password: string) => {
    console.log('Sign in:', email, password);
  };
  const handleSignUp = (name: string, email: string, password: string) => {
    console.log('Sign up:', name, email, password);
  };
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Routes>
          <Route
            path='/signup'
            element={<SignUpForm onSubmit={handleSignUp} />}
          />
          <Route
            path='/signin'
            element={<SignInForm onSubmit={handleSignIn} />}
          />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
