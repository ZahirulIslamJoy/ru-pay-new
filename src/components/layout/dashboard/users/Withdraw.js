import React, { useState } from "react";
import Loader from "../../../loader/Loader";
import { useForm } from "react-hook-form";
import { FormSection, Form, FormSubmit, Input } from "../../../form";
import Container from "../../../container/Container";
import { useAccountDetails } from "../../../hooks/useAccountDetails";
import useAxiosWithToken from "../../../hooks/useAxiosWithToken";
import { toast } from "react-toastify";

const Withdraw = () => {
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
    setLoading(true)
    const withdrawAmount = parseInt(data.amount);
    if (withdrawAmount > currentUser?.balance) {
      setLoading(false);
      return toast.warning("Insufficient Fund", {
        pauseOnHover: false,
      });
    }
    if (withdrawAmount < 5) {
      setLoading(false);
      return toast.warning("Minimum transaction is 5 tk", {
        pauseOnHover: false,
      });
    }
    const adminAccountNo = 1020304050;
    const currentBDT = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );
    const withdrawInfo = {
      sendingUserName: currentUser?.name,
      sendingUserEmail: currentUser?.email,
      sendingUserAccountNo: currentUser?.accountNo,
      receiverAccountNo: adminAccountNo,
      sendingMoney: withdrawAmount,
      time: currentBDT,
      type: "Withdraw-Received Money",
    };

    axiosSecure.post(`/sendmoney`, withdrawInfo).then((res) => {
      setLoading(false);
      console.log(res.data);
      if (
        res.data.modifiedReceiverBalanceResult.modifiedCount > 0 &&
        res.data.modifiedSenderBalanceResult.modifiedCount > 0 &&
        res.data.paymentResult.insertedId
      ) {
        setLoading(false);
        reset();
        return toast.success("Withdraw  is Successfull", {
          pauseOnHover: false,
        });
      } else {
        setLoading(false);
        return toast.error("Something Went Wrong", {
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
            { name: "Withdraw", path: "/dashboard/withdraw" },
          ]}
          end={true}
        >
          <div className="bg-neutral-200 mt-8">
            <div className="p-8">
              <h1 className="text-xl  font-semibold">Withdraw</h1>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Withdraw Money From Your Account
              </p>
              <div className="border border-gray-200 mt-1 shadow-md"></div>
            </div>
            <div className="pb-20">
              <Form onSubmit={handleSubmit(onSubmit)} double={false}>
                <FormSection>
                  <Input
                    type="tel"
                    label="Amount*"
                    errors={{}}
                    register={{ ...register("amount") }}
                  ></Input>
                </FormSection>
                <FormSubmit name="Withdraw"></FormSubmit>
              </Form>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Withdraw;
