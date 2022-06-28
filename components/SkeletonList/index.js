import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import { Container } from '@material-ui/core';

function SkeletonList() {

    return (
        <Container fixed>
            <Box className='mt-3'>
                <Grid container spacing={3}>
                    {Array.from(new Array(12)).map((item, index) => (
                        <Grid key={index} item md={4}>
                            <Box>
                                <Skeleton variant="rect"  height={250} />
                                <Box pt={0.5}>
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}


export default SkeletonList