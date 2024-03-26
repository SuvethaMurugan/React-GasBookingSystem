import { axiosInstance } from "./apiClient";
class CylinderService
{
    AddCylinder(cylinder)
    {
        return axiosInstance.post("http://localhost:8090/admin/Cylinder",cylinder);
    }
    AvailableCylinder()
    {
        return axiosInstance.get("http://localhost:8090/admin/available");
    }
    BookedCylinder()
    {
        return axiosInstance.get("http://localhost:8090/admin/available/booked");
    }

}
export default new CylinderService();