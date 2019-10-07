import Speaker from "../components/Speaker";

function simpleSort(a, b) {
  if (a.fields.Name < b.fields.Name) return -1;
  if (a.fields.Name > b.fields.Name) return 1;
  return 0;
}

function Speakers({ speakers }) {
  return (
    <>
      <img
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          marginTop: "50px"
        }}
        src="/static/images/bg.svg"
        alt="background"
      />
      <section className="container mx-auto mt-12" id="speakers">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Speakers
        </h1>
        <ul className="flex flex-wrap mb-2 lg:mb-4 ">
          {speakers
            .filter(speaker => speaker.fields.Keynote === true)
            .sort(simpleSort)
            .map(speaker => (
              <Speaker key={speaker.id} speaker={speaker} />
            ))}
        </ul>
        <ul className="flex flex-wrap -ml-4 -mr-4">
          {speakers
            .filter(speaker => speaker.fields.Keynote !== true)
            .sort(simpleSort)
            .map(speaker => (
              <Speaker key={speaker.id} speaker={speaker} />
            ))}
        </ul>
      </section>
    </>
  );
}

export default Speakers;
