import React from "react";

const LandingHead: React.FC = (): JSX.Element => {
  return (
    <>
      <div
        className="container page-heading  py-4 border-bottom  d-flex align-items-center justify-content-between gap-4 flex-column flex-lg-row" >
        <div className="title">
          <h2 className="fs-lg-2 fs-4 m-0">
            Le français avec Mme Karima El Masry
          </h2>
        </div>
        <div className="desc" style={{ maxWidth: "520px" }}>
          <p style={{ fontSize: "14px" }}>
            اكتشف متعة تعلم اللغة الفرنسية بطريقة ممتعة ومبتكرة. توفر منصتنا
            موارد شاملة لإتقان الأبجدية، العبارات اليومية، المفردات الأساسية،
            قواعد النحو، وأساسيات المحادثة. تم تصميم منصتنا لتلبية احتياجات
            الطلاب، حيث تجمع بين التصميم الأنيق والمحتوى التفاعلي لتعزيز فهمك
            ومساعدتك على تحقيق أهدافك اللغوية. سواء كنت مبتدئًا أو ترغب في تحسين
            مهاراتك، فإن منصتنا هي الوجهة المثالية لبدء رحلتك في تعلم اللغة
            الفرنسية.
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingHead;
