import { axiosInstance } from "./apiClient";
class PaymentService{
     
     PaymentCylinder(payment){
        console.log(payment);
        return axiosInstance.post("http://localhost:8090/book/payment",payment);
    }
    
}

export default new PaymentService();