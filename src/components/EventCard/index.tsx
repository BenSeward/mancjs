import Image from "next/image";

interface EventCardProps {
    thumbnailUrl?: string,
    title: string,
    eventDate: string,
    eventTime: string,
    location: string
}

export const EventCard = ({ thumbnailUrl, title, eventDate, eventTime, location }: EventCardProps) => {
  return (
    <div>
        <span><span data-testid='card-date'>{eventDate}</span> - <span data-testid='card-time'>{eventTime}</span></span>
        <h4 data-testid="card-title">{title}</h4>
        <span data-testid='card-location'>{location}</span>
       { thumbnailUrl && <Image
        width={200}
        height={150}
        src={thumbnailUrl}
        alt="mancjs logo"
        data-testid="thumbnail-image"
      />}
    </div>
  )
}