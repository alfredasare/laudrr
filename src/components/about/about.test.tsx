import React from 'react';
import {render, screen} from "@testing-library/react";

import About from "./about.component";

describe('Renders about component', () => {
   test('renders h1 and p tag', () => {
       render(<About/>);

       expect(screen.getByRole('heading', {name: /about laudrr/i})).toBeInTheDocument();

       expect(screen.getByText(/lorem/i)).toBeInTheDocument();
   });
});