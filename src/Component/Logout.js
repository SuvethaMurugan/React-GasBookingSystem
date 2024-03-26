import { useNavigate } from "react-router-dom";
import homeImage from './home.jpg';

export default function Logout(){
    const navigate=useNavigate();
    const logout=()=>{
            localStorage.clear();
            navigate("/");
        
    }
    const handleHomeClick=()=>{
        console.log("Home clicked");
        navigate("/customer/Home");
    }
    return(
        <>
        <br></br>
         <button onClick={handleHomeClick}>
            <img src={homeImage} alt="Home" style={{width:'30px'}} />
        </button>
        <br></br>
        <br></br>
        <div class="container1" style={{marginTop:'10%', marginLeft:'35%'}}>
    
        <p>Thank you for using our gas booking system!</p>
        <p> Please remember to log out to protect your account.</p>

        </div>
        <div>
        <button style={{backgroundColor: '#C68484',marginTop:'2%', border: '1px solid #ccc', marginLeft:'45%'}} onClick={logout} >LOGOUT</button>
        </div>
    </>
    )
}