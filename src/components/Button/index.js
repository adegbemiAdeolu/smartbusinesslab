import React from 'react'
import { Container, } from './ButtonElements'

export default function Button({ text, onClick }) {
    return (
        <Container >
            {text}            
        </Container>
    )
}
