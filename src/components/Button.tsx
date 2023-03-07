// import styles from './Button.module.css'
import { ButtonContainer, VariantBtn } from './Button.styles'

interface ButtonProps {
  variant?: VariantBtn
}

// export function Button({ variant = 'primary' }: ButtonProps) {
//   return <button className={`${styles.button} ${styles[props.color]}`}>Enviar</button>
// }

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
