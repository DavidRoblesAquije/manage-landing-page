import styled from "styled-components";
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    position: relative;
    background-color: var(--darkblue);
    color: var(--white);
    padding: 50px 0;

    @media screen and (max-width:991px){
        text-align: center;
    }
`
export const FooterContent = styled.div`
    display: grid;
    grid-template-columns: 25% 50% 25%;

    @media screen and (max-width:991px){
        grid-template-columns: 100%;
    }
`
export const FooterCol = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 100%;

    @media screen and (max-width:991px){  
        &.col3{
            order: -1;
            justify-self: center;
        }
        &.col2{
            order: 1;
        }
        &.col1{
            order: 2;
            text-align: center;
        }
    }
`
export const FooterSocialMedia = styled.div`
        align-self: end;

        @media screen and (max-width: 991px){
            order: -1;
            margin-bottom: 30px;

            img{
                width: 35px;
            }
        }

        @media screen and (max-width: 400px){
            img{
                width: 25px;
            }
        }
`
export const FooterLinks = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    @media screen and (max-width:991px){
        margin-top: 50px;
        margin-bottom: 50px;
    }
`
export const SocialIconLink = styled.a`
    margin-right: 15px;

    @media screen and (max-width:991px){
        margin-right: 0;
        margin: 0 15px;
    }
`
export const FooterLinkItems = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:991px){
        text-align: center;
    }
`
export const FooterLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: var(--red);
        transition: all 0.2s ease-in-out;
    }
`

export const FooterForm = styled.form`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: max-content;    
`
export const FooterFormData = styled.div`
    position: relative;
    margin-right: 10px;
    display: flex;
    flex-direction: column;

    .mensaje{
        font-size: 10px;
        color: var(--red);
        position: absolute;
        bottom: -20px;
        left: 0;
    }
`
export const FooterFormInput = styled.input`
    border-radius: 50px;
    background: var(--white);
    padding: 10px 15px;
    color: var(--blue);
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;

    ::placeholder{
        color: var(--grayishblue);
    }
`
export const FooterFormButton = styled.button`
    position: relative;
    border-radius: 50px;
    background: var(--red);
    padding: 10px 20px;
    color: var(--white);
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    font-size: 12px;
    overflow: hidden;
    transition: all .3s ease-in-out;

    
    ::before{
        content: '';
        position: absolute;
        width: 0%;
        height: 100%;
        background:var(--white);
        top: 0;
        left: 0;
        opacity: .4;
        z-index: 1;
        transition: all .3s ease-in-out;
    }

    :hover::before{
        width: 100%;
    }
`
export const FooterReserved = styled.span`
    position: absolute;
    bottom: 0;
    right: 15px;
    font-size: 12px;
    color:var(--grayishblue);

    @media screen and (max-width:991px){
        position: relative;
        right: inherit;
    }
`