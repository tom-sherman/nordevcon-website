import React, { useState, useEffect } from "react";
import Talks from "./Talks";
import format from "date-fns/format";

const ScheduleKey = 'nordev-schedule-wishlist__2022_v1';

const Tracks = [
  "Main Auditorium (Track 1)",
  "Conference Room 1 (Track 2)",
  "Conference Room 2 (Track 3)"
];

const Theme = {
  "Main Auditorium (Track 1)": {
    background: "#c53030",
    border: "#c53030"
  },
  "Conference Room 1 (Track 2)": {
    background: "#4299e1",
    border: "#4299e1"
  },
  "Conference Room 2 (Track 3)": {
    background: "#68d391",
    border: "#68d391"
  }
};

// Good ol' bit of copy/pasta because my brain began to hurt
// Stores state & retrieves it from localStorage
function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default function({ schedule, speakers, isSharing }) {
    const [wishlist, setWishlist] = useStickyState([], ScheduleKey);

    // @TODO: Ensure only 1 item per track can be saved
    const addWishlist = (add) => wishlist.includes(add)
      ? setWishlist(wishlist.filter(id => id !== add))
      : setWishlist([...wishlist, add]);
    const share = new URLSearchParams(wishlist.map((id) => ['wishlist', id]));

    return (
      <section className="relative">
        <ol className={
          !isSharing && "flex bg-white py-4 border-b-2 top-0 right-0 z-10 lg:sticky"
        }>
          <ol key="main" className="flex justify-between flex-grow">
            {Object.keys(Theme).map(track => (
              <li className="flex items-center" key={track}>
                <span>
                  <span
                    className={`mr-2 inline-block w-4 h-4`}
                    style={{ backgroundColor: Theme[track].background }}
                  ></span>
                  {track}
                </span>
              </li>
            ))}
          </ol>
          {(wishlist.length > 0 && !isSharing) && (
            <li key="sharing">
              <a
                className="ml-4 btn"
                href={"/schedule?" + share.toString()}>
                View Wishlist
              </a>
            </li>
          )}
        </ol>
        <ol>
          {Object.keys(schedule)
            .sort()
            .map((start, index, dates) => (
              <React.Fragment key={start}>
                {index === 0 ||
                new Date(start).getDate() !==
                  new Date(dates[index - 1]).getDate() ? (
                  <li className="py-4 text-2xl font-bold">
                    {format(new Date(start), "do LLLL")}
                  </li>
                ) : (
                  ""
                )}
                <li key={start} className="flex py-2">
                  <div className="mr-8">
                    <h3 className="pt-2 text-2xl leading-none text-gray-600 align-top monospace">
                      {format(new Date(start), "HH:mm")}
                    </h3>
                  </div>

                  <div className="flex-grow">
                    <Talks
                      talks={schedule[start]}
                      speakers={speakers}
                      wishlist={wishlist}
                      addWishlist={addWishlist}
                      isSharing={isSharing}
                      tracks={Tracks}
                      theme={Theme}
                    />
                  </div>
                </li>
              </React.Fragment>
            ))}
        </ol>
      </section>
    )
};
