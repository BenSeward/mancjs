interface ContainerProps {
    children: JSX.Element | Array<JSX.Element>
}

export const Container = ( { children }: ContainerProps ) => {
  return (
    <div data-testid="page-container">{ children }</div>
  )
}