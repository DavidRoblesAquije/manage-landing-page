import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
    display:none;
    position: fixed;    
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, black, transparent);
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '999' : '-100')};


    @media screen and (max-width:991px){
        display: block;
    }
`
export const CloseIcon = styled(FaTimes)`
    color: var(--blue);
`
export const Icon = styled.div`
    position: absolute;
    top: 10px;
    right: 15px;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline:none;
`
export const SidebarWrapper = styled.div`
    background: var(--white);
    position: absolute;
    width: 90%;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    border-radius: 5px;
`
export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5,80px);
    text-align:center;

    @media screen and (max-width:768px){
        grid-template-rows: repeat(5,60px);
    }
`
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: var(--blue);
    font-weight: 700;
    cursor: pointer;

    &:hover{
        color: var(--red);
        transition: 0.2s ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`
export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: var(--red);
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: 0.3s ease-in-out;
        background: #fff;
        color: #010606;
    }
`