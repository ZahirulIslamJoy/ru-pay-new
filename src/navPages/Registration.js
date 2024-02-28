import Container from "../components/container/Container";
import { Form, FormSection, FormSubmit, Input } from "../components/form";
import PasswordField from "../components/form/PasswordField";
import { Select } from "../components/form/Select";

const Registration = () => {
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
          <Form double={true}>
            <FormSection>
              <Select
                label="Account Type"
                field={[{ options: "Student" }, { options: "Other" }]}
                errors={{}}
                register={{}}
              ></Select>
              <Input
                type="text"
                label="Name*"
                errors={{}}
                register={{}}
              ></Input>
              <Input
                type="text"
                label="Student Id*"
                errors={{}}
                register={{}}
              ></Input>
              <Input
                type="text"
                label="National Id*"
                errors={{}}
                register={{}}
              ></Input>
              <Input
                type="email"
                label="Email*"
                errors={{}}
                register={{}}
              ></Input>
              <Input
                type="tel"
                label="Phone No*"
                errors={{}}
                register={{}}
              ></Input>
              <PasswordField
                label="Password"
                errors={{}}
                register={{}}
              ></PasswordField>
              <PasswordField
                label="Confirm Password"
                errors={{}}
                register={{}}
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
