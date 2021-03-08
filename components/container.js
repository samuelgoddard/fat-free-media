import styles from './container.module.css'
import cn from 'classnames'

export default function Container({ children, thin, bleed, thinner }) {
  return (
    <div className={
      cn(styles['container'], { [styles['container--thin']]: thin, [styles['container--bleed']]: bleed, [styles['container--thinner']]: thinner })
    }>
      {children}
    </div>
  )
}