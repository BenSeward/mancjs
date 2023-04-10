import styles from "./Button.module.css"

interface ButtonProps {
    text: string,
    handleClick: (params: any) => any    
}

export const Button = ({handleClick, text}: ButtonProps ) => {
   
    return (
        <button className={styles.buttonStyle} role="button" data-testid="button" onClick={handleClick}>
            {text}
        </button>
    )
}