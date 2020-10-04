import {FC} from 'react';
import {PodcastRowHeading, PodcastRowWrapper} from "./podcast-row.styles";
import PodcastList from "../podcast-list/podcast-list.component";

interface PodcastRowProps {
    title: string
}

const PodcastRow: FC<PodcastRowProps> = ({title}) => {
    return (
        <PodcastRowWrapper>
            <PodcastRowHeading>
                {title}
            </PodcastRowHeading>

            <PodcastList items={[1,2,3,4,5, 7, 8, 9, 10]}/>
        </PodcastRowWrapper>
    );
};

export default PodcastRow;
