import React from "react";
import LandingHead from "../LandingHead/LandingHead";
import { Col } from "react-bootstrap";
import facebook from "../../assets/icons/facebook.png";
import x from "../../assets/icons/x.png";
import linkedin from "../../assets/icons/linkedin.png";
import email from "../../assets/icons/email.png";
import phone from "../../assets/icons/phone.png";
import location from "../../assets/icons/location.png";

const contacts = [
  {
    icon: email,
    text: "hello@français avec Mme Karima.com",
    alt: "email"
  },
  {
    icon: phone,
    text: "+20-1-1-1-1-1-1-1-1",
    alt: "phone"
  },
  {
    icon: location,
    text: "Some Where in the World",
    alt: "location"
  },
];

const ContactUs: React.FC = (): JSX.Element => {
  return (
    <div className="contact-us py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <LandingHead />
      <div className="container d-flex  align-items-center justify-content-around gap-4 flex-wrap my-5 py-5">
        {contacts.map((contact, i) => (
          <Col md={4} className="col-12 text-center bg-white p-5 rounded" key={i}>
              <img src={contact.icon} alt={contact.alt} className="p-3 rounded" style={{backgroundColor: "#f8f9fa"}} />{" "}
              <p className="mt-4" style={{fontSize: "14px"}}>{contact.text}</p>
          </Col>
        ))}
        <Col md={4} className="col-12 text-center bg-white rounded p-5">
            <div className="d-flex justify-content-center">
              <a href="#" className="text-dark me-3">
                <img className="me-2" src={facebook} alt="facebook" />
              </a>
              <a href="#" className="text-dark me-3">
                <img className="me-2" src={x} alt="x" />
              </a>
              <a href="#" className="text-dark">
                <img className="me-2" src={linkedin} alt="linkedin" />
              </a>
            </div>
            <p className="mt-4" style={{fontSize: "14px"}} >Social Profiles</p>
        </Col>
      </div>
    </div>
  );
};

export default ContactUs;
