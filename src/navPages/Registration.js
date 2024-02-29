import { useForm } from "react-hook-form";
import Container from "../components/container/Container";
import { Form, FormSection, FormSubmit, Input } from "../components/form";
import PasswordField from "../components/form/PasswordField";
import { Select } from "../components/form/Select";
import { useEffect, useState } from "react";

const Registration = () => {
  const [selectedType, setSelectedType] = useState("Student");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const id=data.studentId;
    console.log(id);
  }

  useEffect(() => {
    setSelectedType(watch("type"));
  }, [watch("type")]);


  return (
    <Container
      options={[
        { name: "Home", path: "/" },
        { name: "Registration", path: "/registration" },
      ]}
    >
      <div className="bg-white mt-8">
        <div className="p-8">
          <h1 className="text-xl font-semibold">Registration</h1>
          <p className="mt-1 text-sm font-medium text-gray-700">
            Fill up following fields with required information
          </p>
          <div className="border border-gray-200 mt-1 shadow-md"></div>
        </div>
        <div className="pb-20">
          <Form  onSubmit={handleSubmit(onSubmit)}  double={true}>
            <FormSection>
              <Select
                label="Account Type"
                field={[{ options: "Student" }, { options: "Other" }]}
                watch={watch}
                watchParam="type"
                errors={{}}
                register={{ ...register("type") }}
              ></Select>
              <Input
                type="text"
                label="Name*"
                errors={{}}
                register={{ ...register("name") }}
              ></Input>
              {selectedType == "Student" ? (
                <Input
                  type="text"
                  label="Student Id*"
                  errors={{}}
                  register={{ ...register("studentId") }}
                ></Input>
              ) : (
                <Input
                  type="text"
                  label="National Id*"
                  errors={{}}
                  register={{ ...register("nid") }}
                ></Input>
              )}
              <Input
                type="email"
                label="Email*"
                errors={{}}
                register={{ ...register("email") }}
              ></Input>
              <Input
                type="tel"
                label="Phone No*"
                errors={{}}
                register={{ ...register("phoneNo") }}
              ></Input>
              <PasswordField
                label="Password"
                errors={{}}
                register={{ ...register("password") }}
              ></PasswordField>
              <PasswordField
                label="Confirm Password"
                errors={{}}
                register={{ ...register("confirmPassword") }}
              ></PasswordField>
            </FormSection>
            <FormSubmit name="Register"></FormSubmit>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Registration;
