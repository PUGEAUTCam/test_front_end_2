import styled from "styled-components";
import colors from "../styleDefinition/colors";

export const SectionNewSale = styled.section`
    h2{
       margin-top: 70px;
       margin-bottom: 28px;
    }
`

export const CardLot = styled.article`
    width: 140px;
    border-radius: 10px;
    padding: 13px;
    border: 1px solid ${colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 26px;

        div{
            border: 1px solid ${colors.primary};
            background-color: ${colors.primary};
            border-radius: 6px;
            height: 28px;
            width: 82px;
            margin-top: 6px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
`

export const ContainerCardsLots = styled.div`
    display: flex;
    gap: 30px;  
    flex-wrap: wrap;
`

