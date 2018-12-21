import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Grid = styled.div` 
  width: 100%;
  margin: 5px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1100px;
  }
`
