import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const HeaderContainer = styled.header`
    position: relative;
    height: 100vh;
    min-height:800px;
    max-height:1000px;
    display: flex;
    align-items: center;
    overflow: hidden;

    .decoration1{
        position: absolute;
        z-index: -1;
        top: 0;
        right: -3em;
        width: 40em;
    }

    @media screen and (max-width: 1200px){
        .decoration1{
            width: 35em;
        }
    }

    @media screen and (max-width: 991px){
        .decoration1{
            width: 30em;
        }
    }

    @media screen and (max-width: 767px){
        height: auto;
        min-height: inherit;
        max-height: inherit;
        padding: 150px 0;
    }

    @media screen and (max-width: 575px){
        .decoration1{
            width: 25em;
        }
    }
    @media screen and (max-width: 400px){
        .decoration1{
            width: 20em;
        }
    }
`
export const HeaderContent = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    align-items: center;

    @media screen and (max-width:767px){
        grid-template-columns: 100%;
    }
`
export const HeaderInfo = styled.div`
      @media screen and (max-width:767px){
        text-align: center;
    }
`
export const HeaderH1 = styled.h1`
    font-weight: 700;
    color:var(--blue);
    font-size: 55px;
    margin-bottom: 30px;

    @media screen and (max-width: 1199px){
        font-size: 50px;
    }
    @media screen and (max-width: 991px){
        font-size: 40px;
    }
    @media screen and (max-width: 767px){
        font-size: 45px;
    }
    @media screen and (max-width: 575px){
        font-size: 35px;
    }
`
export const HeaderP = styled.p`
    color: var(--grayishblue);
    margin-bottom: 40px;

    @media screen and (max-width: 400px){
        br{
            display: none;
        }

        padding: 0 15px;
    }
`
export const HeaderImage = styled.div`
    img{
        width:100%;

        @media screen and (max-width: 575px){
            width: 350px;
        }
        @media screen and (max-width: 400px){
            width: 270px;
        }
    }

    @media screen and (max-width: 767px){
        order: -1;
    }
`