import { Button } from "../Button"
import styles from "./Section.module.css"

interface SectionProps {
    header: string,
    paragraph: string,
    buttonText: string,
    link: string,
}

export const Section = ({ header, paragraph, buttonText, link }: SectionProps) => {
    return (
        <section className={styles.sectionContainer}>
            <h1 data-testid="hero-header" className={styles.sectionHeader}>{header}</h1>
            <p data-testid="hero-paragraph" className={styles.bodyText}>{paragraph}</p>
            <p data-testid="hero-button"><Button text={buttonText} link={link}/></p>
        </section>
    )
}