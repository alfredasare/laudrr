import styled from "styled-components";
import {black} from "../../utils";

export const EpisodeItemWrapper = styled.div`
  padding-top: 20px;
  
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const DateUploaded = styled.h5`
  color: rgba(0,0,0,0.9);
`;

export const EpisodeTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 22px;
  font-size: .875rem;
  letter-spacing: .01785714em;
  color: ${black};
  font-weight: 700 !important;
`;

export const EpisodeSummary = styled.p`
  color: ${black};
  font-size: 0.9rem;
  font-weight: 400;
  max-height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-line;
  line-height: 1.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  
`;

export const PlayButtonWithTime = styled.div`
  width: 95px;
  height: 35px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 10px;
  
  span {
    font-size: 0.8rem;
    color: ${black};
    font-weight: 400;
    margin-left: 8px;
  }
`;