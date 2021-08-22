import React from 'react'
import { Container, Wrapper, TextWrapper, ImageBackground, Image, Heading, SubHeading, ButtonContainer, } from './HeroElements'
import heroimage from '../../images/hero1.jpg';
import Button from '../Button';

export default function Hero() {
    return (
        <Container>
            <Wrapper>
                <TextWrapper>
                    <Heading>
                    Full Service Digital Solution
                    </Heading>
                    <SubHeading>
                        Web and mobile app | Branding | Marketing
                    </SubHeading>

                   <Button 
                        text= "Our Work" 
                    />

                    
                    
                </TextWrapper>

                <ImageBackground>
                    <Image src={heroimage} />
                </ImageBackground>
                
            
            </Wrapper>            
        </Container>
    )
}
