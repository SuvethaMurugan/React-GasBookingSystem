import PaymentService from "../Service/PaymentService";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homeImage from './home.jpg';
function Display({profile}){
    console.log(profile);
    return(
        <>
         <div style={{marginLeft:'40%',marginTop:'1%'}}>
            UserName:  {profile.userName}
            <br></br>
            Id:  {profile.id}
            <br></br>
            Email:  {profile.email}
            <br></br>
            Phone:  {profile.mobileNo}
            <br></br>
            Door No:  {profile.address.doorNo}
            <br></br>
            StreetName:  {profile.address.streetName}
            <br></br>
            City:  {profile.address.City}
            <br></br>
            pinCode:  {profile.address.pinCode}
         </div>

        </>
    );
}

export default function ViewProfile(){
    class Address {
        constructor(doorNo, streetName, City,pinCode) {
            this.pinCode = pinCode;
            this.City = City;
            this.streetName = streetName;
            this.doorNo = doorNo;
        }
    }
    let [profile, setProfile] = useState({
        "userName": '',
        "email": '',
        "password": '',
        "mobileNo":'',
        "address":new Address('','','',''),
    });
    
    useEffect(()=>{
        getCustomerProfile();
     },[]);

    const getCustomerProfile=()=>{
        var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
        PaymentService.getCustomerProfile(customer.data.id)
            .then(
                (resp)=>{
                    console.log(resp);
                    setProfile(resp.data);
                }
            )
            .catch(
                (err)=>{
                    console.log(err);
                }
            )
            .finally(
                ()=>{
                    console.log("Loaded data from server");
                }
            )
    }
    const navigate = useNavigate();
    const handleHomeClick=()=>{
        console.log("Home clicked");
        navigate("/customer/Home");
    }
    
      return (
        <>
         <br></br>
         <button onClick={handleHomeClick}>
            <img src={homeImage} alt="Home" style={{width:'30px'}} />
        </button>
        <br></br>
        <br></br>
          {
            <Display profile={profile}/>
          }
        </>
      );
    
}