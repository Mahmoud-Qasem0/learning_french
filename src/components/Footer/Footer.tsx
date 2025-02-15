import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.png";
import facebook from "../../assets/icons/facebook.png";
import x from "../../assets/icons/x.png";
import linkedin from "../../assets/icons/linkedin.png";
import email from "../../assets/icons/email.png";
import phone from "../../assets/icons/phone.png";
import location from "../../assets/icons/location.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-4 border-top">
      <div className="container-fluid">
        <Row className="align-items-center text-center text-md-start flex-column flex-md-row">
          {/* القسم الأول - اللوجو والمعلومات */}
          <Col md={4} className="mb-3 mb-md-0 text-center text-md-start">
            <img src={logo} alt="Logo" width={40} className="mb-2" />
            <p className="mb-1">
              <img className="me-2" src={email} alt="email" />{" "}
              hello@francaisavecMmeKarima.com
            </p>
            <p className="mb-1">
              <img className="me-2" src={phone} alt="phone" />{" "}
              +20-1-1-1-1-1-1-1-1
            </p>
            <p className="mb-0">
              <img className="me-2" src={location} alt="location" /> Somewhere
              in the World
            </p>
          </Col>

          {/* القسم الثاني - الروابط */}
          <Col md={2} className="mb-3 mb-md-0 text-center text-md-start">
            <h6 className="fw-bold">الرئيسية</h6>
            <p className="mb-1">القائمة</p>
            <p className="mb-0">محاضراتنا الأساسية</p>
          </Col>

          <Col md={2} className="mb-3 mb-md-0 text-center text-md-start">
            <h6 className="fw-bold">عنا</h6>
            <p className="mb-1">الاتصالات</p>
            <p className="mb-0">اهدافنا</p>
          </Col>

          {/* القسم الثالث - مواقع التواصل */}

          <Col md={4} className="text-center">
            <h6 className="fw-bold">مواقع التواصل الاجتماعي</h6>
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
          </Col>
        </Row>

        {/* الحقوق */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
              &copy; 2025 français avec Mme Karima. جميع الحقوق محفوظة.
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
