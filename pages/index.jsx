import * as airtable from "../api/airtable";
import Layout from "../layouts/main";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Speaker from "../components/Speaker";

function simpleSort(a, b) {
  if (a.fields.Name < b.fields.Name) return -1;
  if (a.fields.Name > b.fields.Name) return 1;
  return 0;
}

function IndexRoute({
  speakers,
  schedule = [{ id: "rec47JXtfk3TUD96G", fields: { Title: "talk title" } }]
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

      <section className="p-3" id="schedule">
        <h1 className="text-6xl font-bold">Schedule</h1>
        <ul>
          <li>talk</li>
          <li>talk</li>
        </ul>
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
  const [speakers] = await Promise.all([airtable.getSpeakers()]);

  return { speakers: speakers.data.records };
};

export default IndexRoute;
