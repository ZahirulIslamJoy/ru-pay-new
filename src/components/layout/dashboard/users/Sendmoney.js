import { useForm } from "react-hook-form";
import Container from "../../../container/Container";
import { Form, FormSection, FormSubmit, Input } from "../../../form";
import { useAccountDetails } from "../../../hooks/useAccountDetails";
import useAxiosWithToken from "../../../hooks/useAxiosWithToken";
import { useState } from "react";
import Loader from "../../../loader/Loader";
import { toast } from "react-toastify";

const Sendmoney = () => {
  const [loading, setLoading] = useState(false);
  const [currentUserInfo] = useAccountDetails();
  const currentUser = currentUserInfo?.[0];
  const [axiosSecure] = useAxiosWithToken();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const receiverAccount = data.accountNo;
    const sendingMoney = parseInt(data.amount);
    setLoading(true);
    const currentBDT = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );
    if (sendingMoney > currentUser?.balance) {
      setLoading(false);
      return toast.warning("Insufficient Fund",{
        pauseOnHover: false,
      });
    }
    if(sendingMoney <5){
      setLoading(false);
      return toast.warning("Minimum transaction is 5 tk",{
        pauseOnHover: false,
      });
    }
    if (currentUser?.accountNo == receiverAccount) {
      setLoading(false);
      return toast.warning("Please Select Another Account",{
        pauseOnHover: false,
      });
    }

    const sendMoneyInfo = {
      sendingUserName: currentUser?.name,
      sendingUserEmail: currentUser?.email,
      sendingUserAccountNo: currentUser?.accountNo,
      receiverAccountNo: receiverAccount,
      sendingMoney: sendingMoney,
      time: currentBDT,
      type: "Send Money-Received Money",
    };
    axiosSecure.post(`/sendmoney`, sendMoneyInfo).then((res) => {
      setLoading(false);
      console.log(res.data);
      if (
        res.data.modifiedReceiverBalanceResult.modifiedCount > 0 &&
        res.data.modifiedSenderBalanceResult.modifiedCount > 0 &&
        res.data.paymentResult.insertedId
      ) {
        setLoading(false)
        reset()
       return toast.success("Send Money is Successfull", {
          pauseOnHover: false,
        });
      } else {
        setLoading(false)
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
            { name: "Send Money", path: "/dashboard/sendmoney" },
          ]}
          end={true}
        >
          <div className="bg-white mt-8">
            <div className="p-8">
              <h1 className="text-xl  font-semibold">Send Money</h1>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Send Money From One Account To Another Account
              </p>
              <div className="border border-gray-200 mt-1 shadow-md"></div>
            </div>
            <div className="pb-20">
              <Form onSubmit={handleSubmit(onSubmit)} double={false}>
                <FormSection>
                  <Input
                    type="tel"
                    label="Account No*"
                    errors={{}}
                    register={{ ...register("accountNo") }}
                  ></Input>
                  <Input
                    type="tel"
                    label="Amount*"
                    errors={{}}
                    register={{ ...register("amount") }}
                  ></Input>
                </FormSection>
                <FormSubmit name="Send"></FormSubmit>
              </Form>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Sendmoney;
