function trackSort(tracks, a, b) {
  return tracks.indexOf(a.fields.Track) - tracks.indexOf(b.fields.Track);
}

function getSpeakers(talk, speakers) {
  if (talk.fields.Speaker == null) return "";

  return talk.fields.Speaker
    .map(speaker => speakers.find(candidate => candidate.id === speaker))
    .map(speaker => speaker.fields.Name)
    .join(', ');
}

export default ({ talks, speakers, tracks, theme }) => (
  <ol className="xl:flex">
    {
      talks.sort(trackSort.bind(this, tracks)).map(talk => (
        <li key={talk.id} className={ talks.length > 1 ? "mb-2 border-l-8 pl-2 xl:m-0 xl:w-1/5" : "w-full" } style={{ borderColor: theme[talk.fields.Track] }}>
          <h3 className="mr-4 font-bold align-top leading-none">{talk.fields.Title}</h3>
          <p className="text-gray-900">{getSpeakers(talk, speakers)}</p>
        </li>
      ))
    }
  </ol>
)