import Layout from "../layouts/main";
import Navigation from "../components/Navigation";

const s3 =
  "https://norfolkdevelopers.s3.eu-west-2.amazonaws.com/nordevcon-website/images";

const WORKSHOPS = [
  {
    title: "Ideas with Impact",
    description: [
      "This workshop is aimed at people who want to shape a business idea or project but aren't sure where to start. It will also be of value to anyone who wants to understand, in detail, a process of ideation and, learn deliberate techniques to develop and test ideas outside of a technical context.",
      "During the workshop Matt will explore business tools and techniques which he uses in his own practice to help people shape their ideas into impactful and feasible ventures or projects. The workshop will cover a broad range of topics and include a lot of practical activities, some of which will necessitate working in small groups with other participants.",
      "All of the tools Matt will use are freely available and, there will be copies to take away with you.",
    ],
    tutor: {
      name: "Matthew Draycott",
      description: [
        "Matt is a lecturer and a recovering entrepreneur, he's been teaching enterprise and entrepreneurial skills for over a decade and currently lectures at a number of institutions around the UK, delivering a range of course focused on mindset development, ideation, business modelling and business strategy.",
        "In addition to this he also mentors a number of start-up businesses and consults on business growth ad development for a range of companies."
        ],
      avatar: `${s3}/speakers/matthew-draycott.jpg`
    }
  },
  {
    title: "ITIL Problem Management Methodology",
    description: [
      "Troubleshooters are special people. They are able to walk into a mess and make sense out of it. They have a knack for recognising problems earlier than most and before the customer notices.  They find the root cause and fix it in a way that means the problem stays fixed. Really good troubleshooters think ahead and avoid problems before they happen. Learn how they do it and how to acquire the same skills.",
      "This workshop is ideal for employees and students at all levels who are required to troubleshoot, root cause, make decisions or implement plans.  It is particularly suitable for managers who are just about to create a new customer service department, for students just about to enter the marketplace and for senior executives who want to improve the performance and efficiency of existing engineering, customer service, manufacturing or operations teams.",
      ],
    tutor: {
      name: "Michael Davey",
      description: [
        "His 22-year career has included the design and maintenance of IPTV networks (predominantly Fibre-to-the-Home) and IPTV set-top-boxes. He has experience in multi-million dollar consumer electronics and networking projects, including the design, procurement, project management, installation and commissioning of broadcast, broadband and Internet-of-things solutions.",
        "Michael is a Software Architect and member of the BCS.",
        "He holds a BEng(Hons) from Brunel University.",
      ],
      avatar: `${s3}/speakers/michael-davey.jpg`
    }
  }
];

export default function Workshops({ speakers }) {
  return (
    <Layout>
      <Navigation />

      <section className="section lg:flex">
        <div className="mb-4 lg:mb-0 lg:pr-4 lg:w-1/3">
          <h1 className="headline">Workshops</h1>
          <p>
            A range of Workshops will be running in tandem with the Conference.
            Delivered by our speakers and trusted partners, see below, if you'd
            like a more hands-on experience at the conference.
          </p>
        </div>

        <div className="lg:w-2/3">
          <img
            src={`${s3}/workshops/hero.jpg`}
            alt="Workshops at Nor(Dev):Con 2020"
            height="426"
            width="840"
          />
        </div>
      </section>

      <section className="section" id="workshops">
        <ul>
          {WORKSHOPS.map(workshop => (
            <li className="mb-4">
              <h2 className="headline leading-none mb-0">{workshop.title}</h2>
              <h3 className="mb-2 text-xl text-gray-600 leading-none">{workshop.tutor.name}</h3>

              {workshop.description.map(line => <p className="mb-2 text-sm">{line}</p>)}

              <div className="mt-2 flex">
                <div className="w-1/3 p-2 pl-0">
                  <img src={workshop.tutor.avatar} />
                </div>
                <div className="w-2/3 p-2 pr-0">
                  <h4 className="mb-2 font-bold leading-none">{workshop.tutor.name}</h4>
                  {workshop.tutor.description.map(line => <p className="mb-2 text-sm">{line}</p>)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}