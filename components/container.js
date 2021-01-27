import styles from './container.module.css'
import cn from 'classnames'

export default function Container({ children, thin, bleed }) {
  return (
    <div className={
      cn(styles['container'], { [styles['container--thin']]: thin, [styles['container--bleed']]: bleed })
    }>
      {children}
    </div>
  )
}