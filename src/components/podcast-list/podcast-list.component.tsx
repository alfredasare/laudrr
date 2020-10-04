import {FC} from 'react';
import dynamic from "next/dynamic";
import uuid from "react-uuid";
import {PodcastListWrapper} from "./podcast-list.styles";
import PodcastItem from "../podcast-item/podcast-item.component";

interface PodcastListProps {
    items: number[]
}

const Carousel = dynamic(
    () => import('react-owl-carousel-safe'),
    { ssr: false }
);

const PodcastList: FC<PodcastListProps> = ({items}) => {

    const options = {
        loop: false,
        responsive: {
            0: {
                items: 3,
                margin: 100
            },
            768: {
                items: 4,
                margin: 20
            },
            1000: {
                items: 5,
                margin: 20
            },
            1440: {
                items:5,
                margin: 20
            },
            1800: {
                items: 6,
                margin: 0
            },
            2100: {
                items: 8,
                margin: 0
            }
        }
    }

    return (
        <PodcastListWrapper>
            <Carousel
                className="owl-theme" {...options}>
                {
                    items.map(item => {
                        return (
                            <div key={uuid()} className="item">
                                <PodcastItem />
                            </div>
                        );
                    })
                }
            </Carousel>
        </PodcastListWrapper>
    );
};

export default PodcastList;
