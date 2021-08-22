import { LockOutlined } from '@material-ui/icons'
import React from 'react'
import { Container, Input, TextArea, Button, SmallText } from './FormElements'

export default function Form() {
    return (
        <Container>
            <Input 
                label="name"
                placeholder="Your full name here"
                type="text"
                required
            />

            <Input 
                label="email"
                placeholder="Your email address here"
                type="email"
                required
            />

            <Input
                label="phone"
                placeholder="Your phone no here"
                type="phone"
                required
            />
            <TextArea
                label="textarea"
                placeholder="About your project here"
                type="textarea"
                required
            />

            <Button 
                type="submit"
                label="Submit"
            >Submit</Button>

            <SmallText>
                <LockOutlined style={{fontSize: "0.7rem", marginRight:"8px"}}/>
                Your information is secure and will not be shared with anyone.
            </SmallText>
            
        </Container>
    )
}
