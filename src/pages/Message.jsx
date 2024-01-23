import React from "react";

const Message = () => {
  const messages = [];
  return (
    <div className="message">
      <h3>Message</h3>
      <div className="message_body">
        {messages.length > 0 ? (
          <div className="message_content">
            {messages.map((item, index) => (
              <div key={item.id}>
                <div>
                  <div>
                    <h3>
                      {item.body} <span>{item.title}</span>
                    </h3>
                    <p>{item.created_at} ago</p>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        ) : (
          <div className="message_">
            <p>No Message</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
