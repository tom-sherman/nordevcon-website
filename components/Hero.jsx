export default function Hero({ speakers }) {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="hero-clip-path" >
            <path d="M1335.56 732.363H1.26096V0.897682L1850.55 0.898666H2886.29V560.59H1850.55C1850.55 560.59 1824.6 574.168 1796.58 570.887C1768.57 567.605 1747.54 550.829 1747.54 550.829C1747.54 550.829 1733.45 561.204 1719.16 566.322C1704.87 571.44 1687.21 571.355 1687.21 571.355C1687.21 571.355 1682.09 620.859 1629.95 643.151C1577.81 665.443 1532.22 627.936 1532.22 627.936C1532.22 627.936 1516.24 653.857 1487.29 666.98C1458.33 680.103 1423.62 670.489 1423.62 670.489C1423.62 670.489 1415.15 697.02 1389.6 714.814C1364.05 732.608 1335.56 732.363 1335.56 732.363Z" fill="#F2994A" stroke="black" stroke-opacity="0.5"/>
          </clipPath>
        </defs>
      </svg>

      <section className="p-4 md:p-8 lg:p-12 text-white" id="hero">
        <div className="container mx-auto lg:py-32">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
            NOR(DEV):CON
          </p>
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            Norfolk Developers Conference
          </h1>
          <p className="text-md md:text-xl lg:text-2xl mb-4">
            26<sup>th</sup> &ndash; 28<sup>th</sup> February 2020
          </p>
          <h1 className="my-8 md:w-1/2">
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
    </>
  );
}