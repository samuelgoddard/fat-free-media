import styles from './container.module.css'
import cn from 'classnames'

export default function Container({ children, thin, bleed, thinner, bleedMobile, fullBleed }) {
  return (
    <div className={
      cn(styles['container'], { 
        [styles['container--thin']]: thin,
        [styles['container--bleed']]: bleed,
        [styles['container--full-bleed']]: fullBleed ,
        [styles['container--thinner']]: thinner,
        [styles['container--bleed-mobile']]: bleedMobile
      })
    }>
      {children}
    </div>
  )
}