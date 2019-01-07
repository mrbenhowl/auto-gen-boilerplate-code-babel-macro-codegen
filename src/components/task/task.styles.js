import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 100%;
  cursor: pointer;
  border: ${props => props.showOptions ? '1px solid #2a3166' : '1px solid transparent'};
  min-height: 80px;
  transition: border .2s ease-in;
`

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  min-height: 80px;
  resize: none;
  border: none;
  padding: 10px;  
  background-color: #f4abaa;  
`

export const Content = styled.div`
  border: 0;
  background-color: ${props => (props.showOptions ? 'transparent' : 'white')};
  box-sizing: border-box;
  min-height: 100%;
  padding: 10px;
  transition: background-color .2s ease-in;
`

export const TaskDescription = styled.div``

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
