import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NoteLists from './NotesList';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_NOTES = gql`
    query {
        notes {
            id
            title
            body
        }
    }
`;

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

export default function Main() {
    const classes = useStyles();

    return (
        <Query query={GET_NOTES}>
            {({ loading, error, data = [] }) => {
                if (loading) return <div>Loading...</div>;
                if (error) {
                    return <div>Something is horribly wrong</div>;
                }

                return (
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4} ms={4} lg={4} lg={4}>
                                <NoteLists notes={data.notes}></NoteLists>
                            </Grid>
                            <Grid item xs={12} sm={8} ms={8} lg={8} lg={8}>
                                <Paper className={classes.paper}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Morbi rutrum tempus nibh
                                    eget sollicitudin. Integer nunc massa,
                                    condimentum viverra consectetur sit amet,
                                    pretium non lorem. Donec sed ligula vitae
                                    orci pharetra commodo at at nibh. Duis
                                    auctor massa sed aliquet vestibulum. Ut
                                    pretium, risus id sodales tempor, nisl
                                    libero porttitor lacus, a hendrerit ante dui
                                    vel ligula. Etiam finibus sagittis risus
                                    dapibus dignissim. Integer scelerisque
                                    fringilla justo tincidunt tincidunt. Etiam
                                    leo justo, efficitur eget velit in, placerat
                                    mollis purus. Quisque commodo enim eget
                                    tellus pretium commodo. Nunc ut tincidunt
                                    enim, sodales maximus leo. In in nibh eget
                                    lacus molestie molestie. Nam ac elementum
                                    enim, aliquam rhoncus libero. Maecenas
                                    mattis finibus tortor, vel commodo lacus
                                    ullamcorper lobortis. Quisque ut erat at
                                    libero cursus commodo. Etiam et arcu ut quam
                                    cursus sodales. Integer a purus feugiat,
                                    finibus lorem vitae, imperdiet eros. In at
                                    tellus id dolor suscipit scelerisque. Proin
                                    at egestas augue.
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                );
            }}
        </Query>
    );
}
