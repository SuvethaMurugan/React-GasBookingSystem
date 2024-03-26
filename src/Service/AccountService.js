import { axiosInstance } from "./apiClient";
class AccountService{
    addAccount(account){
        return axiosInstance.post('http://localhost:8090/register',account);
    }   
    loginCustomerAccount(customer){
        return axiosInstance.post('http://localhost:8090/login/userName',customer)
    }
}

export default new AccountService();