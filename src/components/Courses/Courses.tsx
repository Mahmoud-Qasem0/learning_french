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

const sCourses = [
  {
    id: 1,
    title: "الأبجدية الفرنسية والنطق",
    desc: "تعلم الأبجدية الفرنسية وكيفية نطق كل حرف وصوت بشكل صحيح. هذه هي الأساسيات للقراءة والتحدث باللغة الفرنسية.",
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    lectures: [
      {
        id: 1,
        title: "مقدمة في الأبجدية الفرنسية",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 2,
        title: "أصوات الحروف المتحركة في اللغة الفرنسية",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 3,
        title: "أصوات الحروف الساكنة في اللغة الفرنسية",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 4,
        title: "علامات التشكيل وأثرها",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 5,
        title: "الأصوات الأنفية في اللغة الفرنسية",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "التحيات الأساسية والعبارات المتداولة",
    desc: "ابدأ بالتحيات الأساسية والعبارات البسيطة مثل قول 'مرحبًا'، تقديم نفسك، وطرح الأسئلة الأساسية للتعامل مع المحادثات اليومية.",
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    lectures: [
      {
        id: 1,
        title: "التحيات الفرنسية الشائعة",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 2,
        title: "تقديم نفسك",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 3,
        title: "سؤال عن حالة شخص ما",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 4,
        title: "قول وداعًا",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 5,
        title: "التعبيرات المهذبة",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "المفردات الأساسية للمبتدئين",
    desc: "ابنِ أساسًا قويًا باستخدام الكلمات الشائعة المستخدمة في الحياة اليومية، مثل أفراد الأسرة، الألوان، الطعام، والأشياء من حولك.",
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    lectures: [
      {
        id: 1,
        title: "الأرقام (1-20)",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 2,
        title: "أيام الأسبوع",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 3,
        title: "شهور السنة",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 4,
        title: "الالوان",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 5,
        title: "الأشياء والأماكن الشائعة",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "الأرقام وأيام الأسبوع",
    desc: "اتقن العد بالفرنسية، بما في ذلك الحسابات الأساسية، وتعلم أيام الأسبوع للمساعدة في الجدولة والتخطيط.",
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    lectures: [
      {
        id: 1,
        title: "الارقام (20-50)",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 2,
        title: " (50-100)الارقام",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 3,
        title: "الأرقام الترتيبية",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 4,
        title: "أيام الأسبوع",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 5,
        title: "تعبيرات الوقت المفيدة",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "قواعد النحو الأساسية وتصريف الأفعال",
    desc: "فهم كيفية بناء الجمل البسيطة، وتصريف الأفعال المنتظمة والشاذة في الزمن الحاضر، واستخدام الضمائر بشكل فعال.",
    level: "مبتدئ",
    instructor: "By : MME Karima El Masry",
    lectures: [
      {
        id: 1,
        title: "بنية الجمل في اللغة الفرنسية",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 2,
        title: "جنس الأسماء",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 3,
        title: "الأدوات المعرفة والنكرة",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 4,
        title: "تصريف الأفعال المنتظمة في الزمن الحاضر",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
      {
        id: 5,
        title: "تصريف الأفعال الشاذة في الزمن الحاضر",
        lessons: [
          { title: "الأبجدية", duration: 45 },
          { title: "أصوات الحروف المتحركة", duration: 60 },
          { title: "علامات التشكيل", duration: 45 },
        ],
      },
    ],
  },
];

const Courses: React.FC = (): JSX.Element => {
  const [courses, setCourses] = useState<ICourses[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const getCourses = useCallback( () => {
    try {
      setLoading(true);
      // const { data } = await axios.get("http://localhost:8000/courses");
      setCourses(sCourses);
      // console.log(data);
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
