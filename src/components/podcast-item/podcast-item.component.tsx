import React from 'react';
import {PodcastImageWrapper, PodcastItemWrapper, PodcastTitleContainer} from "./podcast-item.styles";
import Link from "next/link";

const PodcastItem = () => {
    return (
        <Link href="/feed">
            <a>
                <PodcastItemWrapper>
                    <PodcastImageWrapper>
                        <img src="/images/mildly-useful-N_xjrdKZPkw-unsplash.jpg" alt=""/>
                    </PodcastImageWrapper>

                    <PodcastTitleContainer>
                        <p>Episode Title</p>
                        <p>Channel Name</p>
                    </PodcastTitleContainer>
                </PodcastItemWrapper>
            </a>
        </Link>
    );
};

export default PodcastItem;
