export default function Info(props) {
  return (
    <div className="contact__information">
      <span>{props.icon}</span>
      <h3>{props.title}</h3>
      <p>{props.pragraph}</p>
    </div>
  );
}
