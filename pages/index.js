import * as airtable from "./api/airtable";
import config from "../config.json";
import Layout from "../layouts/default";
import Hero from "../components/Hero";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export async function getStaticProps() {
  const [speakers, schedule, sponsors] = await Promise.all([
    airtable.getSpeakers(),
    airtable.getSchedule(),
    airtable.getSponsors(),
  ]);

  return {
    props: {
      speakers: speakers,
      schedule: schedule,
      sponsors: sponsors,
    },
    revalidate: 60,
  };
}
