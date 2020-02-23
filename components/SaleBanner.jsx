const saleLink =
  "https://www.eventbrite.co.uk/e/nordevcon-2020-tickets-65832042411?discount=FLASH";

export default function SaleBanner() {
  return (
    <div className="banner font-bold flex justify-center align-middle items-center md:text-xl text-white p-4 text-center">
      <a href={saleLink}>
        <p>
          <span role="img" aria-label="Lightning bolt">
            ⚡️
          </span>
          <span className="bg-purple-600 inline-block pl-2 pr-2">50% OFF</span>{" "}
          with code{" "}
          <span className="bg-teal-400 inline-block pl-2 pr-2">FLASH</span>
          <span role="img" aria-label="Lightning bolt">
            ⚡️
          </span>
        </p>
      </a>
      <a
        href={saleLink}
        // className="ml-2 p-2 inline-block bg-red-400 font-bold gradient-red rounded"
        className="gradient-red bg-white block text-center p-1 pl-2 pr-2 text-gray-800 font-bold text-sm md:text-base ml-2 max-w-sm rounded hover:bg-red-300"
      >
        Buy tickets
      </a>
    </div>
  );
}
