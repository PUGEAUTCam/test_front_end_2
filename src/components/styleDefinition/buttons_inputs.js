import styled from "styled-components";
import colors from "./colors";

export const Button = styled.button`
    background: ${colors.primary};
    border: 1px solid ${colors.primary};
    padding: 16px 24px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    margin: 34px 0px;
    opacity: ${props => props.disabled ? ".6" : "1"};
    transition: all 100ms ease;
        :hover{
            background-color: ${colors.backgroundHeader};
            transform: scale(1.01);
            border: ${colors.backgroundHeader}
        }
`
export const ButtonItem = styled.button`
    background: ${colors.primary};
    border: 1px solid ${colors.primary};
    border-radius: 5px;
    color: white;
    width: 60px;
    height: 60px;
    font-size: 28px;
    margin: 16px 0px;
    transition: all 100ms ease;
        :hover{
            background-color: ${colors.backgroundHeader};
            transform: scale(1.01);
            border: ${colors.backgroundHeader}
        }
`
//////////////////INPUTS //////////////////
export const TextArea = styled.textarea`
    background: ${colors.background}; 
    border: none;
    resize: none;
    outline: none;
    font-family: unset;
    border-bottom: 2px solid #bd17227a;
    min-width: 363px;
    height: 27px;
    cursor: pointer;
    
`
export const Input = styled.input`
    background: ${colors.background}; 
    border: 2px solid #bd17227a;
    resize: none;
    outline: none;
    height: 50px;
    max-width: 467px;
    width: 95%;
    border-radius: 6px;
    margin-bottom: 36px;
    padding-left: 8px;
    cursor: pointer;
`