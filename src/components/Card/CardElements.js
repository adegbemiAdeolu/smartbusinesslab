import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 10px;
    width: 120px;
    height: 150px;
    padding: 50px 16px 16px 16px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 90px;

    &:hover {
        
    }
`

export const Text = styled.p`
    font-size: 0.7rem;
    margin-bottom: 1rem;
    text-align: left;
    font-weight: 600;
`

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content:space-between;
`

export const Icon = styled.div`
    color: #FFFFFF;
    padding: 3px;
    margin-right: 0.5rem;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
`