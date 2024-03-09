import React, { useEffect, useState } from "react";
import Container from "../../../container/Container";
import { useAccountDetails } from "../../../hooks/useAccountDetails";
import useAxiosWithToken from "../../../hooks/useAxiosWithToken";

const TranactionHistory = () => {
  const [history, setHistory] = useState([]);
  const [currentUserInfo] = useAccountDetails();
  const [axiosSecure] = useAxiosWithToken();
  const currentUser = currentUserInfo?.[0];
  const userAccount = currentUser?.accountNo;

  useEffect(() => {
    if (userAccount) {
      axiosSecure.get(`/history/${userAccount}`).then((res) => {
        setHistory(res.data);
      });
    }
  }, [userAccount]);

  console.log(history);

  return (
    <Container
      options={[
        { name: "Dashboard", path: "/dashboard/profile" },
        { name: "Transaction History", path: "/dashboard/history" },
      ]}
      end={true}
    >
      <div className="flex justify-center mt-16">
        <table class="shadow-lg bg-gray-200 border-collapse">
          <tr>
            <th class="bg-gray-300 border text-left px-8 py-4">
              Transaction Id
            </th>
            <th class="bg-gray-300 border text-left px-8 py-4">Date</th>
            <th class="bg-gray-300 border text-left px-8 py-4">Description</th>
            <th class="bg-gray-300 border text-left px-8 py-4">Amount</th>
          </tr>
          {history?.map((item, index) => (
            <tr
              key={item._id}
              class="hover:bg-gray-50 text-sm font-sm focus:bg-gray-300"
              tabindex="0"
            >
              <td class="border px-8 py-4">{item._id}</td>
              <td class="border px-8 py-4">
                {new Date(item.time).toLocaleString("en-US", {
                  timeZone: "Asia/Dhaka",
                })}
              </td>
              <td class="border px-8 py-4">
                {item?.sendingUserAccountNo &&
                item.sendingUserAccountNo.includes(userAccount)
                  ? item.type.split("-")[0] + "(" + item.receiverAccountNo + ")"
                  : item.type.split("-")[1] +
                    "(" +
                    item.receiverAccountNo +
                    ")"}
              </td>
              <td class="border px-8 py-4">
                { item?.sendingUserAccountNo && item.sendingUserAccountNo.includes(userAccount)
                  ? -item.sendingMoney
                  : "+" + item.sendingMoney}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Container>
  );
};

export default TranactionHistory;
