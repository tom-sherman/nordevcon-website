import { SocialIcon } from "react-social-icons";
import { parseSponsors } from "../lib/sponsors";

export default function Sponsors({ data }) {
  const [elite, partner, associate] = parseSponsors(data);

  if (!elite.length && !partner.length && !associate.length) return;

  return (
    <div className="mt-12 bg-indigo-700 lg:mt-20">
      <div className="relative px-4 pt-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pt-20">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-white lg:text-5xl">
          Sponsors
        </h2>

        <div className="flex flex-col gap-12">
          <Elite organisation={elite[0]} />
          <Partner organisations={partner} />
          <Associate organisations={associate} />
        </div>
      </div>
    </div>
  );
}

function Elite({ organisation }) {
  if (!organisation) return;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-0.5">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {organisation.Name}
        </h2>
        <p className="max-w-3xl mt-3 text-lg text-slate-100">
          {organisation.Description}
        </p>
        <div className="gap-4 mt-8 sm:flex">
          <div className="rounded-md shadow">
            <a
              href={organisation.Website}
              className="flex items-center justify-center px-5 py-3 text-base font-bold text-white border border-transparent rounded-md bg-wave-pink hover:bg-wave-orange"
            >
              Visit their Site
            </a>
          </div>
          <Social organisation={organisation} />
        </div>
      </div>
      <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
        <img className="max-h-12" src={organisation.Logo} alt="Workcation" />
      </div>
    </div>
  );
}

function Partner({ organisations }) {
  return (
    <div className="grid grid-cols-2 gap-0.5">
      {organisations.map(
        ({ Logo, Name, Description, ...organisation }, key) => (
          <div
            key={`associate_${key}`}
            className="flex flex-col items-center px-8 py-8 bg-gray-50"
          >
            <img className="max-h-12" src={Logo} alt={Name} />

            <div className="mt-8">
              <h3 className="mb-2 text-3xl font-bold">{Name}</h3>
              <p className="mb-4">{Description}</p>
              <Social organisation={organisation} />
            </div>
          </div>
        )
      )}
    </div>
  );
}

function Associate({ organisations }) {
  return (
    <div className="grid grid-cols-2 gap-0.5 md:grid-cols-4">
      {organisations.map((entry, key) => (
        <div
          key={`associate_${key}`}
          className="flex justify-center col-span-1 px-8 py-8 bg-gray-50"
        >
          <img className="max-h-12" src={entry.Logo} alt={entry.Name} />
        </div>
      ))}
    </div>
  );
}

function Social({ organisation }) {
  let { Twitter, LinkedIn, Website } = organisation;

  return (
    <ul className="flex gap-2">
      {Twitter && (
        <li>
          <SocialIcon url={Twitter} fgColor="white" />
        </li>
      )}

      {LinkedIn && (
        <li>
          <SocialIcon url={LinkedIn} fgColor="white" />
        </li>
      )}

      {Website && (
        <li>
          <SocialIcon url={Website} fgColor="white" />
        </li>
      )}
    </ul>
  );
}
