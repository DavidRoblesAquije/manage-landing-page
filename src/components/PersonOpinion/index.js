import React from 'react'

import { ItemContainer, ItemOpinion, ItemPhoto, Itemname } from './PersonElements'

const Person = ({ img, alt, person_name, opinion }) => {
    return (
        <ItemContainer>
            <ItemPhoto>
                <img src={img} alt={alt} />
            </ItemPhoto>
            <Itemname>{person_name}</Itemname>
            <ItemOpinion>{opinion}</ItemOpinion>
        </ItemContainer>
    )
}

export default Person
