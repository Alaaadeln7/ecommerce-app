import React from "react";
import { Card } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./employee.css";
import LoadingImage from "../../components/LoadingImage";
export default function Employee(props) {
  return (
    <Card
      style={{
        width: "18rem",
        marginTop: "30px",
        border: "none",
        borderRadius: "0",
      }}
    >
      <LoadingImage
        className="card-img-top employee_image"
        variant="top"
        src={props.image}
        alt={"employer photo"}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.jobTitle}</Card.Text>
        <div className="social__media">
          <ul>
            <li>
              <Link>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link>
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}
