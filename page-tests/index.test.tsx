import React from 'react';
import {render} from '@testing-library/react';

import Home from "../pages";

describe('home page tests', () => {
    test('snapshot test of home page', () => {
        const {container} = render(<Home />);

        expect(container).toMatchSnapshot();
    })
})