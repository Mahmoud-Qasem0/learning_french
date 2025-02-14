import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import course1 from "../../assets/Landing/course1.png";
import course2 from "../../assets/Landing/course2.png";
import course3 from "../../assets/Landing/course3.png";
import course4 from "../../assets/Landing/course4.png";
import course5 from "../../assets/Landing/course5.png";
import course6 from "../../assets/Landing/course6.png";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    img: course1,
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    title: "الأبجدية الفرنسية والنطق",
    desc: "تعلم الأبجدية الفرنسية وكيفية نطق كل حرف وصوت بشكل صحيح. هذه هي الأساسيات للقراءة والتحدث باللغة الفرنسية.",
  },
  {
    id: 2,
    img: course2,
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    title: "التحيات الأساسية والعبارات المتداولة",
    desc: "ابدأ بالتحيات الأساسية والعبارات البسيطة مثل قول 'مرحبًا'، تقديم نفسك، وطرح الأسئلة الأساسية للتعامل مع المحادثات اليومية.",
  },
  {
    id: 3,
    img: course3,
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    title: "المفردات الأساسية للمبتدئين",
    desc: "ابنِ أساسًا قويًا باستخدام الكلمات الشائعة المستخدمة في الحياة اليومية، مثل أفراد الأسرة، الألوان، الطعام، والأشياء من حولك.",
  },
  {
    id: 4,
    img: course4,
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    title: "الأرقام وأيام الأسبوع",
    desc: "اتقن العد باللغة الفرنسية، بما في ذلك العمليات الحسابية الأساسية، وتعلم أيام الأسبوع لمساعدتك في الجدولة والتخطيط.",
  },
  {
    id: 5,
    img: course5,
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    title: "قواعد النحو الأساسية وتصريف الأفعال",
    desc: "فهم كيفية بناء الجمل البسيطة، وتصريف الأفعال المنتظمة والشاذة في الزمن الحاضر، واستخدام الضمائر بشكل فعال.",
  },
  {
    id: 6,
    img: course6,
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    title: "تمرن على المحادثات القصيرة",
    desc: "شارك في حوارات بسيطة لممارسة التحدث والاستماع، مع التركيز على السيناريوهات اليومية مثل الطلب في المقهى أو الاستفسار عن الاتجاهات.",
  },
];

const LandingCourses: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="d-flex align-items-start align-items-md-center  justify-content-between flex-column flex-md-row mt-3 mb-5">
        <h2 className="fs-lg-2 fs-4 mb-4 mb-md-0 text-center">
          محاضراتنا الأساسية
        </h2>
        <Button
          className=" mb-0 bg-white text-black-50 border-0"
          onClick={() => navigate("/our-courses")}>
          شاهد الكل
        </Button>
      </div>
      <Row>
        {courses.map((course) => (
          <Col className="col-12 col-md-6 mb-4" key={course.id}>
            <Card className="rounded-5 rounded-bottom-1 border-0">
              <Card.Img
                className="rounded-5"
                variant="top"
                src={course.img}
                width="629"
                height="309"
              />
              <Card.Body>
                <div
                  className="info-course d-flex justify-content-between align-items-center mb-3 text-black-50"
                  style={{ fontSize: "0.75rem" }}>
                  <span>{course.level}</span>
                  <span>{course.instructor}</span>
                </div>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text
                  className="text-black-50 mb-5"
                  style={{ fontSize: "12px" }}>
                  {course.desc}
                </Card.Text>
                <Button
                  className="w-100 text-black-50"
                  onClick={() => navigate("/our-courses")}
                  style={{
                    fontSize: "12px",
                    backgroundColor: "#F7F7F8",
                    border: "1px solid #F1F1F3",
                  }}>
                  ابدأ الأن
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LandingCourses;
