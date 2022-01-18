import { useState } from "react";
import Abstract from "./Abstract"; // the name s ironic

function trackSort(tracks, a, b) {
  return tracks.indexOf(a.fields.Track) - tracks.indexOf(b.fields.Track);
}

function getSpeakersNames(talk, speakers) {
  if (talk.fields.Speaker == null) return "";

  return talk.fields.Speaker.map(speaker =>
    speakers.find(candidate => candidate.id === speaker)
  )
    .map(speaker => speaker.fields.Name)
    .join(", ");
}

function getSpeakersForTalk(talk, speakers) {
  if (talk.fields.Speaker == null) return "";

  return talk.fields.Speaker.map(speaker =>
    speakers.find(candidate => candidate.id === speaker)
  );
}

export default ({ talks, speakers, tracks, theme }) => {
  const [selectedSession, setSelectedSession] = useState("");

  return (
    <ol className="xl:flex">
      {talks.sort(trackSort.bind(this, tracks)).map(talk => {
        return (
          <li
            key={talk.id}
            className={`cursor-pointer p-2 hover:bg-gray-200 ${
              talks.length > 1
                ? "mb-2 border-l-8 pl-2 xl:m-0 xl:w-1/3"
                : "border-l-8 w-full"
            }`}
            style={{ borderColor: theme[talk.fields.Track]?.border }}
            onClick={() => setSelectedSession(talk.fields.Title)}
          >
            <h3 className={talk.fields.Cancelled ? "mr-4 font-bold align-top leading-none line-through" : "mr-4 font-bold align-top leading-none"}>
              {talk.fields.Title}
            </h3>
            <p className="text-gray-900">{getSpeakersNames(talk, speakers)}</p>
            {talk.fields.Abstract ? (
              <>
                <button
                  className="font-bold"
                  style={{ color: theme[talk.fields.Track]?.border }}
                >
                  Read more
                </button>
                <Abstract
                  isOpen={talk.fields.Title === selectedSession}
                  onClose={() => setSelectedSession(null)}
                  talk={talk}
                  speakers={getSpeakersForTalk(talk, speakers)}
                />
              </>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
};
