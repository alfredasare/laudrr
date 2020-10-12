import React from 'react';
import {PodcastImageWrapper, PodcastItemWrapper, PodcastTitleContainer} from "./podcast-item.styles";
import Link from "next/link";

const PodcastItem = () => {
    return (
        <PodcastItemWrapper>
            <PodcastImageWrapper>
                <Link href="/feed">
                    <a>
                        <img src="/images/images.jpg" alt=""/>
                    </a>
                </Link>
            </PodcastImageWrapper>

            <PodcastTitleContainer>
                <Link href="/feed">
                    <a>
                        <p>Episode Title</p>
                        <p>Channel Name</p>
                    </a>
                </Link>
            </PodcastTitleContainer>
        </PodcastItemWrapper>
    );
};

export default PodcastItem;
