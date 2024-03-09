import { useState } from "react";
import Container from "../../container/Container";
import { Form, FormSection, FormSubmit, Input } from "../../form";
import Loader from "../../loader/Loader";
import { useAccountDetails } from "../../hooks/useAccountDetails";
import useAxiosWithToken from "../../hooks/useAxiosWithToken";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddMoney = () => {
  const [loading, setLoading] = useState(false);
  const [currentUserInfo] = useAccountDetails();
  const [axiosSecure] = useAxiosWithToken();
  const currentUser = currentUserInfo?.[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const currentBDT = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );
    const addMonryInfo = {
        sendingUserName: currentUser?.name,
        sendingUserEmail: currentUser?.email,
        sendingUserAccountNo: currentUser?.accountNo,
        receiverAccountNo:sendingUserAccountNo,
        sendingMoney:"",
        time: currentBDT,
        type: "addMoney",
      };
  };
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Container
          options={[
            { name: "Dashboard", path: "/dashboard/profile" },
            { name: "Add Money", path: "/dashboard/addmoney" },
          ]}
          end={true}
        >
          <div className="bg-neutral-200 mt-8">
            <div className="p-8">
              <h1 className="text-xl  font-semibold">Add Money</h1>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Add Money With a Card Number
              </p>
              <div className="border border-gray-200 mt-1 shadow-md"></div>
            </div>
            <div className="pb-20">
              <Form onSubmit={handleSubmit(onSubmit)} double={false}>
                <FormSection>
                  <Input
                    type="tel"
                    label="Card No*"
                    errors={{}}
                    register={{ ...register("cardNo") }}
                  ></Input>
                </FormSection>
                <FormSubmit name="Add"></FormSubmit>
              </Form>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default AddMoney;
