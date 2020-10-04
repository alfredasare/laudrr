import {FC} from 'react';
import uuid from "react-uuid";
import {ProductListRowWrapper} from "./podcast-row-list.styles";
import PodcastRow from "../podcast-row/podcast-row.component";

const PodcastRowList: FC = () => {
    return (
        <ProductListRowWrapper>
            {
                ["Top podcasts", "Trending podcasts", "Top podcasts in Society & Culture", "Top podcasts in Arts", "Top podcasts in Tech"]
                    .map(item => <PodcastRow key={uuid()} title={item}/>)
            }
        </ProductListRowWrapper>
    );
};

export default PodcastRowList;
