import React, {useState} from 'react';
import Link from "next/link";
import {NavBarBrand, NavBarContainer, NavBarRow, NavMenuContainer, NavMenuIcon, NavMenuText} from "./navbar.styles";
import Burger from "../burger/burger.component";
import OverlayMenu from "../overlay-menu/overlay-menu.component";

const NavBar = () => {

    const [open, setOpen] = useState<Boolean>(false);

    return (
        <NavBarContainer>
            <OverlayMenu open={open} setOpen={setOpen}/>
            <NavBarRow>
                <Link href="/">
                    <a>
                        <NavBarBrand>laudrr</NavBarBrand>
                    </a>
                </Link>

                <NavMenuContainer>
                    <NavMenuText open={open} onClick={() => setOpen(!open)}>
                        {open ?  `close` : `menu`}
                    </NavMenuText>
                    <NavMenuIcon>
                        <Burger open={open} setOpen={setOpen}/>
                    </NavMenuIcon>
                </NavMenuContainer>
            </NavBarRow>
        </NavBarContainer>
    );
};

export default NavBar;