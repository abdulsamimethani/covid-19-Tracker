import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: 'orange',
        textTransform: 'uppercase',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
        marginTop: 50
    },
});

export default function Countrystats() {
    const [countrystats, setCountrystats] = useState([{}]);
    useEffect(() => {
        async function getData() {
            const api = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
            const data = await api.json();
            setCountrystats(data.countryitems[0]);
        }
        getData();
    }, [])
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell><h3>Country Name</h3></StyledTableCell>
                        <StyledTableCell align="right"><h3>Country Code</h3></StyledTableCell>
                        <StyledTableCell align="right"><h3>Total Cases</h3></StyledTableCell>
                        <StyledTableCell align="right"><h3>Total Recovered</h3></StyledTableCell>
                        <StyledTableCell align="right"><h3>Total Deaths</h3></StyledTableCell>
                        <StyledTableCell align="right"><h3>Total New Cases Today</h3></StyledTableCell>
                        <StyledTableCell align="right"><h3>Total New Deaths Today</h3></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(countrystats).map((key,ind) => {
                        return (
                            <StyledTableRow key={ind}>
                                <StyledTableCell component="th" scope="row">
                                    {countrystats[key].title}
                                </StyledTableCell>
                                <StyledTableCell align="right">{countrystats[key].code}</StyledTableCell>
                                <StyledTableCell align="right">{countrystats[key].total_cases}</StyledTableCell>
                                <StyledTableCell align="right">{countrystats[key].total_recovered}</StyledTableCell>
                                <StyledTableCell align="right">{countrystats[key].total_deaths}</StyledTableCell>
                                <StyledTableCell align="right">{countrystats[key].total_new_cases_today}</StyledTableCell>
                                <StyledTableCell align="right">{countrystats[key].total_new_deaths_today}</StyledTableCell>
                            </StyledTableRow>

                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

