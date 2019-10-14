import Link from "next/link";

import * as airtable from "../api/airtable";
import Layout from "../layouts/main";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";

const groupByStartDate = (groups, event) => {
  let { Start } = event.fields;

  if (groups[Start] == null) groups[Start] = [];
  groups[Start].push(event);

  return groups;
};

function IndexRoute({ speakers, schedule }) {
  return (
    <Layout>
      <Hero speakers={speakers} />
      <Navigation />
      <Speakers speakers={speakers} />

      <section className="section bg-white" id="schedule">
        <h1 className="text-6xl font-bold">Schedule</h1>
        <Schedule schedule={schedule} speakers={speakers} />
      </section>

      <section className="section" id="location">
        <h1 className="text-6xl font-bold">Location</h1>
        <p>map and directions</p>
      </section>

      <section className="section" id="nearby">
        <h1 className="text-6xl font-bold">Useful things nearby</h1>
        <p>Train station, bus station, taxi numbers, services etc.</p>
      </section>

      <section className="section" id="sponsors">
        <h1>Sponsors</h1>
        <p>Our wonderful sponsors</p>
        <Link href="/sponsorship">
          <a className="inline-block bg-white hover:bg-purple-600 p-4 text-purple-500 border-2 border-purple-500 hover:text-white font-bold rounded text-center mt-4 self-bottom mt-auto">
            Become a sponsor
          </a>
        </Link>
      </section>
    </Layout>
  );
}

IndexRoute.getInitialProps = async () => {
  const [speakers, schedule] = await Promise.all([
    airtable.getSpeakers(),
    airtable.getSchedule()
  ]);

  return {
    speakers: speakers.data.records,
    schedule: schedule.data.records.reduce(groupByStartDate, {})
  };
};

export default IndexRoute;
