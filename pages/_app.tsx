import Head from "next/head";
import {AppProps} from 'next/app';
import {GlobalStyle} from '../src/utils';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from "react";

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyle/>
            <Head>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
                      rel="stylesheet"/>
                <script
                    src="https://code.jquery.com/jquery-3.3.1.min.js"
                    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                    crossOrigin="anonymous"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App
