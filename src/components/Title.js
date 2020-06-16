import React from "react"
import styled from "styled-components"

const TitleWrapper = styled.div`
  text-transform: uppercase;
  margin-bottom: 2rem;
  h4{
    font-size: 2.5rem;
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  
  .title{
    color: var(--mainBlack);
  }
  
  span{
    display: block;
  }
  
  @media (min-width:576px) {
    span{
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

const Title = ({titulo, subtitulo}) => {
  return (
    <TitleWrapper>
      <h4>
        <span className='title'>{titulo}</span>
        <span>{subtitulo}</span>
      </h4>
    </TitleWrapper>
  )
}

export default Title
