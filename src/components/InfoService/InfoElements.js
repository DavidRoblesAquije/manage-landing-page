import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const InfoContainer = styled.div`
    margin-bottom: 35px;

    @media screen and (max-width:991px){
        margin-bottom: 60px;   
    }
`
export const InfoButton = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 20% 80%;

    @media screen and (max-width: 991px){     
        ::before{
            content: '';
            position: absolute;
            top: -11px;
            right: 0;
            width: 95%;
            height: 49px;
            background:var(--palered);
            border-radius: 0 15px 15px 0;
        }
    }

    @media screen and (max-width: 400px){     
        grid-template-columns: 100%;

        ::before{
            top: 38px;
            width: 100%;
            height: 35px;
            border-radius: 15px;
        }
    }
`
export const InfoText = styled.div`
    width: 80%;
    margin-left: auto;

    @media screen and (max-width:991px){
        width: 80%;
        text-align: center;
        margin: auto;
    }

    @media screen and (max-width:400px){
        width: 100%;
    }
`
export const DifferentBtn = styled.div`
    border-radius: 50px;
    background: hsl(12, 88%, 59%);
    white-space: nowrap;
    padding: 10px 0px;
    color: #fff;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    width: 80px;
    text-align: center;
    position: relative;
    top: -11px;    

    @media screen and (max-width:575px){
        width: 60px;
    }
`
export const DifferentH3 = styled.h3`
    position: relative;
    color: var(--blue);
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 30px;

    @media screen and (max-width:400px){
        text-align: center;
    }
`
export const DifferentP = styled.p`
    color: var(--grayishblue);
`