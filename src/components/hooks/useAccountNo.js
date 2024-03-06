import rn from "random-number";

const useAccountNo = () => {
  const random1 = {
    min: 100000,
    max: 999990,
    integer: true,
  };
  const random2 = {
    min: 1000,
    max: 9999,
    integer: true,
  };
  const a = rn(random1) + "";
  console.log(a)
  const b = rn(random2) + "";
  const accountNo = parseInt(a + b);
  return { accountNo };
};

export default useAccountNo;
