import './MyMessage.css';
export default function MyMessage({message,username}) {
  console.log("message my", message)
  let senderUsername = "";
  let content = "";
  
  if(message && message.id && message.created && message.content &&  message.sender && message.sender.username){
    senderUsername = message.sender.username
    content = message.content
  }
  var mes = ""
  const size = Math.ceil(content.length) 
  var messageSizeClass
  var x = 2
  while (size>x){
    x+=4
  }
 
  messageSizeClass = `col-${1+x}`
  if(senderUsername===username){
    mes = "2"
  }
  return (
    <div className="container">
      <div className="row">
      <div id="cont" className={`message-container${mes}`}>
        <span id="sizeOfMessage" className={`message${mes} bg-custom text-white ${messageSizeClass}`}>
          <span className="text-color">{content}</span>
          </span>
          </div>
      </div>
    </div>
  );
};