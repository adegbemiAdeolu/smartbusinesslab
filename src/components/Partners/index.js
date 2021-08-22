import React from 'react'
import Person from '../Person'
import { Container, Wrapper, TopWrapper, Heading, SubHeading, PersonWrapper } from './PartnersElements'
import partners from './Data.json'

export default function Partners() {
    return (
        <Container>
            <Wrapper>
                <TopWrapper>
                    <Heading>
                        Meet the Partners
                    </Heading>
                    <SubHeading>
                        Meet the people who make the magic happen.
                    </SubHeading>
                </TopWrapper>
                
                <PersonWrapper>
                    {partners.map((item) => (
                    <Person 
                        {...item}
                        key={item.id} 
                    />
                    ))}
                </PersonWrapper>
            </Wrapper>
        </Container>
    )
}
