import { axiosInstance } from "./apiClient";
class BookingService{
    getAllCylinders(){
        return axiosInstance.get('http://localhost:8090/admin/available');
    }   
     bookCylinder(bookcylinder){
        console.log(bookcylinder);
        return axiosInstance.post("http://localhost:8090/booking",bookcylinder);
    }
    getcustomercylinderByid(customerid){
        console.log(customerid);
        return axiosInstance.get('http://localhost:8090/booking/customer/'+customerid);
    }
}

export default new BookingService();