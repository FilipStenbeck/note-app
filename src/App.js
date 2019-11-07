import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Main from './components/Main';
import Header from './components/Header';

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
