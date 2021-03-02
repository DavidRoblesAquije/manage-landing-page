import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Button = styled(LinkS)`
    position: relative;
    border-radius: 50px;
    background: hsl(12, 88%, 59%);
    white-space: nowrap;
    padding: 10px 30px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 0 5px 20px rgba(242,95,58,.5);
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    z-index: 2;

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

    &:hover::before{
        width: 100%;
    }
`