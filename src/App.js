import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Main from './components/Main';
import Header from './components/Header';
import ErrorBoundary from './ErrorBoundary';
import NewNote from './components/NewNote';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/new">
                    <New />
                </Route>

                <Route path="/note/:noteId">
                    <Content />
                </Route>

                <Route path="/">
                    <Content />
                </Route>
            </Switch>
        </Router>
    );
}

const New = () => (
    <ErrorBoundary>
        <Container maxWidth="lg">
            <Header />
            <Box my={4}>
                <NewNote note={{ body: '', title: '' }} />
            </Box>
        </Container>
    </ErrorBoundary>
);

const Content = () => (
    <ErrorBoundary>
        <Container maxWidth="lg">
            <Header />
            <Box my={4}>
                <Main />
            </Box>
        </Container>
    </ErrorBoundary>
);
