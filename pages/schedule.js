import * as airtable from "./api/airtable";
import Layout from "../layouts/default";
import Schedule from "../components/Schedule";

export default function SchedulePage({ schedule, query }) {
  const filter = query.share?.split(",") ?? [];

  return (
    <Layout>
      <Schedule data={schedule} filter={filter} isSharing={true} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const cache = typeof caches !== "undefined" ? caches?.default : undefined;
  const schedule = await airtable.getSchedule(cache);

  return {
    props: {
      schedule,
      query
    },
  };
}
