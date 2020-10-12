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
    {ssr: false}
);

const PodcastList: FC<PodcastListProps> = ({items}) => {

    const options = {
        loop: false,
        responsive: {
            0: {
                items: 3,
                margin: 120
            },
            281: {
                items: 3,
                margin: 70
            },
            321: {
                items: 3,
                margin: 40
            },
            500: {
                items: 4,
                margin: 30
            },
            768: {
                items: 4,
                margin: 30
            },
            1024: {
                items: 5,
                margin: 30
            },
            1200: {
                items: 5,
                margin: 50
            },
            1440: {
                items: 5,
                margin: 10
            },
            2000: {
                items: 5,
                margin: -150
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
                                <PodcastItem/>
                            </div>
                        );
                    })
                }
            </Carousel>
        </PodcastListWrapper>
    );
};

export default PodcastList;
