import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

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

const NotesListItem = ({ id, title, classes }) => (
    <li className={classes.listItem}>
        <Paper className={classes.paper}>
            <Link to={`/note/${id}`}> {title}</Link>
        </Paper>
    </li>
);

export default function NotesList({ notes }) {
    const classes = useStyles();

    return (
        <ul className={classes.list}>
            {notes.map(note => (
                <NotesListItem
                    key={note.id}
                    classes={classes}
                    id={note.id}
                    title={note.title}
                />
            ))}
        </ul>
    );
}
