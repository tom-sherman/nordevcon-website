const Tracks = [
  "Main Auditorium (Track 1)",
  "Conference Room 1 (Track 2)",
  "Conference Room 2 (Track 3)",
  "Board Room (Track 4)",
  "Training Room 1",
]

const Theme = {
  "Main Auditorium (Track 1)": "#CFDFFF",
  "Conference Room 1 (Track 2)": "#D0F0FD",
  "Conference Room 2 (Track 3)": "#C2F5E9",
  "Board Room (Track 4)": "#D1F7C4",
  "Training Room 1": "#FFEAB6",
}

function trackSort(a, b) {
  return Tracks.indexOf(a.fields.Track) - Tracks.indexOf(b.fields.Track);
}

function getSpeakers(talk, speakers) {
  if (talk.fields.Speaker == null) return "";

  return talk.fields.Speaker
    .map(speaker => speakers.find(candidate => candidate.id === speaker))
    .map(speaker => speaker.fields.Name)
    .join(', ');
}

export default ({ talks, speakers }) => (
  <ol className="xl:flex">
    {
      talks.sort(trackSort).map(talk => (
        <li key={talk.id} className={ talks.length > 1 ? "mb-2 border-l-8 pl-2 xl:m-0 xl:w-1/5" : "flex w-full text-xl" } style={{ borderColor: Theme[talk.fields.Track] }}>
          <h3 className="mr-4 font-bold md:text-xl xl:text-md">{talk.fields.Title}</h3>
          <p>{getSpeakers(talk, speakers)}</p>
        </li>
      ))
    }
  </ol>
)