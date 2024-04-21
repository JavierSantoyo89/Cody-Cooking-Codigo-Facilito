import styled from 'styled-components'


export const Loading = () => {
  return (
    <LoadingTitle>Cargando...</LoadingTitle>
  )
}

const LoadingTitle = styled.h1`
  color: #2b2b2b;
  font-size: 90px;
  text-align: center;
`
