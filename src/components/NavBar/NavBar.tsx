import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Button, ButtonGroup } from "react-bootstrap";

const NavBar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary py-3">
        <div className="container-fluid">
          <Link to="/home">
            <img src={Logo} alt="Logo" />
          </Link>
          <ButtonGroup className="d-flex">
            <Button
              className="d-lg-none rounded border-0 bg-transparent"
              style={{ fontSize: "14px", color: "#262626" }}
              onClick={() => navigate("/sign-up")}>
              إنشاء حساب
            </Button>
            <Button
              className="d-lg-none rounded border-0"
              style={{ fontSize: "14px", backgroundColor: "#FF9500" }}
              onClick={() => navigate("/login")}>
              تسجيل دخول
            </Button>
          </ButtonGroup>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 shadow-none"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-lg-5">
              <Link
                to="/"
                className="my-3 text-center mx-lg-3"
                style={{ color: "#262626" }}>
                الرئيسية
              </Link>
              <Link
                to="/our-courses"
                className="my-3 text-center mx-lg-3"
                style={{ color: "#262626" }}>
                محاضراتنا الأساسية
              </Link>
              <Link
                to="/about"
                className="my-3 text-center mx-lg-3"
                style={{ color: "#262626" }}>
                عنا
              </Link>
              <Link
                to="/contact"
                className="my-3 text-center mx-lg-3"
                style={{ color: "#262626" }}>
                التواصل
              </Link>
              <Link
                to="https://github.com/Mahmoud-Qasem0"
                className="my-3 text-center mx-lg-3"
                style={{ color: "#262626" }}>
                عن المطور
              </Link>
            </Nav>
          </Navbar.Collapse>
          <ButtonGroup className="d-none d-lg-flex">
            <Button
              className=" rounded border-0 bg-transparent"
              style={{ fontSize: "14px", color: "#262626" }}
              onClick={() => navigate("/sign-up")}>
              إنشاء حساب
            </Button>
            <Button
              className=" rounded border-0"
              style={{ fontSize: "14px", backgroundColor: "#FF9500" }}
              onClick={() => navigate("/login")}>
              تسجيل دخول
            </Button>
          </ButtonGroup>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
