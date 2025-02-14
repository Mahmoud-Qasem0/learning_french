import React, { useEffect } from "react";
import LandingHead from "../LandingHead/LandingHead";
import courseImg from "../../assets/Landing/course1.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import Hour from "../../assets/icons/hour.png";
import "./open-course.css";
import { useLocation, useNavigate } from "react-router-dom";

export interface Lesson {
  title: string;
  duration: number;
}

export interface Lecture {
  id: number;
  title: string;
  lessons: Lesson[];
}
const OpenCourse: React.FC = (): JSX.Element => {
  const [lectures, setLectures] = React.useState<Lecture[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(
    () => setLectures(location.state?.course.lectures),
    [location.state?.course.lectures]
  );
  return (
    <div className="py-1 open-course" style={{ backgroundColor: "#F8F9FA" }}>
      <Container>
        <LandingHead />
        <div className="image-box my-5">
          <img
            className="img-fluid mx-auto"
            width="1280"
            height="649"
            src={courseImg}
            alt="Course Image"
          />
        </div>
        <Row>
          {lectures?.map((lecture) => (
            <Col md={6} key={lecture.id} className="mb-4">
              <Card className="border-0">
                <Card.Body>
                  <h2 className="fw-bold text-end">{`0${lecture.id}`}</h2>
                  <Card.Title className="fw-bold fs-6 my-4">
                    {lecture.title}
                  </Card.Title>
                  <ul className="list-unstyled">
                    {lecture.lessons.map((lesson, i) => (
                      <li
                        key={i}
                        className="d-flex justify-content-between align-items-center mb-4 border px-3 py-2 rounded"
                        onClick={() =>
                          navigate("/lecture-page", {
                            state: { lesson: lesson, lecture: lectures[i].title },
                          })
                        }>
                        <div className="lesson-title">
                          <p className="m-0">{lesson.title}</p>
                          <span
                            className="text-black-50"
                            style={{
                              fontSize: "14px",
                            }}>{`Lesson 0${++i}`}</span>
                        </div>
                        <div className="time-duration p-2 rounded">
                          <img className="me-1" src={Hour} alt="Hour icon" />
                          <span style={{ fontSize: "12px" }}>
                            {lesson.duration >= 60
                              ? `${lesson.duration / 60}Hour`
                              : `${lesson.duration}Minutes`}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OpenCourse;
