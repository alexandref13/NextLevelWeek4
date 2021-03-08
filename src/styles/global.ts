import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@media(max-width: 1080px){
  html{
    font-size: 93.75%;
  }
}

@media(max-width: 720px){
  html{
    font-size: 87.5%;
  }
}

body{
  background: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text}
}

body, button, input, textarea{
  font:400 1rem "Inter", sans-serif;
}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
  color: inherit;
}
`
