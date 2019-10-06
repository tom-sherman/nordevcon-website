import Layout from "../layouts/main";

const PACKAGES = {
  elite: {
    price: "£3,300",
    title: "Elite",
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
    features: [
      "Logo on website",
      "Logo in opening presentation",
      "Logo in printed programme",
      "Mentions on twitter",
      "Quarter page logo in programme"
    ]
  },
  refreshments: {
    title: "Refresments",
    price: "£2400",
    features: [
      "Sponsor tea, coffee",
      "Acknowledgment in programme and 2 x A4 banners on tea and coffee station",
      "Space for an additional small banner",
      "Option to provide branded reusable Americano cups"
    ]
  },
  lunch: {
    title: "Lunch",
    price: "£2900",
    features: [
      "A4 banner on lunch tables",
      "Serving staff wear your t-shirt message",
      "Acknowledgment in programme and 2 x A4 banners on lunch station",
      "Space for an additional small banner"
    ]
  },
  dinner: {
    title: "Conference Dinner",
    price: "£2800",
    features: [
      "Five minute introduction before dinner",
      "Logo on placecards/card in lanyard",
      "Space for two small banners at entrance"
    ]
  }
};

function Sponsorship() {
  return (
    <Layout>
      <section className="p-6 pt-12" id="hero">
        <h1 className="text-2xl font-bold">Sponsorship</h1>
        <p className="text-sm pb-4">
          nor(DEV):con is a <strong>not-for-profit event</strong> which relies
          on sponsorship to keep going. We list a number of opportunities to
          help support us below. Choose how you'd like to be involved.
        </p>
        <p className="text-sm pb-4">
          <em>
            Any money made from the conference is invested back into the
            conference, Norfolk Developers and the Norfolk tech community.
          </em>
        </p>
        <div className="flex flex-wrap items-stretch">
          <SponsorshipBox sponsorship={PACKAGES.elite} />
          <SponsorshipBox sponsorship={PACKAGES.partner} />
          <SponsorshipBox sponsorship={PACKAGES.associate} />
        </div>
        <div className="flex flex-wrap">
          <SponsorshipBox sponsorship={PACKAGES.refreshments} />
          <SponsorshipBox sponsorship={PACKAGES.lunch} />
          <SponsorshipBox sponsorship={PACKAGES.dinner} />
        </div>
      </section>
    </Layout>
  );
}

function SponsorshipBox({ sponsorship }) {
  return (
    <div className="p-4 w-full sm:w-1/2 md:w-1/3 flex">
      <div className=" shadow-lg border mb-4 rounded-lg p-4 w-full border">
        <h2 className="text-lg font-bold">{sponsorship.title}</h2>
        <span className="text-md font-bold text-gray-600">
          {sponsorship.price}
        </span>
        <ul className="list-disc pl-4">
          {sponsorship.features.map(item => (
            <li key={item} className="pt-2 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sponsorship;
