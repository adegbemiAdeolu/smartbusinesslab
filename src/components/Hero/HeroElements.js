import styled from 'styled-components'

export const Container = styled.div`
    /* background-color: #242424; */
    padding: 50px 200px;
    height: 550px;
`

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    margin: 0;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const ImageBackground = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    align-items: right;
    border-radius: 0 70px; 
    border-style: none;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 90px;

`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    /* mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); */
`

export const Heading = styled.h1`
    display: flex;
    width: 500px;
    align-items: center;
    color: #1E3446;
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 1rem;
`

export const SubHeading = styled.h4`
    font-weight: normal;
    margin-bottom: 1rem;
`