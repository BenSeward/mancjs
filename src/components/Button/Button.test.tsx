import { render } from "@testing-library/react"
import { Button } from "."

describe('Button', () => {
    const dummyProps = {
        text: 'Join our next event!',
        link: '/test-url',
        variant: "primary" as "primary"
    }

    it('should load', () => {
        const { getByTestId } = render(<Button {...dummyProps} />)
        const btn = getByTestId('button')

        expect(btn).toBeDefined()
    })
    it('should be clickable', async () => {
        const { getByTestId } = render(<Button {...dummyProps} />)
        const btn = getByTestId('button')

        expect(btn).toHaveAttribute('href', '/test-url')
    })

    it('should display button text', async () => {
        const { getByTestId } = render(<Button {...dummyProps} />)
        const btn = getByTestId('button')

        expect(btn).toHaveTextContent('Join our next event!')
    })

    it('should default to the primary button', async () => {
        const { getByTestId } = render(<Button {...dummyProps} variant={undefined} />)
        const btn = getByTestId('button')

        expect(btn.classList.contains('primary')).toBe(true)
    })

    it('should display secondary button when the variant is secondary', async () => {
        const { getByTestId } = render(<Button {...dummyProps} variant="secondary" />)
        const btn = getByTestId('button')

        expect(btn.classList.contains('secondary')).toBe(true)
    })
})