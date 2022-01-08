import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="section py-8 md:flex">
        <div className="mb-4 md:mb-0 flex-grow">
          <p>
            <a className="underline" href="https://beta.companieshouse.gov.uk/company/09500154">
              Norfolk Developers Ltd registered as 09500154
            </a>
          </p>
        </div>

        <nav className="">
          <ul className="md:flex">
            <li className="mr-2">
              <a className="font-bold md:underline" href="https://www.twitter.com/NorfolkDev">
                Follow us
              </a>
            </li>
            <li className="mr-2">
              <a className="font-bold md:underline" href="https://www.patreon.com/NorfolkDev">
                Become a Patreon
              </a>
            </li>
            <li className="mr-2">
              <Link href="/sponsorship">
                <a className="font-bold md:underline">
                  Become a Sponsor
                </a>
              </Link>
            </li>
            <li className="mr-2">
              <Link href="/code-of-conduct">
                <a className="font-bold md:underline">
                  Code of Conduct
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}