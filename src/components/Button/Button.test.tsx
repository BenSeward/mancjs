import { render } from "@testing-library/react"
import { Button } from "."

describe('Button', () => {
    const dummyProps = {
        text: 'Join our next event!',
        link: '/test-url'
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
})