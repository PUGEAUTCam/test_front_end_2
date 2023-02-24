import styled from "styled-components";
import { device } from "../styleDefinition/mediaQueries";

export const SectionHomePage = styled.section`
    background: white;
    padding: 22px 36px;
    border-radius: 10px;
    margin: 30px 0px;
`

export const CardsContainer = styled.div`
    display: flex;
    gap: 66px;
    flex-wrap: wrap;
    @media ${device.tablet}{
        justify-content: center;
    }
`

export const Card = styled.article`
    max-width: 330px;
    border-radius: 10px;
    border: 1px solid #dddcdc;
    transition: all 300ms ease;
    cursor: pointer;
        :hover{
            transform: scale(1.005);
            box-shadow: 4px 3px 15px rgba(224, 221, 221, 0.315);
        }
`

export const Img = styled.div`
        img{
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 10px 10px 0px 0px;
        }
`

export const TextContainer = styled.div`
    padding: 20px;
`



