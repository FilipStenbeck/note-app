import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    fab: {
        margin: theme.spacing(1)
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    link: {
        color: 'white'
    }
}));

const WrappedLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link
                            component={WrappedLink}
                            className={classes.link}
                            to={`/`}
                        >
                            Notes
                        </Link>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}></div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Link
                        component={WrappedLink}
                        className={classes.link}
                        to={`/new`}
                    >
                        Create new
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
