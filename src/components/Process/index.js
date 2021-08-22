import { AccountCircleOutlined, AppsOutlined, Chat, DeveloperModeOutlined, RecordVoiceOverOutlined, ViewQuiltOutlined } from '@material-ui/icons'
import React from 'react'
import Card from '../Card'
import { Container, Wrapper, Heading, ContentWrapper, ItemWrapper, TopCard, Title, SubTitle } from './ProcessElements'

export default function Process() {
    return (
        <Container>
            <Wrapper>
                <Heading> Our Processes</Heading>

                <ContentWrapper>
                    <ItemWrapper>
                        <TopCard>
                            <Card 
                                text="Live chat with client" 
                                icon={<Chat />}
                                avatar={<RecordVoiceOverOutlined />}
                                backgroundColor="#2A8EC9"
                                textColor="#FFFFFF" 
                            />
                        </TopCard>

                        <Title>Client chat</Title>

                        <SubTitle>
                            We have a chat with the client to elicit their requirements so we can build with purpose.
                        </SubTitle>
                    </ItemWrapper>

                    <ItemWrapper>
                        <TopCard>
                            <Card 
                                text="Top class design and use" 
                                icon={<ViewQuiltOutlined />}
                                avatar={<AppsOutlined />}
                                backgroundColor="#FED804"
                                textColor="#FFFFFF" 
                            />
                        </TopCard>

                        <Title>Product creation</Title>

                        <SubTitle>
                            We go into action by creating the Client's dream with the best technology available.
                        </SubTitle>
                    </ItemWrapper>

                    <ItemWrapper>
                        <TopCard>
                            <Card 
                                text="High-level functionality" 
                                icon={<AccountCircleOutlined />}
                                avatar={<DeveloperModeOutlined />}
                                backgroundColor="#F35D23"
                                textColor="#FFFFFF" 
                            />
                        </TopCard>

                        <Title>Optimized architecture</Title>

                        <SubTitle>
                            We make sure your apps are user-appealing through great branding, design and testing.
                        </SubTitle>
                    </ItemWrapper>
                </ContentWrapper>
            </Wrapper>
        </Container>
    )
}
