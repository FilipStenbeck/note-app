import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Main from './Main';
import Header from './Header';

export default function App() {
    return (
        <Container maxWidth="lg">
            <Header />
            <Box my={4}>
                <Main />
            </Box>
        </Container>
    );
}
