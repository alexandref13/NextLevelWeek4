import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;
  }

  div strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.color.title};
  }

  div p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  div p img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`

// @media (max-width: 660px){
//   .profileContainer {
//     margin-top: 1rem;
//   }
// }
