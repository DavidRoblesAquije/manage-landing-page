import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Button } from '../ButtonElements';
import Person from '../PersonOpinion';
import { OpinionOne, OpinionTwo, OpinionTree, OpinionFour } from '../PersonOpinion/Data';
import { Item, OpinionButton, OpinionContainer, OpinionTitle, OpinionTitleH2 } from './OpinionElements'

const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: true },
    { width: 768, itemsToShow: 2, pagination: true },
    { width: 1200, itemsToShow: 3 }
];

const Opinion = () => {
    return (
        <OpinionContainer>
            <OpinionTitle>
                <OpinionTitleH2>What they've said</OpinionTitleH2>
            </OpinionTitle>
            <Carousel
                breakPoints={breakPoints}
                showArrows={false}
                pagination={false}
            >
                <Item>
                    <Person {...OpinionOne} />
                </Item>
                <Item>
                    <Person {...OpinionTwo} />
                </Item>
                <Item>
                    <Person {...OpinionTree} />
                </Item>
                <Item>
                    <Person {...OpinionFour} />
                </Item>
            </Carousel>
            <OpinionButton>
                <Button>Get Started</Button>
            </OpinionButton>
        </OpinionContainer>
    )
}

export default Opinion
