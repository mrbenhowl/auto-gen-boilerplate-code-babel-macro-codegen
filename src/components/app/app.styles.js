import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: flex-start;
  flex-direction: column;
`

export const TasksWrapper = styled.div`
  flex-grow: 1;
`

export const FooterWrapper = styled.div`
  align-self: flex-end;  
`

export const TaskListHeadingLoadingFallbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 10rem;
`

export const TaskListHeadingLoadingFallbackContent = styled.div`
  height: 4rem;
  width: 450px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  background-color: #95cfbf;
`

export const AddTaskLoadingFallbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 8rem;
`

export const AddTaskLoadingFallbackContent = styled.div`
  height: 5rem;
  width: 100vw;  
  margin-bottom: 1rem;
  background-color: #95cfbf;

  @media (min-width: 700px) {
    width: 600px;
    height: 3.5rem;    
  }
`
