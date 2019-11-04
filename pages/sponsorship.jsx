import Link from "next/link";
import Layout from "../layouts/main";
import Navigation from "../components/Navigation";

const PACKAGES = {
  elite: {
    price: "£3,300",
    title: "Elite",
    available: false,
    features: [
      "Logo on website",
      "Logo in opening presentation",
      "Logo in premium position in printed programme",
      "Mentions on twitter",
      "Table and space for three small banners at the conference",
      "Four tickets for the conference",
      "Lunch and refreshments for two people managing the stand",
      "30 minute speaking slot, may be of a sales/marketing nature (all other presentations are strictly technical)",
      "Logo on lanyard badges",
      "Full page advert in programme",
      "Full page article in programme"
    ]
  },
  partner: {
    title: "Partner",
    price: "£1,600",
    available: true,
    features: [
      "Logo on website",
      "Logo in opening presentation",
      "Logo in prominent position in programme",
      "Mentions on twitter",
      "Table and small banner space at the conference",
      "Two tickets for the conference",
      "Lunch and refreshments for two people",
      "Half page advert in programme",
      "Half page article in programme"
    ]
  },
  associate: {
    title: "Associate",
    price: "£275",
    available: true,
    features: [
      "Logo on website",
      "Logo in opening presentation",
      "Logo in printed programme",
      "Mentions on twitter",
      "Quarter page logo in programme"
    ]
  },
  refreshments: {
    title: "Refreshments",
    price: "£2,400",
    available: true,
    features: [
      "Sponsor tea, coffee",
      "Acknowledgment in programme and 2 x A4 banners on tea and coffee station",
      "Space for an additional small banner",
      "Option to provide branded reusable Americano cups"
    ]
  },
  lunch: {
    title: "Lunch",
    price: "£2,900",
    available: true,
    features: [
      "A4 banner on lunch tables",
      "Serving staff wear your t-shirt message",
      "Acknowledgment in programme and 2 x A4 banners on lunch station",
      "Space for an additional small banner"
    ]
  },
  dinner: {
    title: "Conference Dinner",
    price: "£2,800",
    available: true,
    features: [
      "Five minute introduction before dinner",
      "Logo on placecards/card in lanyard",
      "Space for two small banners at entrance"
    ]
  },
  roomConference: {
    title: "Thursday 27th & Friday 28th February",
    price: "from £300",
    available: true,
    features: [
      "Brand the room",
      "Name the room",
      "Main Auditorium – £1000",
      "Conference Room 1 – £500",
      "Conference Room 2 – £450",
      "Training Room 1 – £370",
      "Boardroom 1 – £350",
      "Charging Room – £300"
    ]
  }
};

function Sponsorship() {
  return (
    <Layout>
      <Navigation />
      <section className="section pt-12" id="intro">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Sponsorship
        </h1>
        <p className="pb-4">
          nor(DEV):con is a <strong>not-for-profit event</strong> which relies
          on sponsorship to continue. We list a number of opportunities to
          contribute to the community below. Choose how you'd like to be
          involved.
        </p>
        <p className="pb-4">
          Any money made from the conference is invested back into the
          conference, Norfolk Developers and the Norfolk tech community.
        </p>
      </section>
      <section className="section">
        <h2 className="text-xl font-bold">Main Sponsorship Packages</h2>
        <p className="text-gray-600 mb-4">
          Your chance to be involved in Norfolk Developers Conference 2020.
        </p>
        <div className="flex flex-wrap items-stretch -ml-4 -mr-4">
          <SponsorshipBox sponsorship={PACKAGES.partner} />
          <SponsorshipBox sponsorship={PACKAGES.elite} />
          <SponsorshipBox sponsorship={PACKAGES.associate} />
        </div>
      </section>
      <section className="section">
        <h2 className="text-xl font-bold mt-6">
          Food/Drink Sponsorship Packages
        </h2>
        <p className="text-gray-600 mb-4">
          Includes a free Associate sponsorship or a £250 discount on a partner
          or Elite Sponsorship.
        </p>
        <div className="flex flex-wrap -ml-4 -mr-4">
          <SponsorshipBox sponsorship={PACKAGES.refreshments} />
          <SponsorshipBox sponsorship={PACKAGES.lunch} />
          <SponsorshipBox sponsorship={PACKAGES.dinner} />
        </div>
      </section>
      <section className="section">
        <h2 className="text-xl font-bold mt-6">Room Sponsorship Packages</h2>
        <p className="text-gray-600 mb-4">
          Sponsorship of individual rooms includes the opportunity to{" "}
          <strong>brand the room</strong> with corporate banners and{" "}
          <strong>name the room</strong>. All room sponsorships include a free
          Associate sponsorship or a £275 discount on a partner or Elite
          sponsorship.
        </p>
        <div className="flex flex-wrap -ml-4 -mr-4">
          <SponsorshipBox sponsorship={PACKAGES.roomConference} />
        </div>
      </section>
    </Layout>
  );
}

function SponsorshipBox({ sponsorship }) {
  return (
    <div className="p-4 w-full md:w-1/2 lg:w-1/3 flex">
      <div className="bg-white shadow-lg border mb-4 rounded-lg w-full border flex flex-col overflow-hidden">
        <header class="p-4 bg-purple-600 text-white">
          <h2 className="block text-2xl font-bold text-center">
            {sponsorship.title}
          </h2>
        </header>

        <div class="p-4 flex flex-col flex-grow">
          <span className="text-2xl font-bold text-purple-600 text-center block mt-4 mb-4">
            {sponsorship.price}
          </span>
          <ul className="pl-4 pb-4 mb-4 flex-grow list-disc">
            {sponsorship.features.map(item => (
              <li key={item} className="pt-2 text-sm text-gray-700">
                {item}
              </li>
            ))}
          </ul>
          {sponsorship.available && (
            <a
              href="https://forms.gle/HY3t7kTxqUEaPMEVA"
              rel="nofollow"
              className="bg-white p-4 text-purple-500 border-2 border-purple-500 hover:bg-purple-600 hover:text-white font-bold rounded text-center mt-4"
            >
              Become a sponsor
            </a>
          )}
          {!sponsorship.available && (
            <span className="bg-grey-300 p-4 text-gray-700 border-2 border-gray-300 font-bold rounded text-center mt-4">
              No longer available
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sponsorship;
