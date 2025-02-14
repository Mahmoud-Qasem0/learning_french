import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import yellowArrow from "../../assets/icons/top-right-arrow.png";

const benefitsData = [
  {
    id: 1,
    title: "جدول تعليمي مرن",
    description:
      "تعلم اللغة الإنجليزية وفق جدولك الخاص من خلال جدول تعليمي مرن يتناسب مع وقتك.",
  },
  {
    id: 2,
    title: "تعلم مخصص من أفضل الخبراء",
    description:
      "احصل على تعليم مباشر من أفضل متخصصي اللغة الإنجليزية ليقوم بتخصيص الدروس لكل محتاج.",
  },
  {
    id: 3,
    title: "مجموعة متنوعة من الدورات التعليمية",
    description:
      "استمتع بأسلوب تعلم متنوع ومختلف يناسب جميع مستويات اللغة الإنجليزية بشكل شخصي مخصص.",
  },
  {
    id: 4,
    title: "منهج دراسي محدّث",
    description:
      "احصل على مواد علمية محدثة تتناسب مع أحدث الدراسات، وكل ذلك تحت إشراف أكاديمي.",
  },
  {
    id: 5,
    title: "مشاريع عملية وتطبيقات تطبيقية",
    description:
      "طور مهاراتك من خلال التدرب على مشاريع وتطبيقات حية مع دعم كامل من الخبراء.",
  },
  {
    id: 6,
    title: "بيئة تعليمية تفاعلية",
    description:
      "تعاون مع الطلاب المتعلمين الآخرين، اختر وتفاعل وتعلم بشكل أفضل.",
  },
];

const Benefits: React.FC = (): JSX.Element => {
  return (
    <Container className="py-5 text-left">
      <h2 className="fs-lg-2 fs-3 mt-3 mb-5 text-center">الفائدة</h2>
      <Row>
        {benefitsData.map((benefit) => (
          <Col className="col-12 col-md-6 col-lg-4 mb-4" key={benefit.id}>
            <Card className="benefit-box mx-2 bg-white p-3 rounded border-0 align-items-stretch h-100">
                <span className="fs-2 fw-bold text-end d-block">{`0${benefit.id}`}</span>
                <h6 className="my-3">{benefit.title}</h6>
                <p className="text-black-50 mb-3" style={{ fontSize: "14px" }}>
                  {benefit.description}{" "}
                </p>
                <Button
                  className="ms-auto d-block mt-4"
                  style={{
                    backgroundColor: "#fcfcfd",
                    border: "1px solid #f1f1f3",
                  }}>
                  <img src={yellowArrow} alt="yellowArrow" />
                </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Benefits;

// import { Container, Row, Col, Card } from "react-bootstrap";

// // 📌 تعريف البيانات

// const Benefits: React.FC = () => {
//   return (
//     <Container className="py-5 text-center">
//       <h2 className="fw-bold mb-4">الفائدة</h2>
//       <Row className="g-4">
//         {benefits.map((benefit) => (
//           <Col key={benefit.id} md={4}>
//             <Card className="border-0 shadow-sm p-4 text-start">
//               <Card.Body>
//                 <h5 className="fw-bold text-primary">{String(benefit.id).padStart(2, "0")}</h5>
//                 <Card.Title className="fw-bold">{benefit.title}</Card.Title>
//                 <Card.Text className="text-muted">{benefit.description}</Card.Text>

//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Benefits;
