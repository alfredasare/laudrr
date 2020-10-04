import React, {useEffect} from 'react';
import {MenuContent, Overlay, StyledMenu} from "./overlay-menu.styles";
import Link from "next/link";

const OverlayMenu = ({open, setOpen}) => {

    const isHidden = !!open;

    useEffect(() => {
        if (open) {
            document.querySelector("html").classList.add("hide-overflow");
        } else {
            document.querySelector("html").classList.remove("hide-overflow");
        }
    });

    return (
        <Overlay open={open} onClick={() => setOpen(!open)}>
            <StyledMenu open={open} aria-hidden={!isHidden}>
                <Link href="/">
                    <a>
                        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                            Home
                        </MenuContent>
                    </a>
                </Link>

                <Link href="/podcasts">
                    <a>
                        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                            Podcasts
                        </MenuContent>
                    </a>
                </Link>
            </StyledMenu>
        </Overlay>
    );
};

export default OverlayMenu;
