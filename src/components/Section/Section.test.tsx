import { render } from "@testing-library/react"
import { Section } from "."

const dummyProps = {
    header: 'Welcome to Manc.JS',
    paragraph: 'We run Javascript & tech events every-other month around central Manchester.',
    buttonText: 'Join our next event!'
}

describe('Hero', () => {
    it('should load', () => {
        const hero = render(<Section {...dummyProps}/>)

        expect(hero).toBeDefined()
    })

    it('should have a header', () => {
        const {getByTestId} = render(<Section {...dummyProps}/>)
        const header = getByTestId('hero-header')
        
        expect(header).toBeDefined()
    })

    it('should have a paragraph', () => {
        const {getByTestId} = render(<Section {...dummyProps}/>)
        const paragraph = getByTestId('hero-paragraph')

        expect(paragraph).toBeDefined()
    })

    it('should have a button', () => {
        const {getByTestId} = render(<Section {...dummyProps}/>)
        const button = getByTestId('hero-button')

        expect(button).toBeDefined()
    })
})