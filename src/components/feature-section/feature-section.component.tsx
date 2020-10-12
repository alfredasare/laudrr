import {FC} from 'react';
import {FeatureImageWrapper, FeatureSectionWrapper, FeatureTextWrapper} from "./feature-section.styles";
import Link from "next/link";

interface Props {
    img: string
    heading: string
    text: string
}

const FeatureSection: FC<Props> = ({img, heading, text}) => {
    return (
        <FeatureSectionWrapper>
            <FeatureImageWrapper>
                <img src={img} alt="feature-section-image"/>
            </FeatureImageWrapper>

            <FeatureTextWrapper>
                <h4>{heading}</h4>
                <h3>{text}</h3>
                <Link href="/podcasts">
                    <a>
                        START LISTENING
                    </a>
                </Link>
            </FeatureTextWrapper>
        </FeatureSectionWrapper>
    );
};

export default FeatureSection;
