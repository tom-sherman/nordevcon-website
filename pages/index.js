import * as airtable from "./api/airtable";
import config from "../config.json";
import Layout from "../layouts/default";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Tickets from "../components/Tickets";
import Venue from "../components/Venue";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";
import DiscordCard from "../components/DiscordCard";

export default function Home({ schedule, sponsors }) {
  return (
    <Layout>
      <Hero />

      <Introduction />
      <Tickets />
      <Schedule data={schedule} />
      <Sponsors data={sponsors} />
      <Venue />
      <DiscordCard />
      <Newsletter />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const [schedule, sponsors] = await Promise.all([
    airtable.getSchedule(),
    airtable.getSponsors(),
  ]);

  return {
    props: {
      schedule,
      sponsors,
    },
    revalidate: 60,
  };
}
