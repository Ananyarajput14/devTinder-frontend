import { use, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat=() =>{

const {targetUserId} = useParams();
const user= useSelector((store)=>store.user);
const userId= user?._id;
const [newMessage,setNewMessage]  = useState("");
const [messages, setMessages] = useState([]);
const chatContainerRef = useRef(null);
const [isConnected, setIsConnected] = useState(null); 


const scrollToBottom = () => {
  const container = chatContainerRef.current;
  if (!container) return;

  const threshold = 100; 
  const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < threshold;

  if (isNearBottom) {
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }
};

useEffect(() => {
  scrollToBottom();
}, [messages]);


const fetchChatMessages= async() =>{
  const chat= await axios.get(BASE_URL+"/chat/"+targetUserId,{withCredentials:true});

  const chatMessages = chat.data.messages.map((message) => {
    return {
      firstName: message?.senderId?.firstName,
      text: message?.text,
      photoUrl: message?.senderId?.photoUrl,
    };
  });
  setMessages(chatMessages);
};

useEffect(()=>{
  fetchChatMessages();
},[]);

useEffect(()=>{
  if(!userId){
    return;
  }

  const socket= createSocketConnection();
  socket.emit("joinChat",{userId,targetUserId});
 
 socket.on("joinedChat", () => {
    setIsConnected(true);
  });

  socket.on("chatAccessDenied", () => {
    setIsConnected(false);
    console.warn("Not allowed to chat with this user");
  });

  socket.on("messageReceived",({firstName,text,photoUrl})=>{
    setMessages((messages)=>[...messages,{firstName,text,photoUrl}]);
  })

  return ()=>{
    socket.disconnect();
  }

},[userId,targetUserId]);

const sendMessage = () =>{
  const socket= createSocketConnection();
  socket.emit("sendMessage",{
    firstName: user.firstName,
    userId,
    targetUserId,
    text: newMessage,
    photoUrl: user.photoUrl,
  });
  setNewMessage("");
};

if (isConnected === false) {
  return (
    <div className="flex items-center justify-center h-[75vh] text-center text-red-400 text-xl">
      You are not connected to this user.
    </div>
  );
}

if (isConnected === null) {
  return (
    <div className="flex items-center justify-center h-[75vh] text-center text-gray-300 text-lg">
      Checking chat access...
    </div>
  );
}


  return (
    <div className="flex flex-col h-[75vh] w-1/2 mx-auto bg-base-200 border border-gray-700 m-5 h-screen">
      <h1 className="text-2xl border-b border-gray-700 text-center my-10">
        Chat
      </h1>
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-5">
        {messages.map((message, index) => {
          return (
            <div key={index} className={"chat " + (user.firstName === message.firstName ? "chat-end" : "chat-start")}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                  src={message.photoUrl || "https://img.daisyui.com/images/profile/demo/kenobee@192.webp"}
                  />
                </div>
              </div>
                <div className="font-semibold text-sm mb-1">{message.firstName}</div>
              <div className="chat-bubble">{message.text}</div>
            </div>
          );
        })}
      </div>
      <div className="p-5 border-t border-gray-700 flex items-center gap-3">
        <input
          type="text"
          value={newMessage}
          onChange={(e)=>setNewMessage(e.target.value)}
          placeholder="Type your message here"
          className="input input-md flex-1 text-white bg-slate-800"
        />
        <button onClick={sendMessage} className="btn bg-slate-700 text-gray-300 w-28 ml-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
