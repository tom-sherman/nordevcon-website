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

function Star({filled = false}) {
  return (filled
    ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
  )
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
            
            <h3 className={`flex align-center font-bold align-top leading-none${talk.fields.Cancelled ? ' line-through' : ''}`}>
              <span>{talk.fields.Title}</span>
              {(!talk.fields.Info && !isSharing) && (
                <button
                  className="ml-2 text-yellow-500 justify-self-end"
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
