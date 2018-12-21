import { createGlobalStyle } from 'styled-components'
import MajorMonoDisplay from '../../assets/fonts/majorMonoDisplay/MajorMonoDisplay-Regular.ttf'
import Roboto from '../../assets/fonts/roboto/Roboto-Light.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MajorMonoDisplay';
    src: url(${MajorMonoDisplay});
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
  }
  body {
    margin: 0;    
    font-family: Roboto, Arial, Helvetica, sans-serif;
    background-color: #cae7df;  
    color: #000;
  }
  input {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
`

export default GlobalStyle
