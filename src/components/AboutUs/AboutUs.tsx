import React from "react";
import LandingHead from "../LandingHead/LandingHead";
import crown from "../../assets/about/crown.png";
import medal from "../../assets/about/medal.png";
import mask from "../../assets/about/mask.png";
import { Col } from "react-bootstrap";
import OurGoals from "../OurGoals/OurGoals";

const items = [
  {
    icon: crown,
    alt: "crown",
    itemTitle: "موثوق من قبل الآلاف",
    itemDesc:
      "لقد نجحنا في جعل الاف الطلاب من تحقيق اهدافهم و جعلهم من المتفوقين في اللغه في حياتهم الدراسية و في حياتهم المهنية",
  },
  {
    icon: medal,
    alt: "medal",
    itemTitle: "22 عامًا من التميز في التدريس",
    itemDesc:
      "تمهيدي ماجستير مع خبرة تمتد لأكثر من 22 عامًا في التدريس، متخصصة في تقديم محتوى تعليمي مميز وفعال.",
  },
  {
    icon: mask,
    alt: "mask",
    itemTitle: "تعليقات إيجابية من الطلاب",
    itemDesc:
      "نفخر بالتعليقات الإيجابية التي نتلقاها من طلابنا، حيث يقدّرون العملية والتطبيقية لمواد دوراتنا التعليمية.",
  },
];

const AboutUs: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="about py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <LandingHead />
        <div className="title container mt-5 mb-3">
          <h4 className="fw-semibold">انجازاتنا</h4>
          <p className="text-black-50" style={{ fontSize: "14px" }}>
            التزامنا بالتميز قادنا إلى تحقيق إنجازات مهمة على مدار رحلتنا. إليكم
            بعضًا من إنجازاتنا.
          </p>
        </div>
        <div className="about-items container d-flex  align-items-center gap-3 flex-wrap mb-5 py-5">
          {items.map((item, i) => (
            <Col
              md={4}
              className="col-12  bg-white p-5 pb-4 rounded flex-grow-1"
              key={i}>
              <img
                src={item.icon}
                alt={item.alt}
                className="p-3 rounded"
                style={{ backgroundColor: "#FFEACC" }}
              />
              <h6 className="mt-3">{item.itemTitle}</h6>
              <p className="mt-2 text-black-50" style={{ fontSize: "0.75rem" }}>
                {item.itemDesc}
              </p>
            </Col>
          ))}
        </div>
        <OurGoals />
      </div>
    </>
  );
};

export default AboutUs;
