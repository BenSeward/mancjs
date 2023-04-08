import { findByTestId, render } from "@testing-library/react"
import { EventCard } from "."

describe('EventCard', () => {
    const dummyProps = {
        title: 'My Title',
        thumbnailUrl: '/assets/mancjs-logo.svg',
        eventDate: '2023-04-05',
        eventTime: '18:00',
        location: 'Slalom offices,  M1 ABC'
    }

    it('should load', () => {
        const card = render(<EventCard {...dummyProps}/>)

        expect(card).toBeDefined()
    })
    it('should have an image if one is provided', () => {
        const {getByTestId} = render(<EventCard {...dummyProps}/>)
        const thumbnailImage = getByTestId('thumbnail-image')

        expect(thumbnailImage).toBeDefined()
    })
    it('should not error if image is missing', () => {
        const card = render(<EventCard {...dummyProps} thumbnailUrl={undefined}/>)
        const thumbnailImage = card.queryByTestId('thumbnail-image')
        
        expect(thumbnailImage).toBeNull()
    })

    it('has a title', () => {
        const {getByTestId} = render(<EventCard {...dummyProps}/>)
        const title = getByTestId('card-title')

        expect(title).toBeDefined()        
    })

    it('has a date and time', () => {
        const {getByTestId} = render(<EventCard {...dummyProps}/>)
        const eventDate = getByTestId('card-date')
        const eventTime = getByTestId('card-time')

        expect(eventDate).toBeDefined()
        expect(eventTime).toBeDefined()  
    })

    it('has a location', () => {
        const {getByTestId} = render(<EventCard {...dummyProps}/>)
        const location = getByTestId('card-location')

        expect(location).toBeDefined()
    })
})