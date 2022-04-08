const meals = {
  dinner: {
    type: "dinner",
    title: "🍽 Conference Dinner",
    image: "/static/images/dinner.jpg",
    imageAlt: "Norfolk Developers Conference Dinner",
    description:
      "Enjoy an exceptional post-conference three course meal, prepared by Ginger Lily catering.",
    summary:
      "We'll close off 2022 with a delicious meal. Join us to network and chat with fellows, discuss your highlights of the conference, and your favourite talks.",

    when: "Fri, 17th June 2022 19:00 – 22:00",
    link:
      "https://ti.to/norfolkdevelopers/nordevcon-22/with/conference-dinner",
    price: "£40"
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
          {/* <a
            className="btn bg-red-500 m-2"
            href={meal.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Tickets
          </a> */}
          {/* <span className="text-gray-500">{meal.price}</span> */}
          {/* {meal.type === "dinner" ? (
            <a className="text-gray-500 ml-auto" href={meal.link}>
              View menu
            </a>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}

export default function Food() {
  return (
    <div className="sm:flex sm:flex-row md:-mx-2">
      {renderMeal(meals.dinner)}
    </div>
  );
}
