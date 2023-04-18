import { Button } from "../Button"

interface SectionProps {
    header: string,
    paragraph: string,
    buttonText: string,
    link: string,
}

export const Section = ({ header, paragraph, buttonText, link }: SectionProps) => {
    return (
        <>
            <h1 data-testid="hero-header">{header}</h1>
            <p data-testid="hero-paragraph">{paragraph}</p>
            <p data-testid="hero-button"><Button text={buttonText} link={link}/></p>
        </>
    )
}