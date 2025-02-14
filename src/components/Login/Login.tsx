import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import arrow from "../../assets/icons/black-arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Login: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data: object) => {
    try {
      console.log(data);
      navigate("/home");
      toast.success("You are Logged in Successfully");
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
              onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-center">تسجيل دخول</h3>
              <p
                className="text-center text-black-50"
                style={{ fontSize: "12px" }}>
                مرحبًا بعودتك! يرجى تسجيل الدخول للوصول إلى حسابك
              </p>
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
                <Form.Text className="text-danger">
                  {errors.email && (errors.email.message as string)}
                </Form.Text>
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
                <Form.Text className="text-danger">
                  {errors.password && (errors.password.message as string)}
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex align-items-center justify-content-between"
                controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  className="text-black-50"
                  label="تذكرني دائماََ"
                  style={{ fontSize: "12px" }}
                />
                <Button
                  variant="link"
                  style={{ fontSize: "12px" }}
                  className="text-decoration-none text-black-50">
                  هل نسيت كلمة المرور؟
                </Button>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100 border-0"
                style={{ backgroundColor: "#FF9500", color: "#fff" }}>
                تسجيل دخول
              </Button>
              <hr className="my-4" />
              <Form.Group
                className="mb-3 d-flex align-items-center justify-content-center"
                controlId="formBasicCheckbox">
                <Link
                  to="/sign-up"
                  style={{ fontSize: "12px" }}
                  className="text-decoration-none text-black-50">
                  ليس لديك حساب؟ انشاء حساب{" "}
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

export default Login;
