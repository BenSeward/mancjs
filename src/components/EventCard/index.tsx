import Image from "next/image";
import { Button } from "../Button"
import styles from "./EventCard.module.css"

interface EventCardProps {
  thumbnailUrl?: string,
  title: string,
  eventDate: string,
  eventTime: string,
  location: string,
  lat: string,
  lon: string,
  buttonText: string,
  link: string,
  variant?: 'primary' | 'secondary'
}

export const EventCard = ({ thumbnailUrl, title, eventDate, eventTime, location, lat, lon, buttonText, link, variant }: EventCardProps) => {
  const eventLocationLink = `https://www.google.com/maps/place/${lat},${lon}`
  return (
    <section className={styles.container}>
      <div className={(styles.container, styles.cardContainer)}>
        <span className={styles.dateAndTime}><span data-testid='card-date'>{eventDate}</span> - <span data-testid='card-time'>{eventTime}</span></span>
        <h4 data-testid="card-title">{title}</h4>
        <a href={eventLocationLink} target="_blank">
          <span className={styles.locationHeader}data-testid='card-location'>
            <Image
              className={styles.locationImage}
              width={20}
              height={20}
              src={'/assets/location-pin.svg'}
              alt="Location pin"
              />
              {location}
          </span>
        </a>
        <p data-testid="card-button"><Button text={buttonText} link={link} variant={variant}/></p>
      </div>
      <div>
        {thumbnailUrl && <Image
          width={200}
          height={150}
          src={thumbnailUrl}
          alt="mancjs logo"
          data-testid="thumbnail-image"
        />}
      </div>
    </section>
  )
}