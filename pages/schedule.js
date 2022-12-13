import * as airtable from "./api/airtable";
import { useRouter } from "next/router";
import Layout from "../layouts/default";
import Schedule from "../components/Schedule";

export default function SchedulePage({ schedule }) {
  const { query } = useRouter();
  const filter = query.share?.split(",") ?? [];

  return (
    <Layout>
      <Schedule data={schedule} filter={filter} isSharing={true} />
    </Layout>
  );
}

export async function getStaticProps() {
  const schedule = await airtable.getSchedule();

  return {
    props: {
      schedule,
    },
    revalidate: 60,
  };
}
