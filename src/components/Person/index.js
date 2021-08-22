import React from 'react'
import { Container, Wrapper, ImageWrapper, Image, DetailsWrapper, Name, Title, Description } from './PersonElements'

export default function Person({ image, name, title, description }) {
    return (
        <Container>
            <Wrapper>
                <ImageWrapper>
                    <Image src={image} />
                </ImageWrapper>
                
                <DetailsWrapper>
                    <Name>{name}</Name>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </DetailsWrapper>
            </Wrapper>
        </Container>
    )
}
