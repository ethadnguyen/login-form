import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginTop: theme.spacing(2),
    },
    link: {
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);
const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography>Welcome to my App</Typography>
      <Button className={classes.button}>
        <Link to='/signin' className={classes.link}>
          Sign in
        </Link>
      </Button>
      <Button className={classes.button}>
        <Link to='/signup' className={classes.link}>
          Sign up
        </Link>
      </Button>
    </div>
  );
};

export default HomePage;
