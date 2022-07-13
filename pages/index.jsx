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

const groupByStartDate = (groups, event) => {
  let { Start } = event.fields;

  if (groups[Start] == null) groups[Start] = [];
  groups[Start].push(event);

  return groups;
};

// const s3 =
//   "https://norfolkdevelopers.s3.eu-west-2.amazonaws.com/nordevcon-website/images";

function IndexRoute({ speakers, schedule, sponsors }) {
  return (
    <Layout>
      <Hero speakers={speakers} />
      <Navigation />

      <section className="section overflow-hidden" id="speakers">
        <h2 className="headline">Speakers</h2>
        <Speakers speakers={speakers} />
      </section>

      <section className="section bg-white" id="schedule">
        <h2 className="headline">Schedule</h2>
        <Schedule schedule={schedule} speakers={speakers} />
      </section>

      <section className="section" id="workshops">
        <h2 className="headline">Workshops</h2>
        <p className="mb-4">
          Take full advantage of your visit by attending one of our workshops
          run by a group of experienced speakers and trainers.
        </p>
        <p className="mb-4">
          We'll be exploring topics like shaping business ideas, problem
          management methodologies and accounting for contractors.
        </p>
        <Link href="/workshops">
          <a className="btn">View workshops</a>
        </Link>
      </section>

      <section className="section" id="food">
        <h2 className="headline">Food</h2>
        <Food />
      </section>

      <section className="section" id="location">
        <h2 className="headline">Location</h2>
        <Location />
      </section>

      <section className="section" id="nearby">
        <h2 className="headline">Nearby</h2>
        <Nearby />
      </section>

      <section className="section" id="sponsors">
        <h2 className="headline">Sponsors</h2>
        <Sponsors sponsors={sponsors} />
      </section>
    </Layout>
  );
}

IndexRoute.getInitialProps = async ({ res }) => {
  console.log('apiKey', process.env.NEXT_PUBLIC_AIRTABLE_API_KEY)
  const [speakers, schedule, sponsors] = await Promise.all([
    airtable.getSpeakers(),
    airtable.getSchedule(),
    airtable.getSponsors()
  ]);

  const etag = require("crypto")
    .createHash("md5")
    .update(
      JSON.stringify({
        speakers: speakers.data.records,
        schedule: schedule.data.records,
        sponsors: sponsors.data.records
      })
    )
    .digest("hex");

  if (res) {
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
    res.setHeader("X-version", etag);
  }

  return {
    speakers: speakers.data.records,
    schedule: schedule.data.records.reduce(groupByStartDate, {}),
    sponsors: sponsors.data.records,
    etag
  };
};

export default IndexRoute;
