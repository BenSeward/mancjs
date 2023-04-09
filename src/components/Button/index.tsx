import styles from "./Button.module.css"

interface ButtonProps {
    handleClick: (params: any) => any
}

export const Button = ({handleClick}: ButtonProps ) => {
   
    return (
        <button className={styles.buttonStyle} role="button" data-testid="button" onClick={handleClick}>
            Join our next event!
        </button>
    )
}