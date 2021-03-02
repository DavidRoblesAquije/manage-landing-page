import React from 'react'
import { DifferentH3, DifferentP, DifferentBtn, InfoContainer, InfoButton, InfoText } from './InfoElements'

const Info = ({ number, title, text }) => {
    return (
        <>
            <InfoContainer>
                <InfoButton>
                    <DifferentBtn>{number}</DifferentBtn>
                    <DifferentH3>{title}</DifferentH3>
                </InfoButton>
                <InfoText>
                    <DifferentP>{text}</DifferentP>
                </InfoText>
            </InfoContainer>
        </>
    )
}

export default Info
