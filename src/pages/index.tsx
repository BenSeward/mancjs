import Head from "next/head";
import { Lato } from "next/font/google";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { EventCard } from "@/components/EventCard";
import { Hero } from "@/components/Hero";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={lato.className}>
        <Container>
          <Header />
          <Hero header={'Welcome to Manc.JS'} paragraph={'We run Javascript & tech events every-other month around central Manchester.'} buttonText={'Join our next event!'}/>
          <h2>Next event</h2>
          <EventCard thumbnailUrl="https://secure.meetupstatic.com/photos/event/9/1/9/3/clean_478597267.jpg" title="🎉 Manc.JS - 10th Birthday party 🎉" eventDate="Wednesday, 22nd March - " eventTime="6:00 PM GMT" location="Slalom offices,  M1 ABC" buttonText={'Join our next event!'}/>
          <h2>Previous events</h2>
          <EventCard thumbnailUrl="https://secure.meetupstatic.com/photos/event/9/1/9/3/clean_478597267.jpg" title="🎉 Manc.JS - 10th Birthday party 🎉" eventDate="Wednesday, 22nd March - " eventTime="6:00 PM GMT" location="Slalom offices,  M1 ABC" buttonText={'See event details'}/>
          <Hero header={'Get in touch'} paragraph={'We love hearing from our community. If you want to come to an event but have a question reach out to one of our organisers on Meetup.'} buttonText={'Get in touch'}/>
        </Container>
      </main>
    </>
  );
}
