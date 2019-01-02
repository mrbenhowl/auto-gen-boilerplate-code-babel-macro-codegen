import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`

export const InputWrapper = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 100vw;
  font-family: Arial, Helvetica, sans-serif;

  @media (min-width: 700px) {
    width: 600px;
    margin-bottom: 0px;
    margin-right: 10px;
  }
`

export const Input = styled.input`
  font-size: 1em;
  padding: 10px 20px;
  border-radius: 0;
  width: 100%;
  border:0;  
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;

  @media (min-width: 700px) {
    width: 100px;
  }
`

export const Button = styled.button`
  font-size: 1em;
  padding: 10px 20px;
  color: #fff;
  background-color: #2a3166;
  border-radius: 0;
  width: 100%;
`
