import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import arrow from "../../assets/icons/black-arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const SignUp: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: object) => {
    try {
      console.log(data);
      navigate("/home");
      toast.success("You are create Account Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Your username or password is uncorrect");
    }
  };
  return (
    <>
      <div className="container-fluid bg-body-tertiary py-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} sm={6} lg={4}>
            <Form
              className="bg-white rounded p-4"
              onSubmit={handleSubmit(onSubmit)}
              action="get">
              <h3 className="text-center">انشاء حساب</h3>
              <p
                className="text-center text-black-50"
                style={{ fontSize: "12px" }}>
                أنشئ حسابًا لفتح المزايا الحصرية.
              </p>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>الأسم بالكامل</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ادخل اسمك"
                  className="shadow-none"
                  {...register("fullname", { required: "الاسم بالكامل مطلوب" })}
                />
                {errors.fullname && (
                  <Form.Text className="text-danger">
                    {errors.fullname.message as string}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>البريد الالكتروني</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ادخل البريد الالكتروني"
                  className="shadow-none"
                  {...register("email", {
                    required: "الايميل مطلوب",
                    pattern: {
                      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid Email",
                    },
                  })}
                />
                {errors.email && (
                  <Form.Text className="text-danger">
                    {errors.email.message as string}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>كلمة المرور</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="ادخل كلمة المرور"
                  className="shadow-none"
                  {...register("password", {
                    required: "كلمة السر مطلوبة",
                    pattern: {
                      value: /^@(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Minimum 8 characters, letters and numbers starting with @",
                    },
                  })}
                />
                {errors.password && (
                  <Form.Text className="text-danger">
                    {errors.password.message as string}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3  align-items-center justify-content-between"
                controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  className="text-black-50"
                  label="أوافق على شروط الاستخدام وسياسة الخصوصية."
                  style={{ fontSize: "12px" }}
                  {...register("termsaccepted", {
                    required: "يجب الموفقة على شروط الاستخدام",
                  })}
                />
                {errors.termsaccepted && (
                  <Form.Text className="text-danger d-block">
                    {errors.termsaccepted.message as string}
                  </Form.Text>
                )}
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100 border-0"
                style={{ backgroundColor: "#FF9500", color: "#fff" }}>
                انشاء حساب{" "}
              </Button>
              <hr className="my-4" />
              <Form.Group
                className="mb-3 d-flex align-items-center justify-content-center"
                controlId="formBasicCheckbox">
                <Link
                  to="/login"
                  style={{ fontSize: "12px" }}
                  className="text-decoration-none text-black-50">
                  لديك حساب بالفعل؟ تسجيل دخول
                  <img src={arrow} alt="arrow" width="15" />
                </Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SignUp;
