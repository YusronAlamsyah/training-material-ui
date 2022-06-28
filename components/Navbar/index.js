import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const router = useRouter()


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography onClick={() => router.push('/')} variant="h6" className={classes.title}>
            Home
          </Typography>
          <Button onClick={() => router.push('/components')} color="inherit">Components</Button>
          <Button onClick={() => router.push('/skeleton')} color="inherit">Skeleton</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}