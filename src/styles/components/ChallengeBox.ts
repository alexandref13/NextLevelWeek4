import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  background: ${props => props.theme.color.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    list-style: 1.4;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }

  p img {
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
  }
`

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: ${props => props.theme.color.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${props => props.theme.color.grayLine};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main strong {
    font-weight: 600;
    font-size: 2rem;
    color: ${props => props.theme.color.title};
    margin: 1.5rem 0 1rem;
  }

  main p {
    line-height: 1.5;
  }

  /* pode se usar tambem 1fr 1fr ou repeat(2, 1fr) */
  footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  footer button {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    color: ${props => props.theme.color.white};
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
  }

  footer button:hover {
    filter: brightness(0.9);
  }
`

export const ChallengeFailedButton = styled.button`
  background: ${props => props.theme.color.red};
`
export const ChallengeSucceededButton = styled.button`
  background: ${props => props.theme.color.green};
`
// @media (max-width: 660px){
//   .challengeActive{
//     max-height: 430px;
//     max-width:660px
//   }
//   .challengeActive main strong{
//     padding: 1rem 0
//   }
//   .challengeActive main p{
//     padding: 2rem 0;
//   }
// }
