import styled from 'styled-components'

export const SimplifyContainer = styled.section`
    position: relative;
    background: var(--red);
    padding: 70px 0;
    overflow: hidden;

    .decoration2{
        position: absolute;
        top: -33px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (max-width:767px){
        padding: 100px 0;
    }
`
export const SimplifyContent = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    justify-items: center;
    align-items: center;

    @media screen and (max-width:1199px){
        grid-template-columns: 50% 50%;
    }
    @media screen and (max-width:991px){
        grid-template-columns: 60% 40%;
    }
    @media screen and (max-width:767px){
        grid-template-columns: 100%;
        text-align: center;
    }
`
export const SimplifyH3 = styled.h3`
    color: var(--white);
    font-size: 35px;
    font-weight: 700;
`
export const SimplifyButton = styled.div`
    justify-self: end;

    @media screen and (max-width:767px){
        justify-self: inherit;
        margin-top: 30px;
    }

    a{
        background: var(--white);
        color: var(--red);
        box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
    }
`