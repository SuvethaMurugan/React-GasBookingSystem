import { axiosInstance } from "./apiClient";
class BankService{
    LinkBankAccount(account){
        return axiosInstance.patch('http://localhost:8090/bank',account);
    }   
}

export default new BankService();