import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { gql } from 'apollo-boost';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

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
    mutation addNote($title: String, $body: String) {
        addNote(title: $title, body: $body) {
            title
            body
        }
    }
`;

export default function NewNote({ note }) {
    const classes = useStyles();
    const [currentNote, setCurrentNote] = useState({ note });
    const [toHome, setToHome] = useState(false);
    const [saveNote] = useMutation(SAVE_NOTE);

    useEffect(() => {
        setCurrentNote(note);
    }, [note]);

    const onSave = () => {
        saveNote({ variables: currentNote });
        setToHome(true);
    };

    return (
        <div>
            {toHome ? <Redirect to="/"></Redirect> : null}
            <Paper className={classes.paper}>
                <FormControl fullWidth className={classes.margin}>
                    <InputBase
                        multiline
                        aria-label="minimum height"
                        rows={15}
                        onChange={e => {
                            setCurrentNote({
                                ...currentNote,
                                body: e.target.value
                            });
                        }}
                        value={currentNote.body}
                    />
                </FormControl>

                <TextField
                    id="outlined-basic"
                    className={classes.textField}
                    label="Note Titel"
                    margin="normal"
                    variant="outlined"
                    onChange={e => {
                        setCurrentNote({
                            ...currentNote,
                            title: e.target.value
                        });
                    }}
                />
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        onClick={onSave}
                        value={currentNote.title}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </div>
            </Paper>
        </div>
    );
}
