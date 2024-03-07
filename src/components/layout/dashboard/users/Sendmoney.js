import { useForm } from "react-hook-form";
import Container from "../../../container/Container";
import { Form, FormSection, FormSubmit, Input } from "../../../form";
import { useAccountDetails } from "../../../hooks/useAccountDetails";

const Sendmoney = () => {
    const [currentUserInfo]=useAccountDetails();
    const currentUser=currentUserInfo?.[0];
 
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



 
  const onSubmit = (data) => {
    const receiverAccount=data.accountNo;
    const sendingMoney=data.amount;
    const currentBDT = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
    if(sendingMoney > currentUser?.balance){
        alert('Insufficient Balance')
    }
    const sendMoneyInfo={
        sendingUserEmail:currentUser?.email,
        sendingUserAccountNo:currentUser?.accountNo,
        receiverAccountNo:receiverAccount,
        sendingMoney:sendingMoney,
        time:currentBDT
    }

   
  };

  return (
    <Container
      options={[
        { name: "Dashboard", path: "/dashboard/profile" },
        { name: "Send Money", path: "/dashboard/sendmoney" },
      ]}
      end={true}
    >
      <div className="bg-neutral-200 mt-8">
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
  );
};

export default Sendmoney;
