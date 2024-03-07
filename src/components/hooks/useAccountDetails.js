import { useContext } from "react"
import { AuthContext } from "../../providers/Authprovider"
import useAxiosWithToken from "./useAxiosWithToken";
import { useQuery } from "@tanstack/react-query";

export const useAccountDetails=()=>{
    const {user,loading} = useContext(AuthContext)
    const email =user.email;
    const [axiosSecure]=useAxiosWithToken();
    const { data: currentUserInfo, refetch:currentUserRefetch,isLoading:currentUserInfoLoading } = useQuery({
        queryKey: ["/users/email"],
        enabled:!loading && !!email,
        queryFn: async () => {
          const res = await axiosSecure.get(`/users/${email}`);
          const data = res.data;
          return data;
        },
        
      });
        return [currentUserInfo,currentUserRefetch,currentUserInfoLoading]
    };


