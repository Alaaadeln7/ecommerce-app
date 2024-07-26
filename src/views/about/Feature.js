import "./feature.css";
export default function Feature(props) {
  return (
    <div
      className="feature mt-5 border shadow-sm rounded-2 d-flex flex-column align-items-center justify-content-justify-content-evenly gap-2"
      style={{ width: "200px", padding: "10px 0" }}
    >
      <span style={{ fontSize: "40px" }}>{props.icon}</span>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}
