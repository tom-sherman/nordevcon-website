import * as airtable from "../api/airtable";
import Layout from "../layouts/main";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Speaker from "../components/Speaker";
import Schedule from "../components/Schedule";

function simpleSort(a, b) {
  if (a.fields.Name < b.fields.Name) return -1;
  if (a.fields.Name > b.fields.Name) return 1;
  return 0;
}

const groupByStartDate = (groups, event) => {
  let {Start} = event.fields;

  if (groups[Start] == null) groups[Start] = [];
  groups[Start].push(event);

  return groups;
}

function IndexRoute({
  speakers,
  schedule
}) {
  return (
    <Layout>
      <Hero speakers={speakers} />

      <Navigation />

      <section className="p-4 md:p-8 lg:p-12" id="speakers">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Speakers
        </h1>
        <ul className="flex flex-wrap mb-6 lg:mb-12">
          {speakers
            .filter(speaker => speaker.fields.Keynote === true)
            .sort(simpleSort)
            .map(speaker => (
              <Speaker key={speaker.id} speaker={speaker} schedule={schedule} />
            ))}
        </ul>
        <ul className="flex flex-wrap">
          {speakers
            .filter(speaker => speaker.fields.Keynote !== true)
            .sort(simpleSort)
            .map(speaker => (
              <Speaker key={speaker.id} speaker={speaker} schedule={schedule} />
            ))}
        </ul>
      </section>

      <section className="container mx-auto px-3" id="schedule">
        <h1 className="text-6xl font-bold">Schedule</h1>
        <Schedule schedule={schedule} speakers={speakers} />
      </section>

      <section className="p-3" id="location">
        <h1 className="text-6xl font-bold">Location</h1>
        <p>map and directions</p>
      </section>
      <section className="p-3" id="nearby">
        <h1 className="text-6xl font-bold">Useful things nearby</h1>
        <p>Train station, bus station, taxi numbers, services etc.</p>
      </section>
      <section className="p-3" id="sponsors">
        <h1>Sponsors</h1>
        <p>Our wonderful sponsors</p>
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
