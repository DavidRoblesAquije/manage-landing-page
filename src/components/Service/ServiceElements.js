import styled from 'styled-components';

export const ServiceContainer = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`
export const ServiceContent = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;

    @media screen and (max-width:991px){
        grid-template-columns: 100%;
    }
`
export const ServiceDifferent = styled.div`
    @media screen and (max-width:991px){
        text-align:center;
        margin-bottom: 50px;
    }
`
export const ServiceList = styled.div`

`
export const ServiceH2 = styled.h2`
    font-weight: 700;
    color:var(--blue);
    font-size: 40px;
    margin-bottom: 30px;

    @media screen and (max-width:1199px){
        font-size: 35px;
    }
    @media screen and (max-width:991px){
        font-size: 40px;
    }
    @media screen and (max-width:575px){
        font-size: 30px;
    }
`
export const ServiceP = styled.p`
    color: var(--grayishblue);

    @media screen and (max-width:575px){
       br{
           display: none;
       }
    }
`