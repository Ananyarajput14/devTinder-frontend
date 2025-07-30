import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Premium = () => {
const user= useSelector((store) => store.user);
 const handleBuyClick = async(type) =>{
    const order= await axios.post(BASE_URL + "/payment/create",{firstName:user.firstName,lastName:user.lastName,emailId:user.email,membershipType:type},{withCredentials:true});
    const {amount,keyId,currency,orderId,notes} = order.data;
     const options = {
        key:keyId, 
        amount, 
        currency,
        name: "Dev Tinder",
        description: "Premium Membership",
        order_id: orderId, 
        prefill: {
          name: notes.firstName + " "+notes.lastName,
          email: notes.emailId,
        },
        theme: {
          color: '#F37254'
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
 } 

  return (
   <div className="flex w-full my-10">
  <div className="card bg-base-300 rounded-box grid h-96 grow place-items-center">
    <h1 className="font-bold text-3xl">Silver Membership</h1>
    <ul className="text-lg">
        <li>-Chat with other people</li>
        <li>-100 connection requests per day</li>
        <li>-Account verification for upto 3 months</li>
    </ul>
    <button onClick={() => handleBuyClick("silver")} className="btn bg-gray-500 text-white">Buy Silver</button>
  </div>
  <div className="divider divider-horizontal">OR</div>
  <div className="card bg-base-300 rounded-box grid h-96 grow place-items-center">
    <h1 className="font-bold text-3xl">Gold Membership</h1>
    <ul className="text-lg">
        <li>-Chat with other people</li>
        <li>-Infinite connection requests per day</li>
        <li>-Account verification for upto 12 months</li>
    </ul>
    <button onClick={()=>handleBuyClick("gold")} className="btn bg-gray-500 text-white">Buy Gold</button>
  </div>
</div>
  )
}

export default Premium;