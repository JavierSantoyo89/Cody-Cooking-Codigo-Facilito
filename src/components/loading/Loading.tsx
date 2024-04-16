
import Style from './loading.module.css'
export const Loading = () => {
  return (
    
    <div className={Style.loader}>
      <div className={Style.panWrapper}>
        <div className={Style.pan}>
          <p>Cargando...</p>
          <div className={Style.food}></div>
          <div className={Style.panBase}></div>
          <div className={Style.panHandle}></div>
        </div>
        <div className={Style.panShadow}></div>
      </div>
    </div>
  )
}
