import { Button } from "../Button"

interface HeroProps {
    header: string,
    paragraph: string,
    buttonText: string
}

export const Hero = ({ header, paragraph, buttonText }: HeroProps) => {
    return (
        <section>
            <h1 data-testid="hero-header">{header}</h1>
            <p data-testid="hero-paragraph">{paragraph}</p>
            <p data-testid="hero-button"><Button text={buttonText} handleClick={() => console.log('I was clicked')}/></p>
        </section>
    )
}