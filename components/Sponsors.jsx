import Link from "next/link";

import Sponsor from "./Sponsor";

const SponsorOrder = [
  'Elite',
  'Partner',
  'Associate',
  'Refreshments',
  'Lunch',
  'Conference Dinner',
  'Room Sponsor',
  undefined // :S Here be JS dragons
]

function SponsorSort(a, b) {
  return SponsorOrder.indexOf(a.fields.Package) - SponsorOrder.indexOf(b.fields.Package);
}

export default function Sponsors({ sponsors }) {
  return (
    <div>
      <p>Our wonderful sponsors</p>

      <ol className="mt-6 lg:-mx-2 lg:flex lg:flex-wrap">
        {sponsors
          .sort(SponsorSort)
          .map(sponsor => (
            <li className="lg:px-2 w-full lg:w-1/4 flex">
              <Sponsor sponsor={sponsor} />
            </li>
          ))}

        <li className="lg:px-2 w-full lg:w-1/4 flex">
          <div className="bg-white shadow-lg border mb-4 rounded-lg w-full border flex flex-col overflow-hidden">
             <Link href="/sponsorship">
                <a className="flex-grow flex justify-center items-center border-8 border-orange-600 p-8 bg-orange-400">
                  <span className="block text-4xl text-center text-white font-bold">Your Name Here</span>
                </a>
              </Link>
          </div>
        </li>
      </ol>
    </div>
  );
}