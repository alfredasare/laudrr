import {FC} from 'react';
import uuid from 'react-uuid';
import EpisodeItem from "../episode-item/episode-item.component";

interface EpisodeListProps {
    items: number[]
}

const EpisodeList:FC<EpisodeListProps> = ({items}) => {
    return (
        <div>
            {
                items.map(item => <EpisodeItem key={uuid()}/>)
            }
        </div>
    );
};

export default EpisodeList;
