import React from 'react'
import { Container, Wrapper, Heading, SubHeader } from './ContactElements'
import Form from '../Form'

export default function Contact() {
    return (
        <Container>
            <Wrapper>
                <Heading>Have a project? Contact us</Heading>
                <SubHeader>Drop a message and we will get back to you in less than 24 hours.</SubHeader>
                <Form />
            </Wrapper>
        </Container>
    )
}
