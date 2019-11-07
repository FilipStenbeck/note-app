import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { fontWeight } from '@material-ui/system';
import { black } from 'ansi-colors';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontWeight: 'bold'
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

const WrappedLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
));

const NotesListItem = ({ id, title, classes }) => (
    <li className={classes.listItem}>
        <Link component={WrappedLink} to={`/note/${id}`}>
            <Paper className={classes.paper}>{title}</Paper>
        </Link>
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
