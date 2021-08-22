import React from 'react'
import { Container, Text, IconWrapper, Icon } from './CardElements'

export default function Card({ text, icon, avatar, backgroundColor, textColor }) {
    return (
        <Container style={{ backgroundColor: backgroundColor, color: textColor }}>
            <Text>{text}</Text>
            <IconWrapper>
                <Icon>{icon}</Icon>
                <Icon>{avatar}</Icon>
            </IconWrapper>
        </Container>
    )
}
