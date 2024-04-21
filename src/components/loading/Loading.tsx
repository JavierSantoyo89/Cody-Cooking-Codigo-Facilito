import styled from 'styled-components'


export const Loading = () => {
  return (
    <LoadingTitle>Cargando...</LoadingTitle>
    
    // <div className={Style.loader}>
    //   <div className={Style.panWrapper}>
    //     <div className={Style.pan}>
    //       <div className={Style.food}></div>
    //       <div className={Style.panBase}></div>
    //       <div className={Style.panHandle}></div>
    //     </div>
    //     <div className={Style.panShadow}></div>
    //   </div>
    // </div>
  )
}

const LoadingTitle = styled.h1`
  color: #2b2b2b;
  font-size: 90px;
  text-align: center;
`
