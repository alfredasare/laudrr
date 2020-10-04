import {
    FirstHorizontal,
    HorizontalScrollView,
    ImagesWrapper,
    LandingText,
    LandingWrapper,
    SecondHorizontal, ThirdHorizontal
} from "./landing.styles";

const Landing = () => {
    return (
        <LandingWrapper>
            <LandingText>
                <h1>
                    Podcasts you love to listen to all in one place.
                </h1>
            </LandingText>
            <ImagesWrapper>
                <HorizontalScrollView>
                    <FirstHorizontal>
                        <img src="/images/aiony-haust-ZXKL4mwbSRA-unsplash.jpg" alt=""/>
                    </FirstHorizontal>

                    <SecondHorizontal>
                        <img src="/images/melanie-pongratz-BECWWmIuJ2k-unsplash (1).jpg" alt=""/>
                    </SecondHorizontal>

                    <ThirdHorizontal>
                        <img src="/images/max-wolfs-yrVv6pwVp78-unsplash.jpg" alt=""/>
                    </ThirdHorizontal>
                </HorizontalScrollView>
            </ImagesWrapper>
        </LandingWrapper>
    );
};

export default Landing;
