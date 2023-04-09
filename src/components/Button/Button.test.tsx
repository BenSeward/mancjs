import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { Button } from "."

describe('Button', () => {
    const dummyProps = {
        handleClick: jest.fn(() => true)
    }
    
    it('should load', () => {
        const { getByTestId } = render(<Button {...dummyProps}/>)
        const bttn = getByTestId('button')

        expect(bttn).toBeDefined()
    })
    it('should be clickable', async () => {
        const user = userEvent.setup()
        const { getByTestId } = render(<Button {...dummyProps}/>)
        const bttn = getByTestId('button')

        await user.click(bttn)
        expect(dummyProps.handleClick).toHaveBeenCalled()
    })
})