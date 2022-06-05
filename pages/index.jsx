import Link from "next/link";
import * as airtable from "../api/airtable";
import Layout from "../layouts/main";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";
import Nearby from "../components/Nearby";
import Sponsors from "../components/Sponsors";
import Location from "../components/Location";
import Food from "../components/Food";

export function groupByStartDate(groups, talk) {
  let { Start } = talk.fields;

  if (groups[Start] == null) groups[Start] = [];
  groups[Start].push(talk);

  return groups;
};

// const s3 =
//   "https://norfolkdevelopers.s3.eu-west-2.amazonaws.com/nordevcon-website/2022/images";

function IndexRoute({ speakers, schedule, sponsors }) {
  return (
    <Layout>
      <Hero />

      <section className="bg-white section" id="schedule">
        <h2 className="headline">Schedule</h2>
        <p className="mb-8 tracking-wide">
          We'll gather in Norwich to learn, discuss, and network with an
          eclectic bunch of the best of the East's tech scene, joined by a group
          of international conference veterans. Talks on language, business,
          methodology, &amp; blockchain. We're bringing 30 sessions across two
          days at The Kings' Centre, kicking off on the 16<sup>th</sup> June
          2022, and closing 17<sup>th</sup> June 2022
        </p>

        <Schedule schedule={schedule} speakers={speakers} />
      </section>
      
      <section className="section" id="sponsors">
        <h2 className="headline">Sponsors</h2>
        <Sponsors sponsors={sponsors} />
      </section>

      <section className="overflow-hidden section" id="speakers">
        <h2 className="headline">Speakers</h2>
        <Speakers speakers={speakers} />
      </section>


      <section className="section" id="location">
        <h2 className="headline">Location</h2>
        <Location />
      </section>

      <section className="section" id="nearby">
        <h2 className="headline">Nearby</h2>
        <Nearby />
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const [speakers, schedule, sponsors] = await Promise.all([
    airtable.getSpeakers(),
    airtable.getSchedule(),
    airtable.getSponsors()
  ]);

  return {
    props: {
      speakers: speakers.data.records,
      schedule: schedule.data.records.reduce(groupByStartDate, {}),
      sponsors: sponsors.data.records
    },
    revalidate: 60
  };
}

export default IndexRoute;
