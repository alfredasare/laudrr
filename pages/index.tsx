import {GetStaticProps} from "next";

import About from "../src/components/about/about.component";
import NavBar from "../src/components/navbar/navbar.component";
import Landing from "../src/components/landing/landing.component";
import FollowChannel from "../src/components/follow-channel/follow-channel.component";
import FeatureSection from "../src/components/feature-section/feature-section.component";
import Footer from "../src/components/footer/footer.component";


export default function Home() {
    return (
        <>
            <NavBar/>
            <Landing/>
            <About/>
            <FeatureSection img="/images/pexels-ekaterina-bolovtsova-4050214 (1).jpg"
                            heading="LISTEN" text="Just sit back, relax and keep yourself updated "/>
            <FollowChannel/>
            <FeatureSection img="/images/pexels-sound-on-3756858.jpg"
                            heading="LISTEN" text="Just sit back, relax and keep yourself updated "/>
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {}
    };
}
