import "./messanger.css";

import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/message";

export default function Messanger() {
  return (
    <>
      <div className="messanger">
        <div className="chatMenu card">
          <div className="chatMenuWrapper">
            <input placeholder="search for friends" className="chatMenuInput" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox card">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own="true" />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write a message here"
              ></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
