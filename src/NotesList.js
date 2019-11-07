import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    list: {
        listStyleType: 'none',
        margin: 'inherit',
        padding: 'unset'
    },
    listItem: {
        paddingBottom: '1em'
    }
}));

export default function NotesList({ notes }) {
    const classes = useStyles();

    return (
        <ul className={classes.list}>
            {notes.map(note => (
                <li key={note.id} className={classes.listItem}>
                    <Paper className={classes.paper}>{note.title}</Paper>
                </li>
            ))}
        </ul>
    );
}
