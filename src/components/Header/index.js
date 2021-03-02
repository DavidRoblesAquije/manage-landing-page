import React from 'react'
import { Button } from '../ButtonElements'
import { HeaderContainer, HeaderContent, HeaderH1, HeaderImage, HeaderInfo, HeaderP} from './HeaderElements'


const Header = () => {
    return (
        <HeaderContainer>
              <img className="decoration1" src={require('../../images/bg-tablet-pattern.svg').default} alt="information" />

            <div className="container">
                <HeaderContent>
                    <HeaderInfo>
                        <HeaderH1>
                            Bring everyone together to build better products.
                        </HeaderH1>
                        <HeaderP>
                            Manage makes it simple for software teams <br/>to plan day-to-day tasks while keeping the <br/>larger team goals in view.
                        </HeaderP>
                        <Button to="/">Get Started</Button>
                    </HeaderInfo>
                    <HeaderImage>
                        <img src={require('../../images/illustration-intro.svg').default} alt="information" />
                    </HeaderImage>
                </HeaderContent>
            </div>
        </HeaderContainer>
    )
}

export default Header
