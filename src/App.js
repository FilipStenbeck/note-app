import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Main from './Main';
import Header from './Header';

export default function App() {
    return (
        <Container maxWidth="l">
            <Header />
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Note taking app
                </Typography>
                <Main />
            </Box>
        </Container>
    );
}
