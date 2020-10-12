import React from "react";
import {render, screen} from "@testing-library/react";

import OverlayMenu from "./overlay-menu.component";

const open = false;
const setOpen = jest.fn();

describe("overlay menu tests", () => {
   test("links go to the right pages", () => {
       render(<OverlayMenu open={open} setOpen={setOpen}/>)

       const links = screen.getAllByRole('link', {hidden: true});

       expect(links[0]).toHaveAttribute('href', '/');
       expect(links[1]).toHaveAttribute('href', '/podcasts');
   });
});