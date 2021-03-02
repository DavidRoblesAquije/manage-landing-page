import styled from "styled-components";

export const OpinionContainer = styled.section`
    position: relative;
    padding-top: 80px;
    padding-bottom: 200px;

    .rec-pagination button{
      border: 1px solid var(--red);
      box-shadow: none;
    }
    .rec-dot_active{
      background-color: var(--red);
      box-shadow: none;
    }
`

export const OpinionTitle = styled.div`
    position: relative;
    text-align: center;
`

export const OpinionTitleH2 = styled.h2`
    position: relative;
    color: var(--blue);
    font-weight: 700;
    font-size: 35px;
    margin-bottom: 80px;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: var(--lightgray);
  color: #fff;
  margin: 15px;
  margin-top: 45px;
  padding: 0 15px;

  @media screen and (max-width:575px){
    height: 340px;
  }

  :focus{
    outline: none;
  }
`
export const OpinionButton = styled.div`
  position: relative;
  text-align: center;
  margin-top: 50px;
`