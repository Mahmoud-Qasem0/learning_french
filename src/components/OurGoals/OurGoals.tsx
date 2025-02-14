import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OurGoals: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Container>
      <h4>اهدافنا</h4>
      <p className="text-black-50" style={{ fontSize: "0.875rem" }}>
        تمكين الطلاب: تقديم محتوى تعليمي مبتكر يساعد الطلاب على تطوير مهاراتهم
        وتحقيق طموحاتهم الأكاديمية والمهنية. الجودة والتميز: توفير دورات تعليمية
        عالية الجودة تجمع بين الأسس النظرية والتطبيق العملي. تطوير مستدام: دعم
        التعلم المستمر من خلال مواد تعليمية محدثة ومواكبة للتطورات الحديثة. بناء
        الثقة: خلق بيئة تعليمية مشجعة تلبي احتياجات الطلاب وتوفر الدعم اللازم
        لتحقيق النجاح.
      </p>
      <div className="join d-sm-flex justify-content-between align-items-center rounded p-5 bg-white mt-5">
        <div className="text">
          <h2>
            <span style={{ color: "#FF9500" }}>معاََ</span>, للتقدم في الفرنسية
          </h2>
          <p className="text-black-50" style={{ fontSize: "0.75rem" }}>
            انضم إلينا في رحلة تعليمية شيقة وستكتشف انك حقاََ لقد تميزت في
            اللغة.
          </p>
        </div>
        <Button className="border-0" onClick={() => navigate("/sign-up")} style={{backgroundColor: "#FF9500"}}>انضم الأن</Button>
      </div>
    </Container>
  );
};

export default OurGoals;
