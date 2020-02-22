export default function SaleBanner() {
  return (
    <div className="banner font-bold flex justify-center align-middle items-center md:text-xl text-white text-shadow p-4 text-center">
      <p>
        <span role="img" aria-label="Lightning bolt">
          ⚡️
        </span>
        TICKETS{" "}
        <span className="bg-teal-400 inline-block pl-2 pr-2">50% OFF</span> with
        code <span className="bg-purple-600 inline-block pl-2 pr-2">FLASH</span>
        <span role="img" aria-label="Lightning bolt">
          ⚡️
        </span>
      </p>
      <a
        href="https://www.eventbrite.co.uk/e/nordevcon-2020-tickets-65832042411?discount=FLASH"
        className="ml-2 p-2 inline-block bg-red-400 font-bold"
      >
        BUY TICKETS
      </a>
    </div>
  );
}
