import {FollowChannelImageWrapper, FollowChannelText, FollowChannelWrapper} from "./follow-channel.styles";
import Link from "next/link";

const FollowChannel = () => {
    return (
        <FollowChannelWrapper>
            <FollowChannelText>
                <h4>FOLLOW YOUR FAVOURITE CHANNELS</h4>
                <h3>Subscribe to your favourite channels so you never miss the latest episodes of your favourite shows</h3>
                <Link href="/">
                    <a>
                        VIEW CHANNELS
                    </a>
                </Link>
            </FollowChannelText>

            <FollowChannelImageWrapper>
                <img src="/images/nadine-shaabana-U_z9Y0rEIJc-unsplash (1).jpg" alt=""/>
            </FollowChannelImageWrapper>
        </FollowChannelWrapper>
    );
};

export default FollowChannel;
