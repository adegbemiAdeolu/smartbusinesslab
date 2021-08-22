import styled from 'styled-components'
import image from '../../images/contactbackground.svg'

export const Container = styled.div`
    display: flex;
    padding: 4rem 1rem;
    background-image:url(${image});
`

export const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    justify-content: center;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 90px;
    border-radius: 20px;
    padding: 3rem;
    text-align: center;
    background-color: #FFFFFF;
`

export const Heading = styled.h2`
    font-weight: 500;
    color: #021E3D;
    margin-bottom: 1.5rem;
`

export const SubHeader = styled.p`
    color: #7A7A7A;
    font-size: 0.85rem;
    margin-bottom: 2rem;
`