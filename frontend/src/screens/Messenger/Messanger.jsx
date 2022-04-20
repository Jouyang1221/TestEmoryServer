import "./messanger.css";
import {Row, Col, Container } from "react-bootstrap"
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/message";

export default function Messanger() {
  return (
    <div>
      <div className="messanger ">
        {/*<Row>*/}
          <Col>
        <div className="chatMenu card">
          <div className="chatMenuWrapper">
            <input placeholder="search for friends" type = "text" className="chatMenuInput" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        </Col>
        <Col>
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
        </Col>
        {/*</Row>*/}
      </div>
    </div>
  );
}
