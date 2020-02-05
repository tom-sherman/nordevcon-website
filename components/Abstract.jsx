import { Dialog } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";

export default function Abstract({ talk, speakers, isOpen, onClose }) {
  return (
    <Dialog
      style={{}}
      isOpen={isOpen}
      onDismiss={() => onClose()}
      aria-label={talk.fields.Title}
    >
      <button
        className="position-relative float-right text-4xl close-button cursor-pointer"
        onClick={onClose}
      >
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
      <p className="font-bold text-xl">{talk.fields.Title}</p>
      {speakers ? (
        <>
          <p className="">
            {speakers.map(speaker => speaker.fields.Name).join(", ")}
          </p>
          <p>{speakers[0]?.fields.Company}</p>
        </>
      ) : null}

      <div
        className="modal-content mt-8"
        dangerouslySetInnerHTML={{
          __html: talk.fields.Abstract
        }}
      />
      <button
        className="position-relative text-xl font-bold mt-4 cursor-pointer"
        onClick={onClose}
      >
        <span>Close</span>
      </button>
    </Dialog>
  );
}
