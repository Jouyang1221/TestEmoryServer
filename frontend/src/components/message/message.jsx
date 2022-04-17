import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon-berger-1266810.jpg&fm=jpg"
          alt=""
        />
        <p className="messageText">
          {" "}
          Hello world this is a message Hello world this is a message Hello
          world this is a message
        </p>
      </div>
      <div className="messageBottom"> 1 hour ago</div>
    </div>
  );
}
