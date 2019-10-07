const keynoteStyles = {
  container: "w-full md:w-1/2 flex pb-6 flex-grow-0 md:mb-6 lg:mb-12",
  image:
    "w-1/3 md:w-1/3 rounded-lg self-start border border-gray-300 shadow-lg rounded-full",
  details: "ml-4 sm:ml-6 sm:mr-6 lg:ml-8 lg:mr-8",
  name: "text-2xl font-bold block",
  role: "text-gray-600",
  bio: "text-sm pt-4 md:text-base"
};

const speakerStyles = {
  container: "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-1 mb-12 pl-4 pr-4",
  image: "rounded-lg mb-4 border border-gray-300 shadow-lg rounded-full",
  details: "pl-2 pr-2",
  name: "text-center block font-bold",
  role: "text-center block text-gray-600 text-xs",
  bio: "text-xs"
};

function Speaker({ speaker, schedule }) {
  const isKeynote = speaker.fields.Keynote;

  return (
    <li
      className={isKeynote ? keynoteStyles.container : speakerStyles.container}
    >
      <img
        className={isKeynote ? keynoteStyles.image : speakerStyles.image}
        src={
          speaker.fields.Image
            ? `/static/images/${speaker.fields.Image}`
            : `/static/images/speakers/testspeaker.jpg`
        }
        alt={speaker.fields.Name}
      />
      <div
        className={isKeynote ? keynoteStyles.details : speakerStyles.details}
      >
        <span className={isKeynote ? keynoteStyles.name : speakerStyles.name}>
          {speaker.fields.Name}
        </span>
        <span className={isKeynote ? keynoteStyles.role : speakerStyles.role}>
          {speaker.fields.Role}{" "}
          {speaker.fields.Company ? `at ${speaker.fields.Company}` : ""}
        </span>
        {isKeynote && (
          <p className={isKeynote ? keynoteStyles.bio : speakerStyles.bio}>
            {speaker.fields.Bio}
          </p>
        )}
        <ul className="pt-2 flex">
          {speaker.fields.Twitter && (
            <li>
              <a
                href={speaker.fields.Twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm pr-2 text-blue-500 hover:text-blue-700"
              >
                Twitter
              </a>
            </li>
          )}
          {speaker.fields.LinkedIn && (
            <li>
              <a
                href={speaker.fields.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm pr-2 text-blue-500 hover:text-blue-700"
              >
                LinkedIn
              </a>
            </li>
          )}
          {speaker.fields.Website && (
            <li>
              <a
                href={speaker.fields.Website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm pr-2 text-blue-500 hover:text-blue-700"
              >
                Website
              </a>
            </li>
          )}
        </ul>
      </div>
    </li>
  );
}

export default Speaker;
