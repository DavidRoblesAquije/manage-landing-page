import React from 'react'
import { Button } from '../ButtonElements'
import Info from '../InfoService'
import { infoOne, infoThree, infoTwo } from '../InfoService/Data'
import { ServiceContainer, ServiceContent, ServiceDifferent, ServiceH2, ServiceP, ServiceList} from './ServiceElements'
const Service = () => {
    return (
        <ServiceContainer>
            <div className="container">
                <ServiceContent>
                    <ServiceDifferent>
                        <ServiceH2>What's different about Manage?</ServiceH2>
                        <ServiceP>Manage provides all the functionality your <br/>team needs, without the complexity. Our <br/>software is tailor-made for modern digital <br/>product teams.</ServiceP>
                    </ServiceDifferent>

                    <ServiceList>
                        <Info {...infoOne} />
                        <Info {...infoTwo} />
                        <Info {...infoThree} />
                    </ServiceList>
                </ServiceContent>
            </div>
        </ServiceContainer>
    )
}

export default Service
