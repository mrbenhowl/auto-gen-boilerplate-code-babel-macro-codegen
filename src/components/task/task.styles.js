import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 100%;  
  border: 0;
  overflow-wrap: break-word;  
  position: relative;  
  height: 40px;
`

export const TextArea = styled.textarea`  
  padding: 5px;
  box-sizing: border-box;
  font-size: 1em;
  resize: none;  
  width: 100%;
  border: 0;
  overflow-y: scroll;
  height: 40px;
  position: absolute;
`

export const Bin = styled.div`
  background: url('./src/assets/svg/icons8-trash-can-filled.svg');
  height: 24px;
  width: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
