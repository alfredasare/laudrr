import {FC} from 'react';
import uuid from 'react-uuid';
import EpisodeItem from "../episode-item/episode-item.component";

const EpisodeList:FC = () => {
    return (
        <div>
            {
                [11,12,13,14,15,16,17].map(item => <EpisodeItem key={uuid()}/>)
            }
        </div>
    );
};

export default EpisodeList;
