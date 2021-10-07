import EntypoCalendar from "react-entypo-icons/lib/entypo/Calendar";

export default function Hero({ speakers }) {
  return (
    <section className="p-4 md:p-8 lg:p-12 text-white min-h-screen" id="hero">
      <div className="container mx-auto lg:py-32">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
          NOR(DEV):CON
        </p>
        <h1 className="text-xl md:text-2xl lg:text-3xl text-purple-200">
          Norfolk Developers Conference
        </h1>
        <p className="text-md md:text-xl lg:text-2xl mb-4">June 2022</p>
        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=nor(DEV):con+2021&dates=20210224T090000Z/20210226T180000Z&details=Visit+the+website+for+details:+https://nordevcon.com&location=Kings+Centre,+Norwich,+NR1+1PH&sf=true&output=xml"
          className="bg-white block text-center text-gray-800 p-3 font-bold mt-4 w-full max-w-sm rounded shadow-lg hover:bg-red-600"
        >
          <EntypoCalendar /> Add to Google calendar
        </a>
        &raquo;{" "}
        <a
          href="https://2020.nordevcon.com"
          className="inline-block underline text-purple-300 mt-2"
        >
          Looking for nor(DEV):con 2020?
        </a>
      </div>
    </section>
  );
}
