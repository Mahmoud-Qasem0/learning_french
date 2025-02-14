import React, { useCallback, useEffect, useState } from "react";
import LandingHead from "../LandingHead/LandingHead";
import { Button, Card, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./courses.css";
import axios from "axios";
import { toast } from "react-toastify";

interface ICourses {
  id: number;
  title: string;
  desc: string;
  level: string;
  instructor: string;
  lectures: {
    id: number;
    title: string;
    lessons: { title: string; duration: number }[];
  }[];
}

const Courses: React.FC = (): JSX.Element => {
  const [courses, setCourses] = useState<ICourses[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const getCourses = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:8000/courses");
      setCourses(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message || "خطأ في جلب البيانات");
        toast.error(errorMessage);
      } else {
        setErrorMessage("حدث خطأ غير متوقع");
      }
    } finally {
      setLoading(false); // يتم إيقاف التحميل سواء حدث خطأ أم لا
    }
  }, [errorMessage]);

  const navigate = useNavigate();

  useEffect(() => {
    getCourses();
  }, [getCourses]);


  if (loading) return <div className="text-center py-5">جارٍ التحميل...</div>;
  if (errorMessage) return <div className="text-center py-5 text-danger">خطأ: {errorMessage}</div>;

  return (
    <div className="courses py-1" style={{ backgroundColor: "#F8F9FA" }}>
      <LandingHead />
      <Container>
        {courses.map((course) => (
          <Card className="my-5 p-4 border-0" key={course.id}>
            <div className="d-flex align-items-start align-items-md-center  justify-content-between flex-column flex-md-row mt-3 mb-5">
              <div className="course-info text-right">
                <h2 className="fs-lg-2 fs-4 mb-4 mb-md-3">{course.title}</h2>
                <p className="text-black-50" style={{ maxWidth: "500px" }}>
                  {course.desc}
                </p>
              </div>
              <Button
                className=" mb-0 text-black p-3 border-0"
                style={{ backgroundColor: "#FCFCFD" }}
                onClick={() =>
                  navigate("/open-course", {
                    state: { course: course },
                  })
                }>
                شاهد الكل
              </Button>
            </div>
            <div
              className="info-course d-flex justify-content-between align-items-center mb-3 text-black-50"
              style={{ fontSize: "0.75rem" }}>
              <span className="border p-1 rounded">{course.level}</span>
              <span className="fw-bold">{course.instructor}</span>
            </div>
            <div className="border rounded">
              <h2 className="fs-lg-2 fs-4 mb-4 mb-md-0 text-right border-bottom py-3 ps-3">
                المناهج الدراسية
              </h2>
              <div className="row container">
                {course.lectures.map((lecture) => (
                  <Col
                    key={lecture.id}
                    className="lec-container col-12 col-lg-2 flex-grow-1 my-md-4  mx-2 bg-white p-3 align-items-stretch h-100 text-strat">
                    <span className="fs-2 fw-bold d-block">{`0${lecture.id}`}</span>
                    <p className="my-3 " style={{ fontSize: "14px" }}>
                      {lecture.title}
                    </p>
                  </Col>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </Container>
    </div>
  );
};
export default Courses;
