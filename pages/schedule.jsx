import * as airtable from "../api/airtable";
import { useRouter } from "next/router";
import { groupByStartDate } from "./index";
import Schedule from "../components/Schedule";

function SharePage({ speakers, schedule }) {
  const { query } = useRouter();
  const isLegacy = (query.share === undefined && query.wishlist !== undefined)
  const wishlist = isLegacy
    ? [query.wishlist ?? []].flat()
    : query.share === undefined ? [] : query.share.split(',');
  const talks = schedule.filter(talk => wishlist.includes(isLegacy ? talk.id : `${talk.fields.ID}`))

  return (
    <div className="p-4 section">
      <span className="hidden">{wishlist.join(', ')}</span>
      <Schedule schedule={talks} speakers={speakers} isSharing={true} />
    </div>
  );
}

export async function getStaticProps() {
  const [speakers, schedule] = await Promise.all([
    airtable.getSpeakers(),
    airtable.getSchedule(),
  ]);

  return {
    props: {
      speakers: speakers.data.records,
      schedule: schedule.data.records,
    },
    revalidate: 60
  };
}

export default SharePage;