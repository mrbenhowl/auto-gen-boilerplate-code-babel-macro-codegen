import { createGlobalStyle } from 'styled-components'
import MajorMonoDisplay from '../../assets/fonts/majorMonoDisplay/majorMonoDisplayRegular.ttf'
import Roboto from '../../assets/fonts/roboto/robotoLight.ttf'

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
    background-color: #cae7df;  
    color: #000;
  }
  input, textarea, button, p, a {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }  
`

export default GlobalStyle
