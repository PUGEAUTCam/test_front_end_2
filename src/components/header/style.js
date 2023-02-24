import styled from "styled-components";
import colors from "../styleDefinition/colors";
import { device } from "../styleDefinition/mediaQueries";

export const LayoutHeader = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 13px;

        img{
            width: 170px;
            :hover{
                transform: scale(1.01);
                transition: all 300ms ease;
            }
            @media ${device.mobile}{
                width: 40px;
            }
        }

        ul{
            display: flex;
            padding-left: 0px;
        }
        
        li{
            padding: 0px 30px;
            color: white;
            :hover{  
                color: ${colors.primary}
        }
            :active{
                color: ${colors.primary}    
        }
    }

`

