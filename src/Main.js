import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(6, 0, 3)
    }
}));

export default function Main() {
    const classes = useStyles();
    return (
        <Typography className={classes.root} color="textSecondary">
            Here be dragons
        </Typography>
    );
}
