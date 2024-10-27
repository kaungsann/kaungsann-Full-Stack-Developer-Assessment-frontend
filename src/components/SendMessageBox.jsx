import { Button, Input } from "@nextui-org/react";
import { Send } from "lucide-react";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // Replace with your server URL

const SendMessageBox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // State to store incoming messages

  useEffect(() => {
    // Connect to the server and listen for messages
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    // Listen for incoming messages
    socket.on("message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Add new message to the list
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Emit the message to the server
      socket.emit("sendMessage", { channel: "general", message });
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div className="p-4 mb-4 flex flex-col">
      <div className="mt-4">
        {messages.map((msg, index) => (
          <p key={index} className="mb-2 text-gray-700">
            {msg}
          </p>
        ))}
      </div>
      <div className="flex">
        <Input
          className="max-w-4/5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <Button
          variant="faded"
          className="mx-6 rounded-md"
          onClick={handleSendMessage}
        >
          <Send className="text-[#6366f1]" /> send
        </Button>
      </div>
    </div>
  );
};

export default SendMessageBox;
