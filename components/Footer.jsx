import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-2 md:mt-4 lg:mt-8 bg-purple-900 text-white">
      <div className="section py-8 md:flex">
        <div className="mb-4 md:mb-0 flex-grow">
          <p>
            Norfolk Developers Ltd is a&nbsp;
            <a className="underline" href="https://beta.companieshouse.gov.uk/company/09500154">
              Registered CIC (Non Profit) Organisation
            </a>
            &nbsp;09500154
          </p>
        </div>

        <nav className="">
          <ul className="flex">
            <li className="mr-2">
              <Link href="/sponsorship">
                <a className="underline font-bold">
                  Become a Sponsor
                </a>
              </Link>
            </li>
            <li className="mr-2">
              <Link href="/code-of-conduct">
                <a className="underline font-bold">
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