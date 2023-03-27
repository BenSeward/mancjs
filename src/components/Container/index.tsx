import styles from './Container.module.css'

interface ContainerProps {
    children: JSX.Element | Array<JSX.Element>
}

export const Container = ( { children }: ContainerProps ) => {
  return (
    <div data-testid="page-container" className={ styles.container }>{ children }</div>
  )
}