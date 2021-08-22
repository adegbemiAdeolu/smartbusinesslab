import styled from 'styled-components';
import imageone from '../../images/backgroundone.svg'

export const Container = styled.div`
    padding: 50px 200px;
    background-image:url(${imageone});
    
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const Heading = styled.h1`
    font-weight: 500;
    color: #021E3D;
    margin-bottom: 1.5rem;
`

export const TopWrapper = styled.div`

`

export const SubHeading = styled.p`
    color: #7A7A7A;
    font-size: 0.85rem;
    margin-bottom: 2rem;
`

export const PersonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`