import StaticMap from "./MapboxStaticMap";

const s3 =
  "https://norfolkdevelopers.s3.eu-west-2.amazonaws.com/nordevcon-website/images";

const MapMarker = {
  lat: "52.627255",
  lon: "1.299918",
  size: "l",
  icon: "marker",
  height: "440",
  width: "768"
};

export default function Location() {
  return (
    <div className="md:flex">
      <div className="md:w-1/2 md:mr-2">
        <h3 className="mb-4 text-3xl font-bold">
          The King's Centre, King Street, Norwich, NR1 1PH
        </h3>
        <p className="mb-4">
          The King's Centre is a quality conference venue in the centre of
          Norwich, offering 14 different rooms available to hire to suit your
          event; from 6 people to 650.
        </p>

        <ul className="flex justify-between -mx-2">
          <li key="kings-centre-1" className="m-2">
            <img
              src={`${s3}/conference/kings-centre-1.jpg`}
              alt="The Kings Centre's Main Conference Auditorium"
            />
          </li>
          <li key="kings-centre-2" className="m-2">
            <img
              src={`${s3}/conference/kings-centre-2.jpg`}
              alt="The Kings Centre's Training Room"
            />
          </li>
          <li key="kings-centre-3" className="m-2">
            <img
              src={`${s3}/conference/kings-centre-3.jpg`}
              alt="The Kings Centre Conference Room 1"
            />
          </li>
          <li key="kings-centre-4" className="m-2">
            <img
              src={`${s3}/conference/kings-centre-4.jpg`}
              alt="The Kings Centre Conference Room 2"
            />
          </li>
        </ul>
      </div>

      <div className="relative md:w-1/2 md:ml-2 md:rounded-tl-lg md:rounded-bl-lg overflow-hidden">
        <a href="https://goo.gl/maps/cF4skhzWYa6iXUta8">
          <StaticMap {...MapMarker} />
        </a>

        <form
          className="absolute right-0 bottom-0 left-0"
          action="https://maps.google.com/maps"
          method="get"
          target="_blank"
        >
          <div className="flex my-6 md:ml-4 lg:ml-24 p-4 bg-white border-purple-600 border-4 border-l-0 border-r-0 md:border-l-4 md:rounded-tl-lg md:rounded-bl-lg">
            <input
              className="form-input flex-grow border-purple-600 rounded-tr-none rounded-br-none"
              type="text"
              name="saddr"
              placeholder="Enter your location"
            />
            <input
              type="hidden"
              name="daddr"
              value="The King's Centre, King Street, Norwich, NR1 1PH"
            />
            <input className="btn" type="submit" value="Get directions" />
          </div>
        </form>
      </div>
    </div>
  );
}
