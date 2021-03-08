import styled from 'styled-components'

export const ExperienceBarHeader = styled.header`
  display: flex;
  align-items: center;

  margin-bottom: 2rem;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.color.grayLine};
    margin: 0 1.5rem;
    position: relative;
  }

  div > div {
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.color.green};
  }
`

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
  left: 50%;
`
