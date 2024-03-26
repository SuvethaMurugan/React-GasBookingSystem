import { axiosInstance } from "./apiClient";
class PaymentService{
     
     PaymentCylinder(payment){
        console.log(payment);
        return axiosInstance.post("http://localhost:8090/book/payment",payment);
    }
    getTransaction(customerid){
        console.log(customerid);
        return axiosInstance.get('http://localhost:8090/transaction/'+customerid);
    }
    getCustomerProfile(customerid){
        console.log(customerid);
        return axiosInstance.get('http://localhost:8090/profile/'+customerid);
    }
    
}

export default new PaymentService();