import * as airtable from "./api/airtable";
import config from "../config.json";
import Layout from "../layouts/default";
import Hero from "../components/Hero";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <Layout>
      <Hero>
        <div className="flex flex-col w-full p-4 py-8 mx-auto text-white md:justify-start md:p-8 max-w-7xl">
          <div className="max-w-xs pr-4 mb-32">
            <Logo />
          </div>

          <div className="flex-1 md:flex-none">
            <h1 className="mb-8 text-5xl font-extrabold">
                <span className="mr-2 font-extrabold text-purple-600">#</span>
                NorDevCon23
            </h1>
            
            <h2 className="mb-16 text-2xl font-bold !leading-relaxed md:text-3xl">
              The eastern region&apos;s biggest tech conference.
              
              <span className="font-normal">
                &nbsp;Two days for software developers, data scientists, startups, &amp; students.
              </span>
            </h2>

            <h3 className="mb-4 text-3xl font-extrabold md:text-4xl">
              {config.date}
            </h3>
          </div>

          <div className="mt-16">
            <a href={config.tickets} className="block px-12 py-8 text-2xl font-extrabold text-center bg-purple-700 rounded md:inline-block hover:bg-purple-500">
              Get your ticket
            </a>
          </div>
        </div>
      </Hero>
    </Layout>
  )
}

export async function getStaticProps() {
  const [speakers, schedule, sponsors] = await Promise.all([
    airtable.getSpeakers(),
    airtable.getSchedule(),
    airtable.getSponsors()
  ]);

  return {
    props: {
      speakers: speakers,
      schedule: schedule,
      sponsors: sponsors,
    },
    revalidate: 60
  };
}
