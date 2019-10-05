import Layout from "../layouts/main";
import * as airtable from "../api/airtable";

function IndexRoute({ speakers }) {
  return (
    <Layout>
      <section className="p-6" id="hero">
        <p className="text-6xl font-bold">NOR(DEV):CON</p>
        <h1 className="text-3xl">Norfolk Developers Conference</h1>
        <p className="text-3xl">
          26<sup>th</sup> &ndash; 28<sup>th</sup> February 2020
        </p>
        <button className="bg-red-500 text-white p-3">Get tickets</button>
      </section>
      <section className="p-6" id="intro">
        <h1>
          <strong>nor(DEV):con is back in 2020.</strong> The eastern region's
          biggest tech conference returns in February with a fantastic line-up
          of speakers and workshops.
        </h1>
      </section>
      <section className="p-6" id="speakers">
        <h1 className="text-6xl font-bold">Speakers</h1>
        <ul>
          {speakers.map(speaker => (
            <div key={speaker.id}>{speaker.fields.Name}</div>
          ))}
        </ul>
      </section>
      <section className="p-6" id="schedule">
        <h1 className="text-6xl font-bold">Schedule</h1>
        <ul>
          <li>talk</li>
          <li>talk</li>
        </ul>
      </section>
      <section className="p-6" id="location">
        <h1 className="text-6xl font-bold">Location</h1>
        <p>map and directions</p>
      </section>
      <section className="p-6" id="nearby">
        <h1 className="text-6xl font-bold">Useful things nearby</h1>
        <p>Train station, bus station, taxi numbers, services etc.</p>
      </section>
      <section className="p-6" id="sponsors">
        <h1>Sponsors</h1>
        <p>Our wonderful sponsors</p>
      </section>
    </Layout>
  );
}

IndexRoute.getInitialProps = async () => {
  const speakers = await airtable.getSpeakers();
  return { speakers: speakers.data.records };
};

export default IndexRoute;
