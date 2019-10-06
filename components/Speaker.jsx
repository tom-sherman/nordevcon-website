const keynoteStyles = {
  container: "w-full md:w-1/2 flex pb-6 flex-grow-0",
  image: "w-1/2 rounded-full self-start p-2 md:p-4 lg:p-6 ",
  details: "pl-4 pr-4 self-center",
  name: "text-2xl font-bold block",
  role: "text-gray-600",
  bio: "text-sm pt-4"
};

const speakerStyles = {
  container: "w-1/3 md:w-1/4 lg:w-1/6 p-2 mb-12",
  image: "rounded-full mb-4",
  details: "",
  name: "text-center block font-bold",
  role: "text-center block text-sm text-gray-600",
  bio: "mt-2 text-sm"
};

function Speaker({ speaker, schedule }) {
  const isKeynote = speaker.fields.Keynote;

  return (
    <li
      className={isKeynote ? keynoteStyles.container : speakerStyles.container}
    >
      <img
        className={isKeynote ? keynoteStyles.image : speakerStyles.image}
        src="https://placekitten.com/420/420"
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
        <p className={isKeynote ? keynoteStyles.bio : speakerStyles.bio}>
          {speaker.fields.Bio}
        </p>
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
