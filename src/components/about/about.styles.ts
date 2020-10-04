import styled from "styled-components";
import {typeScale} from "../../utils";

export const AboutWrapper = styled.section`
  //margin-top: 200px;
  width: 80%;
  margin: 60px auto 60px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  @media screen and (min-width: 769px) and (max-width: 1100px) {
     margin: 0 auto 60px auto;
  }
  
  @media screen and (min-width: 1101px) {
    margin: 200px auto 60px auto;
  }
`;

export const AboutContent = styled.div`
  width: 100%;


  @media screen and (min-width: 769px) {
    width: 50%;
    margin-right: 50px;
  }
    
  h1 {
    font-weight: 400;
    font-size: 1.8rem;
    
    @media screen and (min-width: 768px) {
      font-size: ${typeScale.header4};
    }
  }
  
  p {
    margin-top: 40px;
    color: rgab(0,0,0,0.7);
    font-size: ${typeScale.paragraph};
    
    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 2rem;
    }
  }
  
`;