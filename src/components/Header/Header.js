import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import useStyles from './style';

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
