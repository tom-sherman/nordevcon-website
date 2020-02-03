import React from "react";
import Talks from "./Talks";
import format from "date-fns/format";

const Tracks = [
  "Main Auditorium (Track 1)",
  "Conference Room 1 (Track 2)",
  "Conference Room 2 (Track 3)",
  "Board Room (Track 4)",
  "Training Room 1"
];

const Theme = {
  "Main Auditorium (Track 1)": "#CFDFFF",
  "Conference Room 1 (Track 2)": "#D0F0FD",
  "Conference Room 2 (Track 3)": "#C2F5E9",
  "Board Room (Track 4)": "#D1F7C4",
  "Training Room 1": "#FFEAB6"
};

export default ({ schedule, speakers }) => (
  <section className="relative">
    <ol className="lg:absolute top-0 right-0">
      {Object.keys(Theme).map(track => (
        <li className="align-middle" key={track}>
          <span
            className="mr-2 inline-block w-4 h-4 align-middle"
            style={{ backgroundColor: Theme[track] }}
          ></span>
          {track}
        </li>
      ))}
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
                <h3 className="text-2xl text-gray-600 align-top leading-none">
                  {format(new Date(start), "HH:mm")}
                </h3>
              </div>

              <div className="flex-grow">
                <Talks
                  talks={schedule[start]}
                  speakers={speakers}
                  tracks={Tracks}
                  theme={Theme}
                />
              </div>
            </li>
          </React.Fragment>
        ))}
    </ol>
  </section>
);
