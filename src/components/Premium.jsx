import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Premium = () => {
const user= useSelector((store) => store.user);
const [isUserPremium,setIsUserPremium]= useState(false);

useEffect(()=>{
  verifyPremiumUser();
},[]);

const verifyPremiumUser = async() => {
  const res= await axios.get(BASE_URL+ "/premium/verify",{withCredentials:true});
 if(res.data.isPremium){
    setIsUserPremium(true);
  }
}

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
        handler: verifyPremiumUser,
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
 } 

  return isUserPremium ? (<div className="min-h-screen flex items-center justify-center">
  <div className="card w-96 bg-base-300 card-lg shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Yay!</h2>
      <p>You're already a premium member</p>
    </div>
  </div>
</div>
) : (
   <div className="min-h-screen flex items-center justify-center bg-base-200">
  <div className="flex flex-col md:flex-row items-center gap-8">
    
 <div className="card w-96 h-[450px] bg-base-100 shadow-sm">
      <div className="card-body flex flex-col">
        <span className="badge badge-xs badge-warning">Most Popular</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Silver</h2>
          <span className="text-xl">₹500/mo</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs flex-grow">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-base">Chat with your connections</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-base">Upto 100 requests per day</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-base">Profile verification for upto 6 months</span>
          </li>
        </ul>
        <div className="mt-auto">
          <button className="btn btn-primary btn-block" onClick={() => handleBuyClick("silver")}>Subscribe</button>
        </div>
      </div>
    </div>
    <div className="hidden md:flex justify-center items-center text-lg font-semibold">OR</div>
<div className="card w-96 h-[450px] bg-base-100 shadow-sm">
      <div className="card-body flex fles-col">
        <span className="badge badge-xs badge-warning">Most Popular</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Gold</h2>
          <span className="text-xl">₹1000/mo</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs flex-grow">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-base">Chat with anyone</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-base">Send infinite connection requests per day</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-base">Profile verification for 12 months</span>
          </li>
        </ul>
        <div className="mt-auto">
          <button className="btn btn-primary btn-block" onClick={() => handleBuyClick("gold")}>Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Premium;