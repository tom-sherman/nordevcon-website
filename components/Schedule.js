// import Talks from "./Talks";
import format from "date-fns/format";
import { useState } from "react";
import { useStickyState } from "../lib/helpers";
import { parseSchedule, Tracks } from "../lib/schedule";
import Star from "./svg/Star";

const ScheduleKey = "nordev-schedule-wishlist__2023_v1";

function Nav() {
  return (
    <ol key="main" className="flex justify-between flex-grow">
      {Object.keys(Tracks).map((track) => (
        <li className="flex items-center" key={track}>
          <span>
            <span
              className={`mr-2 inline-block w-4 h-4`}
              style={{ backgroundColor: Tracks[track].background }}
            ></span>
            {track}
          </span>
        </li>
      ))}
    </ol>
  );
}

function Wishlist({ wishlist }) {
  if (wishlist.length === 0) return;

  return (
    <div>
      <a
        className="flex ml-4 btn"
        href={"/schedule?" + decodeURIComponent(share.toString())}
      >
        View
        <Star filled={true} />
      </a>
    </div>
  );
}

function Day({ datetime, sessions, stars, isSharing }) {
  let date = format(datetime, "do LLLL");

  return (
    <>
      <li key={`marker_${date}`} className="py-4 text-2xl font-bold">
        {date}
      </li>

      {sessions.map((session, i) => (
        <li key={`sessions_${date}_${i}`} className="flex py-2">
          <div className="mr-8">
            <h3 className="pt-2 text-2xl leading-none text-gray-600 align-top monospace">
              {format(session.datetime, "HH:mm")}
            </h3>
          </div>

          <div className="flex-grow">
            <Talks talks={session.talks} stars={stars} inSharing={isSharing} />
          </div>
        </li>
      ))}
    </>
  );
}

function Talks({ talks, stars, isSharing }) {
  const [wishlist, addWishlist] = stars;

  return (
    <ol className="xl:flex">
      {talks.map((talk, i) => {
        const isWishlist = wishlist.includes(talk.id);

        return (
          <li
            key={`talk_${talk.id}`}
            className={`relative p-2 ${
              talks.length > 1
                ? "mb-2 border-l-8 pl-2 xl:m-0 xl:w-1/3"
                : "border-l-8 w-full"
            }`}
            style={{ borderColor: Tracks[talk.Track]?.border }}
          >
            {talk.TopicNames?.length > 0 && (
              <div className="mb-2">
                <span className="p-1 text-sm font-bold uppercase rounded bg-cyan-200 text-cyan-700">
                  {talk.TopicNames.join(", ")}
                </span>
              </div>
            )}

            {talk.Live && (
              <div>
                <h3
                  className={`flex align-center justify-between font-bold items-start leading-none${
                    talk.Cancelled ? " line-through" : ""
                  }`}
                >
                  <span className="leading-6">{talk.Title}</span>
                  {!isSharing && talk.Title && (
                    <button
                      className="ml-2 text-yellow-500"
                      onClick={() => addWishlist(talk.id)}
                    >
                      <Star filled={isWishlist} />
                    </button>
                  )}
                </h3>

                {talk.SpeakerNames?.length && (
                  <p className="text-gray-900">
                    {talk.SpeakerNames.join(", ")}
                  </p>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default function Schedule({ data, isSharing = false }) {
  const [wishlist, setWishlist] = useStickyState([], ScheduleKey);
  const schedule = parseSchedule(data);

  // @TODO: Ensure only 1 item per track can be saved
  const addWishlist = (add) =>
    wishlist.includes(add)
      ? setWishlist(wishlist.filter((id) => id !== add))
      : setWishlist([...wishlist, add]);

  const share = new URLSearchParams({
    share: schedule
      .filter((talk) => wishlist.includes(talk.id))
      .map((talk) => talk.fields.ID),
  });

  return (
    <section className="relative px-4 pt-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pt-20">
      <ol
        className={
          !isSharing &&
          "flex bg-white py-4 border-b-2 top-0 right-0 z-10 sticky px-4"
        }
      >
        <Nav />
        <Wishlist wishlist={wishlist} />
      </ol>
      <ol>
        {schedule.map((day, i) => (
          <Day
            key={`schedule_day_${i}`}
            datetime={day.datetime}
            sessions={day.sessions}
            isSharing={isSharing}
            stars={[wishlist, addWishlist]}
          />
        ))}
      </ol>
    </section>
  );
}
