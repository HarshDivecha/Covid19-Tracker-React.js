import React from 'react';
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

//functional component
const Cards= ({data: {confirmed, recovered, deaths, lastUpdate} } ) =>{
    if(!confirmed){
        return "Loading...";
    }
    return (
        <div className={StylesProvider.container}>
            {/* Grid Container is a layout format css */}
            <Grid container spacing={3} justify="center">
                {/* on mobile devices take all 12 spaces, on medium or large 3 spaces. */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected) }>
                    <CardContent>
                        {/* gutterBottom provides a nice padding at the bottom */}
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={1 }
                                separator=","
                            />
                        </Typography>

                        <Typography color="textSecondary" > {new Date(lastUpdate).toDateString() } </Typography>
                        <Typography variant="body2"> Number of active covid-19 cases</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={1 }
                                separator=","
                            />
                        </Typography>

                        <Typography color="textSecondary" > {new Date(lastUpdate).toDateString() } </Typography>
                        <Typography variant="body2"> Number of recoveries</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={1 }
                                separator=","
                            />
                        </Typography>

                        <Typography color="textSecondary" > {new Date(lastUpdate).toDateString() } </Typography>
                        <Typography variant="body2"> Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;