import { Container } from "react-bootstrap";
import "./contact.css";
import contactInfo from "./contactInfo";
import Info from "./Info";
export default function Contact() {
  const printContactInfo = contactInfo.map((item) => (
    <Info icon={item.icon} title={item.title} pragraph={item.pragraph} />
  ));
  return (
    <section className="contact__section">
      <Container>
        <div className="contact__container">
          <div className="contact__info">{printContactInfo}</div>
          <div className="contact__form"></div>
        </div>
      </Container>
    </section>
  );
}
