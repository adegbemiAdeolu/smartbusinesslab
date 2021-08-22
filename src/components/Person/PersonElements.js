import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    justify-content: center;
`

export const Wrapper = styled.div`
    justify-content: center;
`

export const ImageWrapper = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    overflow: hidden;
    margin: auto;
    margin-bottom: 2rem;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Name = styled.h3`
    color: #0B1328;
    margin-bottom: 0.6rem;
`

export const Title = styled.h5`
    color: #F35D23;
    font-weight: 400;
    margin-bottom: 0.5rem;
`

export const Description = styled.p`
    color: #7A7A7A;
    font-size: 0.85rem;
`