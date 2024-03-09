import Container from "../components/container/Container";
import { Form, FormSection, FormSubmit, Input } from "../components/form";
import { useForm } from "react-hook-form";
import PasswordField from "../components/form/PasswordField";
import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signInWithEP}=useContext(AuthContext)
  const navigate=useNavigate();

  const onSubmit = (data) => {
    const email=data.email;
    const password=data.password;
    signInWithEP(email,password)
    .then((user)=>{
      navigate("/")
      return toast.success("Login is successfull", {
        pauseOnHover: false,
      });
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <Container
      options={[
        { name: "Home", path: "/" },
        { name: "Login", path: "/login" },
      ]}
    >
      <div className="bg-white mt-8">
        <div className="p-8">
          <h1 className="text-xl  font-semibold">Login</h1>
          <p className="mt-1 text-sm font-medium text-gray-700">
            Login your account with necessary information
          </p>
          <div className="border border-gray-200 mt-1 shadow-md"></div>
        </div>
        <div className="pb-20">
          <Form onSubmit={handleSubmit(onSubmit)} double={false}>
            <FormSection>
              <Input
                type="email"
                label="Email*"
                errors={{}}
                register={{ ...register("email") }}
              ></Input>
              <PasswordField
                label="Password"
                errors={{}}
                register={{ ...register("password") }}
              ></PasswordField>
            </FormSection>
            <FormSubmit name="Login"></FormSubmit>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
