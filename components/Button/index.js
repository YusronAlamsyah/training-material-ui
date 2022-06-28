import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapcustom: {
      '& > *': {
        margin: theme.spacing(1),
      },'& .customButton' : {
            background: "#9c27b0",
            color: "#FFF",
            '&:hover' : {
                background:"#033e6c"
            }
      },
    },
  }));

function ButtonCustom() {
    const classes = useStyles();

    return (
        <div className={classes.wrapcustom}>
        <h3>Button</h3>
            <Button className='customButton' variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>
        </div>

    )
}

export default ButtonCustom