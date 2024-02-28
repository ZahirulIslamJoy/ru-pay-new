import Container from "../components/container/Container";
import { Form, FormSection, FormSubmit, Input } from "../components/form";

const Registration = () => {
    return (
        <Container options={[{name:"Home",path:"/"},{name:"Registration",path:"/registration"}]}>
             <div className="bg-white mt-8">
                <div className="p-8">
                    <h1 className="text-xl font-semibold">Registration</h1>
                    <p className="mt-1 text-sm font-medium text-gray-700">Fill up following fields with required information</p>
                <div className="border border-gray-200 mt-1 shadow-md"></div>
                </div>
            </div>
            <div>
                <Form double={true}>
                    <FormSection>
                    <Input type="email" label="Email" errors={{}} register={{}} ></Input>
                    </FormSection>
                    <FormSubmit></FormSubmit>
                </Form>
            </div>
        </Container>
    );
};

export default Registration;