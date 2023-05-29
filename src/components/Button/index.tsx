import styles from "./Button.module.css"

interface ButtonProps {
    text: string,
    link: string,
    variant?: "primary" | "secondary"
}

// @todo: Add tests for aria labeln and testing when no link or text is provided

export const Button = ({link, text, variant = "primary"}: ButtonProps ) => {
   if(!link || !text) {
    return null
   }

    return (
        <a className={`${styles.buttonStyle} ${styles[variant]}`} aria-label="link" data-testid="button" href={link} target="_blank">
            {text}
        </a>
    )
}