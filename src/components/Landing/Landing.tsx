import React from "react";
import { Button, Container } from "react-bootstrap";
import Lines from "../../assets/icons/Abstract Line.png";
import Fast from "../../assets/icons/fast.png";
import Teacher from "../../assets/Landing/teacher-french-flag (2).png";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="landing py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <div className="position-relative col-md-6 col-lg-4 mx-auto">
          <img
            className="position-absolute"
            src={Lines}
            alt="Lines"
            style={{ top: "-21.5px", left: "-19.5px" }}
          />
          <div className="easy-lang d-flex align-items-center justify-content-between px-2 py-2 bg-white rounded fw-bold">
            <img src={Fast} alt="Fast icon" />
            <p className="text m-0" style={{ direction: "rtl" }}>
              <span style={{ color: "#FF9500" }}>الفرنسية</span> ستكون اسهل لغة
              معنا!
            </p>
          </div>
        </div>
        <div className="container page-heading text-center  py-4  d-flex align-items-center justify-content-between gap-4 flex-column">
          <div className="title">
            <h2 className="fs-lg-2 fs-4 m-0">
              Le français avec Mme Karima El Masry
            </h2>
          </div>
          <div className="desc" style={{ maxWidth: "650px" }}>
            <p style={{ fontSize: "14px" }}>
              اكتشف تجربة تعلم الفرنسية بأسلوب ممتع ومبتكر. تقدم منصتنا موارد
              شاملة لتعلم الأبجدية، العبارات اليومية، المفردات الأساسية، قواعد
              النحو، وأساسيات المحادثة. مصممة لتلبية احتياجات الطلاب، تجمع
              منصتنا بين التصميم الأنيق والمحتوى التفاعلي لتعزيز فهمك وتحقيق
              أهدافك اللغوية. سواء كنت مبتدئًا أو تبحث عن تطوير مهاراتك، منصتنا
              هي الوجهة المثالية للانطلاق في رحلتك لتعلم الفرنسية.
            </p>
            <Button
              className="my-3 border-0 px-3 py-2"
              onClick={() => navigate("sign-up")}
              style={{ backgroundColor: "#FF9500",fontSize: "14px" }}>
              اكتشف الأن
            </Button>
          </div>
        </div>
        <div className="landing-image my-5">
          <img className="img-fluid rounded" src={Teacher} alt="Teacher" />
        </div>
      </Container>
    </div>
  );
};

export default Landing;
