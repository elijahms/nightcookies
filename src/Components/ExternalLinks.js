import { contactLinks } from "../assets/conts";

export const DeliveryLinks = () => {
  return (
    <>
      {" "}
      <a target="_blank" rel="noopener noreferrer" href={contactLinks.uber}>
        Uber
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={contactLinks.deliveroo}
      >
        Deliveroo
      </a>
    </>
  );
};

export const ExternalLinks = () => {
  return (
    <>
      {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={contactLinks.press.hetparool}
      >
        Hetparool
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={contactLinks.press.dewestkrant}
      >
        De Westkrant
      </a>
    </>
  );
};
