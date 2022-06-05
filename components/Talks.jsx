import { useState } from "react";
import Abstract from "./Abstract"; // the name s ironic
import Star from "./Star";

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



export default ({ talks, speakers, wishlist, addWishlist, tracks, theme, isSharing }) => {
  const [selectedSession, setSelectedSession] = useState("");

  return (
    <ol className="xl:flex">
      {talks.sort(trackSort.bind(this, tracks)).map(talk => {
        const isWishlist = wishlist.includes(talk.id);

        return (
          <li
            key={talk.id}
            className={`relative p-2 ${
              talks.length > 1
                ? "mb-2 border-l-8 pl-2 xl:m-0 xl:w-1/3"
                : "border-l-8 w-full"
            }`}
            style={{ borderColor: theme[talk.fields.Track]?.border }}
          >
            
            <h3 className={`flex align-center justify-between font-bold align-top leading-none${talk.fields.Cancelled ? ' line-through' : ''}`}>
              <span>{talk.fields.Title}</span>
              {(!talk.fields.Info && !isSharing) && (
                <button
                  className="ml-2 text-yellow-500"
                  onClick={() => addWishlist(talk.id)}
                >
                  <Star filled={isWishlist} />
                </button>
              )}
            </h3>
            <p className="text-gray-900">{getSpeakersNames(talk, speakers)}</p>
            {(talk.fields.Abstract && !isSharing) ? (
              <>
                <button
                  className="font-bold"
                  style={{ color: theme[talk.fields.Track]?.border }}
                  onClick={() => setSelectedSession(talk.fields.Title)}
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
