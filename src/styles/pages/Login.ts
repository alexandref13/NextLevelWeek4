import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;
  background: ${props => props.theme.color.blue};
`
export const Symbol = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Welcome = styled.div`
  display: flex;
  align-items: center;

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  }

  main > img {
    height: 76px;
    width: 360px;
    margin-bottom: 6rem;
  }

  main strong {
    font-size: 2.25rem;
    color: ${props => props.theme.color.white};
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
`

export const GithubContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;

  img {
    height: 40px;
    width: 40px;
  }

  p {
    max-width: 15.875rem;
    width: 100%;
    margin-left: 1.5rem;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${props => props.theme.color.textHighlight};
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    height: 80px;
    width: 340px;
    border: 0;
    background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
    padding: 1rem 7rem 1rem 1rem;
    font-weight: 400;
    color: ${props => props.theme.color.textHighlight};
    font-size: 1.25rem;
    border-radius: 5px;
    margin-right: 0.9375rem;
  }

  input::placeholder {
    font-weight: 400;
    color: ${props => props.theme.color.textHighlight};
    font-size: 1.25rem;
  }

  input:hover {
    border: 1.5px solid #414aa3;
  }

  input:focus::placeholder {
    color: transparent;
  }

  input:focus {
    border: 1.5px solid #414aa3;
    outline: none;
  }

  button {
    width: 80px;
    height: 80px;
    border: 0;
    background: ${props => props.theme.color.blueDark};
  }

  button img {
    width: 24px;
    height: 24px;
    color: ${props => props.theme.color.white};
  }
`
/* .container{

  background-color: var(--blue);
}

@media (max-width: 1240px){
  .container{
    max-width:1240px;
    width: 100vw;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-image: url('/Simbolo.svg') no-repeat center;
  }
  .symbol img {
    display: none
  }
  .wellcome main{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    z-index: 5;
    overflow: hidden;
  }

  .wellcome .inputContainer input{
    width: 280px;
  }

  .wellcome .inputContainer input::placeholder{
    font-size: 1.2rem;
  }
}

.symbol{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.wellcome{
  display: flex;
  align-items: center;
}

.wellcome main{
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.wellcome main > img{
  height: 76px;
  width: 360px;
  margin-bottom: 6rem;
}

.wellcome main strong{
  font-size: 2.25rem;
  color: var(--white);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.githubContainer{
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
}

.githubContainer img{
  height: 40px;
  width: 40px;
}

.githubContainer p {
  max-width: 15.875rem;
  width: 100%;
  margin-left: 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-highlight)
}

.inputContainer{
  display: flex;
  align-items: center;
}

.inputContainer input{
  height: 80px;
  width: 340px;
  border: 0;
  background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);
  padding: 1rem 7rem 1rem 1rem ;
  font-weight: 400;
  color: var(--text-highlight);
  font-size: 1.25rem;
  border-radius: 5px;
  margin-right: 0.9375rem;
}

.inputContainer input::placeholder{
  font-weight: 400;
  color: var(--text-highlight);
  font-size: 1.25rem;
}

.inputContainer input:hover{
  border: 1.5px solid #414AA3;
}

.inputContainer input:focus::placeholder {
  color: transparent;
}

.inputContainer input:focus{
  border: 1.5px solid #414AA3;
  outline: none;
}

.inputContainer button{
  width: 80px;
  height: 80px;
  border: 0;
  background: var(--blue-dark);
}

.inputContainer button img{
  width: 24px;
  height: 24px;
  color: var(--white);
} */
