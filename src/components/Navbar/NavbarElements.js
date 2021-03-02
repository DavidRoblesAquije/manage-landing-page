import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    position: absolute;
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    top: 0;
    z-index: 10;
    transition: 0.2s all ease-in-out;
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index:1;
    width:100%;
    padding: 0 15px;
    max-width:1140px;

    @media screen and (max-width:1199px){
        max-width: 960px;
    }
    
    @media screen and (max-width:991px){
        max-width: 720px;
    }
`
export const NavLogo = styled(LinkR)`
    display: flex;
    justify-self:flex-start;
    align-items:center;
    cursor:pointer;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:991px){
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--blue);
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        font-size: 1.8rem;
        cursor: pointer;
        opacity: ${({ isOpen }) => (isOpen ? '0' : '100%')};
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 991px){
        display: none;
    }
`
export const NavItem = styled.li`
    list-style-type: none;
`
export const NavLinks = styled(LinkS)`
    color: hsl(228, 39%, 23%);
    display: flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    transition: all .3s ease-in-out;
    
    :hover{
        color: var(--grayishblue);
    }
`
export const NavButton = styled.div`
    display: flex;
    align-items:center;

    @media screen and (max-width:991px){
        display: none;
    }
`