import { axiosInstance } from "./apiClient";
class AccountService{
    addAccount(account){
        return axiosInstance.post('http://localhost:8090/register',account);
    }   
}

export default new AccountService();