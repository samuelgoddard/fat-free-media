import styles from './button.module.css'
import Link from 'next/link'
import cn from 'classnames'

export default function Button({secondary, link, children}) {
  return (
    <Link href={link ? link : '#'}>
      <a
        type="button"
        className={
          cn(styles['btn'],{ [styles['btn--secondary']]: secondary })
        }
      >
        {children}
      </a>
    </Link>
  )
}
