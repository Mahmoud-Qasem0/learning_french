import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Lesson } from "../OpenCourse/OpenCourse";
import { Container } from "react-bootstrap";
import umsvid from "../../assets/ums.mp4";

const LecturePage: React.FC = () => {
  const [lesson, setLesson] = React.useState<Lesson>();
  const [lecture, setLecture] = React.useState("");
  const location = useLocation();

  useEffect(() => {
    setLesson(location.state?.lesson);
    setLecture(location.state?.lecture);
  }, [location.state]);
  return (
    <>
      <Container>
        <video className="my-4 w-100 rounded" width="320" controls>
          <source src={umsvid} type="video/mp4" />
        </video>
        <div className="vid-desc">
          <h4>{lesson?.title}</h4>
          <span className="fw-bold" style={{ fontSize: "12px" }}>
            MME Karima El Masry
          </span>
          <p className="my-4 text-black-50">{lecture}</p>
        </div>
      </Container>
    </>
  );
};

export default LecturePage;
