import * as airtable from "../api/airtable";
import Layout from "../layouts/main";
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
      <section className="p-4 md:p-8 lg:p-12 pt-12" id="hero">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
          NOR(DEV):CON
        </p>
        <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-600">
          Norfolk Developers Conference
        </h1>
        <p className="text-md md:text-xl lg:text-2xl mb-4">
          26<sup>th</sup> &ndash; 28<sup>th</sup> February 2020
        </p>
        <h1 className="w-1/2">
          <strong>nor(DEV):con is back in 2020.</strong> The eastern region's
          biggest tech conference returns in February with a fantastic line-up
          of speakers and workshops.
        </h1>
        <a
          href="https://www.eventbrite.co.uk/e/nordevcon-2020-tickets-65832042411"
          className="bg-red-500 block text-center text-white p-3 font-bold mt-4 w-full max-w-xs rounded shadow-lg hover:bg-red-600"
        >
          Buy tickets
        </a>
        <div className="flex flex-row content-between text-center w-full mt-12">
          <div className="flex flex-col w-1/3">
            <span className="text-xl font-bold">{speakers.length}+</span>
            <span className="text-sm text-gray-600">speakers</span>
          </div>
          <div className="flex flex-col w-1/3">
            <span className="text-xl font-bold text-center">5</span>
            <span className="text-sm text-gray-600">tracks</span>
          </div>
          <div className="flex flex-col w-1/3">
            <span className="text-xl font-bold text-center">X</span>
            <span className="text-sm text-gray-600">sessions</span>
          </div>
        </div>
      </section>

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

      <section className="container mx-auto px-4" id="schedule">
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
