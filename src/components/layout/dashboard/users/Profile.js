import React, { useEffect, useState } from "react";
import { useAccountDetails } from "../../../hooks/useAccountDetails";
import Loader from "../../../loader/Loader";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [currentUserInfo] = useAccountDetails();
  const currentUser = currentUserInfo?.[0];
  useEffect(() => {
    setUser(currentUser);
  }, [currentUserInfo]);

  return (
    <>
      {!user ? (
        <Loader></Loader>
      ) : (
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-lg border border-stroke bg-white shadow-sm">
              <div className="border-b border-stroke py-4 px-7">
                <h3 className="font-medium text-black">Personal Information</h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-4 flex flex-col gap-4 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <div className="">
                        <input
                          className="w-full rounded border border-stroke bg-gray-100 py-3 px-4.5 text-black focus:border-primary focus:outline-none"
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder={`${user?.name}`}
                          defaultValue={`${user?.name}`}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray-100 py-3 px-4.5 text-black focus:border-primary focus:outline-none"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder={`${currentUser?.phoneNo}`}
                        defaultValue={`${currentUser?.phoneNo}`}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      className="mb-3 block text-sm font-medium text-black"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <div>
                      <input
                        className="w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus:outline-none"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        readOnly
                        placeholder={`${user?.email}`}
                        defaultValue={`${user?.email}`}
                      />
                    </div>
                    <div
                      id="FileUpload"
                      className="relative mb-4 mt-4 block w-full cursor-pointer appearance-none rounded-lg border border-dashed border-blue-500 bg-gray-100 py-4 px-4 sm:py-7.5"
                    >
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                      />
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94387L5.13899 5.80478C4.87864 6.06513 4.45653 6.06513 4.19618 5.80478C3.93583 5.54443 3.93583 5.12232 4.19618 4.86197L7.5286 1.52864Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8 9.33337C7.63181 9.33337 7.33334 9.63185 7.33334 10V14.6667C7.33334 15.0348 7.63181 15.3334 8 15.3334C8.36819 15.3334 8.66667 15.0348 8.66667 14.6667V10C8.66667 9.63185 8.36819 9.33337 8 9.33337Z"
                              fill="#3C50E0"
                            />
                          </svg>
                        </span>
                        <span className="text-black text-sm">Upload Photo</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="mb-3 block text-sm font-medium text-black"
                      htmlFor="Username"
                    >
                      BIO
                    </label>
                    <div>
                      <textarea
                        className="w-full rounded border border-stroke bg-gray-100 py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus:outline-none"
                        name="bio"
                        id="bio"
                        placeholder="Write your bio here"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet."
                        style={{ height: "100px" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end ">
                    <button
                      className="flex justify-center rounded bg-violet-500 py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-lg border border-stroke bg-white shadow-default">
              <div className="border-b border-stroke py-4 px-7">
                <h3 className="font-medium text-black">Account Information</h3>
              </div>
              <div className="px-7 py-4">
                <p className=" mb-1 ">
                  <span className="text-balck mb-3  text-sm font-medium">
                    Account Holder:
                  </span>{" "}
                  {user?.name}
                </p>
                <p className=" mb-1" p>
                  <span className="text-balck text-sm  font-medium">
                    Account No:
                  </span>{" "}
                  {user?.accountNo}
                </p>
                <p className="mb-1">
                  <span className="text-balck text-sm font-medium">
                    Balance:
                  </span>{" "}
                  {user?.balance} BDT
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
