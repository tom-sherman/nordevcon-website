import * as airtable from "./api/airtable";
import config from "../config.json";
import Layout from "../layouts/default";
import Hero from "../components/Hero";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <Layout>
      <Hero>
        <div class="max-w-5xl mx-auto p-8 text-white">
          <div className="max-w-xs pr-4 mb-32">
            <Logo />
          </div>

          <h1 class="mb-4 text-4xl">
            {config.title}
          </h1>

          <h3 className="mb-32 text-4xl font-extrabold">
            {config.date}
          </h3>

          <a href={config.tickets} className="inline-block px-12 py-8 text-2xl font-extrabold bg-purple-700 rounded hover:bg-purple-500">
            Grab your Super Early Bird ticket
          </a>
        </div>
        </Hero>
    </Layout>
  )
}

export async function getStaticProps() {
  const [speakers, schedule, sponsors] = await Promise.all([
    airtable.getSpeakers(),
    airtable.getSchedule(),
    airtable.getSponsors()
  ]);

  return {
    props: {
      speakers: speakers,
      schedule: schedule,
      sponsors: sponsors,
    },
    revalidate: 60
  };
}