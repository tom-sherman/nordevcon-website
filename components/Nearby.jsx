import {
  EntypoDirection
} from 'react-entypo-icons';

const s3 =
  "https://norfolkdevelopers.s3.eu-west-2.amazonaws.com/nordevcon-website/images";

const Locations = [
  {
    title: "Train Station",
    image: `${s3}/conference/train-station.png`,
    description:
      "With good connections across East Anglia, and the UK. The historic Norwich Train Station provides good access.",
    distance: 0.6,
    directions: "https://goo.gl/maps/NuzeQDXwFGmufc2L8",
    website: "https://www.nationalrail.co.uk/stations/NRW/details.html"
  },
  {
    title: "Premier Inn",
    image: `${s3}/conference/premier-inn.png`,
    description:
      "Located on Duke Street, close to the river. The Premier Inn offers an affordable stay.",
    distance: 0.5,
    directions: "https://goo.gl/maps/eVUoi1wYFkMoxPbd7",
    website: "https://www.premierinn.com/gb/en/hotels/england/norfolk/norwich/norwich-city-centre-duke-street.html"
  },
  {
    title: "Maids Head",
    image: `${s3}/conference/maids-head-hotel.png`,
    description:
      "Located within Tombland and nextdoor to the Cathedral. The Maids Head Hotel is an award winning, AA 4 Star hotel. Known to be the oldest in the UK.",
    distance: 0.4,
    directions: "https://goo.gl/maps/nXa4vhN3M6feU9Gj7",
    website: "https://www.maidsheadhotel.co.uk/"
  },
  {
    title: "Travelodge",
    image: `${s3}/conference/travel-lodge.png`,
    description:
      "Comfy king size beds with four plump pillows and a cosy duvet. An on-site restaurant and bar serves breakfast and tasty evening meals.",
    distance: 0.5,
    directions: "https://goo.gl/maps/3GWfKXBZtCw2hAVa6",
    website: "https://www.travelodge.co.uk/hotels/288/Norwich-Central-hotel"
  }
];

export default function Nearby() {
  return (
    <ul className="mt-6 lg:-mx-2 lg:flex">
      {Locations.map(location => (
        <li key={location.title} className="lg:mx-2 w-full lg:w-1/4 flex">
          <div className="bg-white shadow-lg border mb-4 rounded-lg w-full border flex flex-col overflow-hidden">
            <header className="p-4 bg-purple-600 text-white">
              <h2 className="block text-2xl font-bold text-center">
                {location.title}
              </h2>
            </header>
            <div className="sm:flex lg:flex-col lg:flex-grow">
              <div className="sm:w-1/3 lg:w-auto">
                <img className="mx-auto" src={location.image} alt={ "An image of " + location.title } />
              </div>

              <div class="p-2 sm:px-4 lg:p-4 sm:w-2/3 lg:w-auto lg:flex-grow lg:flex lg:flex-col">
                <div className="lg:flex-grow">
                  <p className="mb-2 lg:mb-4">{location.description}</p>
                  <p className="mb-2 lg:mb-4 font-semibold">
                    <EntypoDirection valign="middle" />
                    <span className="ml-2">{location.distance}miles from the venue</span>
                  </p>
                </div>

                <div className="lg:flex">
                  <a
                    className="btn mr-2"
                    href={location.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directions
                  </a>

                  <a className="btn" href={location.website} target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
