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

export default function Home({ schedule }) {
  return (
    <Layout>
      <Hero />

      <Introduction />
      <Tickets />
      <Schedule data={schedule} />
      <Venue />
      <Newsletter />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const [schedule] = await Promise.all([airtable.getSchedule()]);

  return {
    props: {
      schedule,
    },
    revalidate: 60,
  };
}
