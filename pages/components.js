import { Box, Container } from '@material-ui/core'
import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonCustom from '../components/Button';
import CheckboxLabels from '../components/Checkbox';
import SimpleAccordion from '../components/Accordion';



function Components() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Container fixed>
      <Box className='mt-3'>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className='p-2'>
             <ButtonCustom />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className='p-2'>
            <CheckboxLabels />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className='p-2'>
            <SimpleAccordion />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Components