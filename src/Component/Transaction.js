import { useEffect, useState } from "react";
import PaymentService from "../Service/PaymentService";
import { useNavigate } from "react-router-dom";
import homeImage from './home.jpg';

function DisplayCylinders({transactionarray}){
    console.log(transactionarray);
    
    return(
        <>
        <h3>TRANSACTION HISTORY</h3>
    <table  className="table table-bordered">
      <thead>
      <tr>
        <th> PAYMENT ID</th>
        <th> PAYMENT TYPE</th>
        <th>PAYMENT DATE</th>
        <th>PAYMENT AMOUNT</th>
        <th>PAYMENT STATUS</th>
      </tr>
    </thead>
    <tbody>
            {
                transactionarray.map(
                    (transaction) =>
                    (<tr key={transaction.paymentId}>
                                <td>{transaction.paymentId}</td>
                                <td>{transaction.paymentType}</td>
                                <td>{transaction.paymentDate}</td>
                                <td>{transaction.paymentAmount}</td>
                                <td>{transaction.paymentStatus}</td>
                                
                    </tr>)


                        )
                    }
                    </tbody>
    </table>
        </>

    )
}

function Transaction() {
    let[transaction,setTransaction]=useState([]);
    useEffect(()=>{
        getAllTransaction();
    },[]);
    const getAllTransaction=()=>{
        var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
        PaymentService.getTransaction(customer.data.id)
            .then(
                (resp)=>{
                    console.log(resp);
                    setTransaction(resp.data);
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
    return(
        <>
        <br></br>
         <button onClick={handleHomeClick}>
            <img src={homeImage} alt="Home" style={{width:'30px'}} />
        </button>
        <br></br>
        <br></br>
            {
                transaction.length>0 ?<DisplayCylinders transactionarray={transaction}/>:<h3>No cylinders found</h3>
            }
        </>
    )

    
}
export default Transaction;