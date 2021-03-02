import React from 'react'
import { SimplifyButton, SimplifyContainer, SimplifyContent, SimplifyH3 } from './SimplifyElements'
import { Button } from '../ButtonElements';
const Simplify = () => {
    return (
        <SimplifyContainer>
            <img className="decoration2" src={require('../../images/bg-simplify-section-desktop.svg').default} alt="information" />

            <div className="container">
                <SimplifyContent>
                    <SimplifyH3>Simplify how your team works today.</SimplifyH3>
                    <SimplifyButton>
                        <Button>Get Started</Button>
                    </SimplifyButton>
                </SimplifyContent>
            </div>
        </SimplifyContainer>
    )
}

export default Simplify
