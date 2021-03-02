import styled from "styled-components";

export const ItemContainer = styled.div`
    position: relative;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ItemPhoto = styled.div`
   position: absolute;
   top: -40px;
   width: 100%;

    img{
        width: 80px;
    }
`
export const Itemname = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: var(--blue);
`
export const ItemOpinion = styled.p`
    font-size: 16px;
    color: var(--grayishblue);
`
