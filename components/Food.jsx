const meals = {
  breakfast: {
    type: "breakfast",
    title: "🍳  Conference Breakfast",
    image: "/static/images/breakfast.jpg",
    imageAlt: "Norfolk Developers Conference Breakfast",
    description:
      "Breakfast at the Maids Head Hotel, supported by Birketts & hosted by James Russell (Brisk).",
    summary:
      "In this talk, James will talk about what Brisk is doing with the likes of Aviva, Hiscox and Covea Insurance to protect and reward businesses who are willing to be open with their data.",
    when: "Fri, 28 February 2020, 07:30 – 08:30",
    link:
      "https://www.eventbrite.co.uk/e/nordevcon-2020-conference-breakfast-tickets-88674661299",
    price: "£15.15"
  },
  dinner: {
    type: "dinner",
    title: "🍽 Conference Dinner",
    image: "/static/images/dinner.jpg",
    imageAlt: "Norfolk Developers Conference Dinner",
    description:
      "Enjoy an exceptional post-conference three course meal, prepared by Ginger Lily catering.",
    summary:
      "We're joined by Norfolk County Council and a representative from the Department for International Trade who will give us a brief update on their local initiatives and investments.",

    when: "Fri, 28 February 2020 19:00 – 22:00",
    link:
      "https://www.eventbrite.co.uk/e/nordevcon-2020-conference-dinner-tickets-91142229863",
    price: "£15.15"
  }
};

function renderMeal(meal) {
  return (
    <div className="bg-white shadow-lg border rounded-lg w-full border sm:m-2 mb-4 flex flex-col overflow-hidden md:w-1/2">
      <header className="p-4 bg-purple-600 text-white">
        <h2 className="block text-2xl font-bold text-center">{meal.title}</h2>
      </header>
      <div className="w-auto">
        <img className="mx-auto" src={meal.image} alt={meal.imageAlt} />
        <div className="m-2">
          <p className="m-2 font-bold">{meal.description}</p>
          <p className="m-2">{meal.summary}</p>
          <p className="m-2 text-gray-600 font-bold">{meal.when}</p>
          <a
            className="btn bg-red-500 m-2"
            href={meal.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Tickets
          </a>
          {/* <span className="text-gray-500">{meal.price}</span> */}
          {meal.type === "dinner" ? (
            <a className="text-gray-500 ml-auto" href={meal.link}>
              View menu
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Food() {
  return (
    <div className="sm:flex sm:flex-row md:-mx-2">
      {renderMeal(meals.breakfast)}
      {renderMeal(meals.dinner)}
    </div>
  );
}
