import React from 'react';
import {CopyrightColumn, FirstRow, FooterWrapper, SecondRow, Contact} from "./footer.styles";
import Link from "next/link";

const Footer = () => {
    return (
        <FooterWrapper>
            <FirstRow>
                <h4>laudrr.</h4>
                <h5>Connecting you to your favourite channels</h5>
            </FirstRow>

            <SecondRow>
                <CopyrightColumn>
                    <Link href="/">
                        <a>Terms of service</a>
                    </Link>
                    <Link href="/">
                        <a>Privacy</a>
                    </Link>
                    <Link href="/">
                        <a>Site credits</a>
                    </Link>
                    <span>© laudrr 2020</span>
                </CopyrightColumn>

                <Contact>
                    <h2>Get in touch</h2>
                    <h4>We communicate primarily via mail</h4>
                    <h4>Contact us on </h4> <a href="mailto:info@laudrr.com?subject=Contact%laudrr">info@laudrr.com</a>
                </Contact>
            </SecondRow>
        </FooterWrapper>
    );
};

export default Footer;
