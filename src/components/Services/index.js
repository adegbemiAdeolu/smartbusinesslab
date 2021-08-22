import { AppsOutlined, BrandingWatermarkOutlined, ChevronLeft, ViewQuiltOutlined } from '@material-ui/icons'
import React from 'react'
import Item from '../Item'
import { Container, Wrapper, Heading, ServiceWrap } from './ServicesElements'

export default function Services() {
    return (
        <Container>
            <Wrapper>
                <Heading>
                    We are here to help you with
                </Heading>

                <ServiceWrap>
                    <Item
                        icon={<ViewQuiltOutlined />}
                        heading="UI & UX Design"
                        text="We help concetptualize your idea even before a line of code is written."
                    />

                    <Item
                        icon={<AppsOutlined />}
                        heading="Web & Mobile App"
                        text="We help turn your idea into web products you can be proud of."
                    />

                    <Item
                        icon={<BrandingWatermarkOutlined />}
                        heading="Branding & Marketing"
                        text="We help you turn your product into an online sensation it should be."
                    />
                </ServiceWrap>
            </Wrapper>
            
        </Container>
    )
}
