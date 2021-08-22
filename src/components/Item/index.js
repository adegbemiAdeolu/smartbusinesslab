import React from 'react'
import { Container, Wrapper, TitleWrap, IconWrapper, Heading, Text } from './ItemELements'

export default function Item({ icon, heading, text }) {
    return (
        <Container>
            <Wrapper>
                <TitleWrap>
                    <IconWrapper>
                        {icon}
                    </IconWrapper>
                    <Heading>
                        {heading}
                    </Heading>
                </TitleWrap>

                <Text>
                    {text}
                </Text>
            </Wrapper>
        </Container>
    )
}
