const s3 =
  "https://norfolkdevelopers.s3.eu-west-2.amazonaws.com/nordevcon-website/2022/images";

export default function Sponsor({ sponsor }) {
  return (
    <div className="bg-white shadow-lg border mb-4 rounded-lg w-full border flex flex-col overflow-hidden">
      <h3 className="block py-2 px-4 text-2xl text-white bg-orange-600 font-bold text-center">
        {sponsor.fields.Name}
      </h3>

      {sponsor.fields.Package ? (
        <p className="block mb-4 py-2 px-4 text-lg text-orange-700 bg-orange-400 text-center font-bold uppercase">
          {sponsor.fields.Package}
        </p>
      ) : (
        <p className="invisible block mb-4 py-2 px-4 text-lg text-center font-bold uppercase">
          TBC
        </p>
      )}

      {sponsor.fields.Image && (
        <div className="mb-4 px-4">
          <img
            className="mx-auto"
            src={`${s3}/${sponsor.fields.Image}`}
            alt={sponsor.fields.name}
          />
        </div>
      )}

      <div className="flex-grow">
        {sponsor.fields.Description && (
          <p className="mb-4 px-4">{sponsor.fields.Description}</p>
        )}
      </div>

      <div className="flex mb-4 px-4">
        {sponsor.fields.Website && (
          <a
            className="btn btn-orange"
            href={sponsor.fields.Website}
            rel="nofollow"
          >
            Website
          </a>
        )}

        {sponsor.fields.Twitter && (
          <a
            className="btn btn-orange"
            href={sponsor.fields.Twitter}
            rel="nofollow"
          >
            Twitter
          </a>
        )}
      </div>
    </div>
  );
}
