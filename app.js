
const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");

const userData={
  message:null
}

//create message element with dynamic classes and return it
const createMessageElement = (content, classes)=>{
  const div = document.createElement("div");
  div.classList.add("message",classes);
  div.innerHTML=content;
  return div;
}

//Handle outgoing user messages
const handleOutGoingMessage =(e)=>{
  e.preventDefault();
  userData.message=messageInput.value.trim();

  //create and dislay user message
  const messageContent = `<div class="message-text">${userData.message}</div>`;
  const outgoingMessageDiv = createMessageElement(messageContent,"user-message");
  chatBody.appendChild(outgoingMessageDiv);
}

//Handle Enter key press for sending message
messageInput.addEventListener("keydown",(e)=>{
  const userMessage = e.target.value.trim();
  if(e.key ==="Enter" && userMessage){
    handleOutGoingMessage(e);
  }
})

sendMessageButton.addEventListener("click",(e)=>{
  handleOutGoingMessage(e);
  

});
