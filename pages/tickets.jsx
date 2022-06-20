import { LightBulbIcon } from '@heroicons/react/outline'

const Tickets = [
  {
    "type": "Thursday",
    "url": "https://buy.stripe.com/bIY6rOdvUbXzaOY9AC",
    "price": "£24",
  },
  {
    "type": "Friday",
    "url": "https://buy.stripe.com/cN2bM8ajIbXz1eofYZ",
    "price": "£42",
  },
  {
    "type": "Thursday/Friday",
    "url": "https://buy.stripe.com/4gw2by9fE5zbg9i3cf",
    "price": "£60",
  },
]

const BuyButton = ({url}) => (
  <div className="rounded-md shadow">
    <a
      href={url}
      className="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900"
    >
      Buy your ticket now
    </a>
  </div>
)

const TicketHero = ({title, price, description}) => (
  <div className="flex-1 flex-grow px-6 py-8 bg-white sm:p-10 sm:pb-6">
    <div className="">
      <h3
        className="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full"
      >
        {title}
      </h3>
    </div>
    <div className="flex items-baseline mt-4 text-6xl font-extrabold">
      {price}
      <span className="ml-1 text-2xl font-medium text-gray-500">.00</span>
    </div>
    {description && <p className="mt-5 text-lg text-gray-500">{description}</p>}
  </div>
)

const TicketFeatures = ({features = []}) => (
  <ul className="space-y-4">
    {features.map((feature) => (
      <li key={feature} className="flex items-start">
        <div className="flex-shrink-0">
          <LightBulbIcon className="w-6 h-6 text-green-500" aria-hidden="true" />
        </div>
        <p className="ml-3 text-base text-gray-700">{feature}</p>
      </li>
    ))}
  </ul>
)

export default function() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg font-semibold leading-6 tracking-wider text-gray-300 uppercase">
            23rd &amp; 24th February 2023
          </h2>
          <p className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Grab your Ticket for 2023 now!
          </p>
          <p className="max-w-4xl mx-auto mt-3 text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            For a limited time only, we're inviting nor(DEV): con 2020 ticket holders to grab
            their 2023 ticket at 20% off the Super Early Bird Prices.
          </p>
        </div>
      </div>

      <div className="grid max-w-6xl grid-cols-3 gap-4 px-4 pt-12 m-auto sm:px-6 lg:px-8 lg:pt-20">
        <div className="flex flex-col items-stretch col-span-3 overflow-hidden rounded-lg shadow-lg lg:flex-row lg:col-span-2">
          <div className="flex flex-col flex-1 flex-grow border-b-2 border-gray-700 lg:border-r-2 lg:border-b-0">
            <TicketHero title="Thursday Ticket" price="£24" description="Our development day, 3 tracks with a focus on the technical, new frameworks, new languages and new features" />
            <div className="flex flex-col justify-between px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
              <TicketFeatures features={[
                "Frontend Development",
                "Backend Development",
                "System engineering & DevOps",
              ]} />
              <BuyButton url="https://buy.stripe.com/bIY6rOdvUbXzaOY9AC" />
            </div>
          </div>

          <div className="flex flex-col flex-1 flex-grow border-t-2 border-gray-700 lg:border-l-2 lg:border-t-0">
            <TicketHero title="Friday Ticket" price="£42" description="Our mixed day, 3 tracks, one on development, another on business &amp; wellbeing, and our community spotlight track" />
            <div className="flex flex-col justify-between px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
              <TicketFeatures features={[
                "Software Development",
                "Game Development",
                "Business",
              ]} />
              <BuyButton url="https://buy.stripe.com/cN2bM8ajIbXz1eofYZ" />
            </div>
          </div>
        </div>

        <div className="flex col-span-3 overflow-hidden rounded-lg shadow-lg lg:col-span-1">
          <div className="flex flex-col flex-1">
            <TicketHero title="Thursday &amp; Friday Ticket" price="£60" description="Access to both days, and the networking events surrounding the conference!"/>
            <div className="flex flex-col justify-between px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
              <TicketFeatures features={[
                "All the things",
                "+ Networking events",
                "+ Wine reception",
              ]} />
              <BuyButton url="https://buy.stripe.com/4gw2by9fE5zbg9i3cf" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-center bg-cover h-36" style={{ backgroundImage: "url('/static/images/retrospective.jpg')" }} />
    </div>
  )
}
