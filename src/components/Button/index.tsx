import styles from "./Button.module.css"

interface ButtonProps {
    text: string,
    link: string   
}

// @todo: Add tests for aria labeln and testing when no link or text is provided

export const Button = ({link, text}: ButtonProps ) => {
   if(!link || !text) {
    return null
   }

    return (
        <a className={styles.buttonStyle} aria-label="link" data-testid="button" href={link}>
            {text}
        </a>
    )
}