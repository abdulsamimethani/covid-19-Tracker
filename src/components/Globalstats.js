import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 20
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    global: {
        textTransform:'uppercase',
        color: 'orange',
    }
}));

export default function Globalstats() {
    const [globalstats, setGlobalstats] = useState({});
    useEffect(() => {
        async function getData() {
            const api = await fetch('https://api.thevirustracker.com/free-api?global=stats')
            const data = await api.json();
            delete data.results[0].source
            setGlobalstats(data.results[0]);
        }
        getData();
    }, [])
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(globalstats).map((val, ind) => {
                    return (
                        <Grid item xs={4} key={ind}>
                            <Paper
                                className={classes.paper}
                                elevation={3}
                            >
                                <h3 className={classes.global}>{val.replace(/_/g, " ")}</h3>
                                <h3>{globalstats[val]}</h3>
                            </Paper>
                        </Grid>


                    )
                })}
            </Grid>
           <Chart globalData={globalstats}/>
        </div>
    );
}