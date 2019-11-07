import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';

import NewNote from './NewNote';

describe('NewNote', () => {
    it('renders without error', () => {
        TestRenderer.create(
            <MockedProvider mocks={[]} addTypename={false}>
                <NewNote />
            </MockedProvider>
        );
    });

    it('renders without error', () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={[]} addTypename={false}>
                <NewNote note={{ title: '', id: '', body: '' }} />
            </MockedProvider>
        );
        //const tree = component.toJSON();
        //console.log(tree);
    });
});
