import Link from "next/link";

import Sponsor from "./Sponsor";

const SponsorOrder = [
  "Elite",
  "Partner",
  "Associate",
  "Refreshments",
  "Lunch",
  "Conference Dinner",
  "Room Sponsor",
  undefined // :S Here be JS dragons
];

function SponsorSort(a, b) {
  return (
    SponsorOrder.indexOf(a.fields.Package) -
    SponsorOrder.indexOf(b.fields.Package)
  );
}

export default function Sponsors({ sponsors }) {
  return (
    <div>
      <p className="mb-2">
        The Norfolk Developers Conference wouldn't be possible without the
        support of our wonderful sponsors. We're really grateful for their trust
        and support; and are proud to feature them below.
      </p>

      <p className="mb-2">
        Want to join our community of Sponsors? We stil have a range of&nbsp;
        <Link href="/sponsorship">
          <a className="text-orange-700 bold underline hover:text-orange-900">
            sponsorship packages available
          </a>
        </Link>
        .
      </p>

      <ol className="mt-6 lg:-mx-2 lg:flex lg:flex-wrap">
        {sponsors.sort(SponsorSort).map(sponsor => (
          <li className="lg:px-2 w-full lg:w-1/4 flex">
            <Sponsor sponsor={sponsor} />
          </li>
        ))}

        <li className="lg:px-2 w-full flex">
          <div className="bg-white shadow-lg border mb-4 rounded-lg w-full border flex flex-col overflow-hidden">
            <Link href="/sponsorship">
              <a className="flex-grow flex flex-col justify-center items-center border-8 border-orange-400 p-8 bg-orange-400 hover:border-orange-600">
                <span className="block text-4xl text-center text-orange-700 font-bold">
                  Your Name Here
                </span>
                <span className="block text-xl text-orange-800">
                  Support the eastern region's biggest tech conference! Packages
                  starting at £275.
                </span>
              </a>
            </Link>
          </div>
        </li>
      </ol>
    </div>
  );
}
