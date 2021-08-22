import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 5rem;
`

export const Input = styled.input`
    margin-bottom: 1rem;
    height: 50px;
    border-radius: 5px;
    border: none;
    padding-left: 7px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px;

    &::placeholder {
        padding-left: 7px;
    }
`

export const TextArea = styled.textarea`
    margin-bottom: 2rem;
    height: 200px;
    border-radius: 5px;
    border: none;
    padding-left: 7px;
    padding-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px;

    &::placeholder {
        padding-left: 7px;
        margin-top: 0;
    }
`

export const Button = styled.button`
    width: fit-content;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #FD5263;
    color: #FFFFFF;
    margin: auto;
    margin-bottom: 1rem;
`

export const SmallText = styled.small`
    font-size: 0.7rem;
    color: #868886;
    align-items: center;
    font-weight: 300;

`