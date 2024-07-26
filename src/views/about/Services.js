import "./services.css";

export default function Services(props) {
  return (
    <div className="service__item">
      <span className="service__icon">{props.icon}</span>
      <h6>{props.title}</h6>
      <p>{props.description}</p>
    </div>
  );
}
