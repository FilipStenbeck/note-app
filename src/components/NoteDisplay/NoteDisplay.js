import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Paper from '@material-ui/core/Paper';
import { gql } from 'apollo-boost';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    button: {
        margin: theme.spacing(1)
    }
}));

const SAVE_NOTE = gql`
    mutation saveNote($id: String, $title: String, $body: String) {
        saveNote(id: $id, title: $title, body: $body) {
            id
            title
            body
        }
    }
`;
export default function NotesDisplay({ note }) {
    const classes = useStyles();
    const [currentNote, setCurrentNote] = useState(note);
    const [saveNote, { data }] = useMutation(SAVE_NOTE);
    const onSave = () => {
        console.log(currentNote);
        saveNote({ variables: currentNote });
    };

    return (
        <div>
            <Paper className={classes.paper}>
                <FormControl fullWidth className={classes.margin}>
                    <InputBase
                        multiline
                        aria-label="minimum height"
                        rows={20}
                        onChange={e =>
                            setCurrentNote({ ...note, body: e.target.value })
                        }
                        defaultValue={currentNote.body}
                    />
                </FormControl>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    onClick={onSave}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </Paper>
        </div>
    );
}
