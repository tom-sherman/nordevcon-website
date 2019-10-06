export default function Hero({ speakers }) {
  return (
    <section className="p-4 md:p-8 lg:p-12 text-white" id="hero">
      <div className="container mx-auto pt-24">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
          NOR(DEV):CON
        </p>
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          Norfolk Developers Conference
        </h1>
        <p className="text-md md:text-xl lg:text-2xl mb-4">
          26<sup>th</sup> &ndash; 28<sup>th</sup> February 2020
        </p>
        <h1 className="w-1/2">
          <strong>nor(DEV):con is back in 2020.</strong> The eastern region's
          biggest tech conference returns in February with a fantastic line-up
          of speakers and workshops.
        </h1>
        <a
          href="https://www.eventbrite.co.uk/e/nordevcon-2020-tickets-65832042411"
          className="bg-red-500 block text-center text-white p-3 font-bold mt-4 w-full max-w-sm rounded shadow-lg hover:bg-red-600"
        >
          Buy tickets
        </a>
        <div className="flex flex-row content-between text-center w-full mt-12">
          <div className="flex flex-col w-1/3">
            <span className="text-xl font-bold lg:text-4xl">{speakers.length}+</span>
            <span className="text-sm text-gray-500 lg:text-xl">speakers</span>
          </div>
          <div className="flex flex-col w-1/3">
            <span className="text-xl font-bold text-center lg:text-4xl">5</span>
            <span className="text-sm text-gray-500 lg:text-xl">tracks</span>
          </div>
          <div className="flex flex-col w-1/3">
            <span className="text-xl font-bold text-center lg:text-4xl">X</span>
            <span className="text-sm text-gray-500 lg:text-xl">sessions</span>
          </div>
        </div>
      </div>
    </section>
  );
}