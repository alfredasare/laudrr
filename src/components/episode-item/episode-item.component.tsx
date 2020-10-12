import Link from "next/link";

import {DateUploaded, EpisodeItemWrapper, EpisodeTitle, EpisodeSummary, PlayButtonWithTime} from "./episode-item.styles";
import {PlayWithCircle} from "../icons/icons.component";

const EpisodeItem = () => {
    return (
        <Link href="/feed/[episode-details]" as={`/feed/234234214`}>
            <a>
                <EpisodeItemWrapper>
                    <DateUploaded>3 days ago</DateUploaded>
                    <EpisodeTitle>Microsoft Surface Duo, Samsung "Nope" 20, & an Airpower Competitor</EpisodeTitle>
                    <EpisodeSummary>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque dolores enim
                        explicabo ipsam iusto, minima nihil officia perspiciatis placeat praesentium qui quis reiciendis
                        similique temporibus vero vitae, voluptatem voluptates.
                    </EpisodeSummary>
                    <PlayButtonWithTime role="button">
                        <PlayWithCircle />
                        <span>10 min</span>
                    </PlayButtonWithTime>
                </EpisodeItemWrapper>
            </a>
        </Link>
    );
};

export default EpisodeItem;

