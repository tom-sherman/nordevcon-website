function Speaker({ speaker, schedule }) {
  const isKeynote = speaker.fields.Keynote;

  const keynoteStyles = {
    container: "max-w-xs",
    image: "max-w-xs rounded-full",
    name: "text-2xl font-bold block ml-4 pt-8"
  };

  const speakerStyles = {
    container: "w-20",
    image: "rounded-full w-12",
    name: ""
  };

  return (
    <li
      className={isKeynote ? keynoteStyles.container : speakerStyles.container}
    >
      <img
        className={isKeynote ? keynoteStyles.image : speakerStyles.image}
        src="https://placekitten.com/420/420"
        alt={speaker.fields.Name}
      />
      <div>
        <span className={isKeynote ? keynoteStyles.name : speakerStyles.name}>
          {speaker.fields.Name}
        </span>
        <span className="text-xl block ml-4 text-gray-600 ">
          {speaker.fields.Role}{" "}
          {speaker.fields.Company ? `at ${speaker.fields.Company}` : ""}
          {speaker.fields.Bio}
        </span>
      </div>
    </li>
  );
}

export default Speaker;
