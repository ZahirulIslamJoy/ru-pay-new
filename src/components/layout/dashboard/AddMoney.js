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
    const cardNo = data.cardNo;
    const currentBDT = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );
    const addMoneyInfo = {
      sendingUserName: currentUser?.name,
      sendingUserEmail: currentUser?.email,
      sendingUserAccountNo: 1020304050,
      receiverAccountNo: currentUser?.accountNo,
      cardNo: cardNo,
      sendingMoney: "",
      time: currentBDT,
      type: "Add Money-Add Money",
    };
    axiosSecure.post(`/addMoney`, addMoneyInfo).then((res) => {
      console.log(res.data);
      if (
        res.data?.deletedResult?.deletedCount> 0 &&
        res.data?.modifiedBalanceResult?.modifiedCount > 0 &&
        res.data?.paymentResult?.insertedId
      ) {
        setLoading(false);
        reset();
        return toast.success("Money Added Successfully", {
          pauseOnHover: false,
        });
      } else {
        setLoading(false);
        return toast.error(`${res.data.status}`, {
          pauseOnHover: false,
        });
      }
    });
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
          <div className="bg-neutral-100 mt-8">
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
