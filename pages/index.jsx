import * as airtable from "../api/airtable";
import Layout from "../layouts/main";
import Speakers from "../components/Speakers";

function IndexRoute({
  speakers,
  schedule = [{ id: "rec47JXtfk3TUD96G", fields: { Title: "talk title" } }]
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
      <img
        style={{ position: "absolute", zIndex: -1, width: "100%" }}
        src="/static/images/bg.svg"
        alt="background"
      />
      <Speakers speakers={speakers} />

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
