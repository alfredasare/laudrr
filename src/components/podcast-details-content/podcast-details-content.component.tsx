import {FC} from 'react';
import Link from "next/link";

import {
    AvailableEpisodesWrapper,
    PodcastDetailsButton,
    PodcastDetailsButtonRow,
    PodcastDetailsChannelImage, PodcastDetailsChannelName,
    PodcastDetailsContentWrapper,
    PodcastDetailsHeader,
    PodcastDetailsHeaderLeftColumn, PodcastDetailsSummary, PodcastDetailsTitle
} from "./podcast-details-content.styles";
import EpisodeList from "../episode-list/episode-list.component";

const PodcastDetailsContent: FC = () => {
    return (
        <PodcastDetailsContentWrapper>
            <PodcastDetailsHeader>
                <PodcastDetailsHeaderLeftColumn>
                    <PodcastDetailsTitle>
                        Waveform: The MKBHD Podcast
                    </PodcastDetailsTitle>
                    <PodcastDetailsChannelName>
                        Studio71
                    </PodcastDetailsChannelName>
                </PodcastDetailsHeaderLeftColumn>

                <PodcastDetailsChannelImage>
                    <img src="/images/max-wolfs-yrVv6pwVp78-unsplash.jpg" alt=""/>
                </PodcastDetailsChannelImage>
            </PodcastDetailsHeader>

            <PodcastDetailsButtonRow>
                <Link href="/">
                    <PodcastDetailsButton>Subscribe</PodcastDetailsButton>
                </Link>
                <Link href="/">
                    <PodcastDetailsButton>Visit website</PodcastDetailsButton>
                </Link>
            </PodcastDetailsButtonRow>

            <PodcastDetailsSummary>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum unde vero. Aliquid ea fugit
                    ratione voluptates? Et, optio, possimus? Animi error eum fugiat itaque nam natus nihil placeat unde!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum unde vero. Aliquid ea fugit
                    ratione voluptates? Et, optio, possimus? Animi error eum fugiat itaque nam natus nihil placeat unde!
                </p>
            </PodcastDetailsSummary>

            <AvailableEpisodesWrapper>
                <h3>Available Episodes</h3>
                <EpisodeList items={[11,12,13,14,15,16,17]}/>
            </AvailableEpisodesWrapper>

        </PodcastDetailsContentWrapper>
    );
};

export default PodcastDetailsContent;
