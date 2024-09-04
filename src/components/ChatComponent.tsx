import React, { useState } from 'react';

interface Message {
  user?: string;
  support?: string;
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([{ support: 'Hi, how can I help you?' }]);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessages = [...messages, { user: input }];
      setMessages(newMessages);
      setInput('');
      setTimeout(() => {
        setMessages([...newMessages, { support: 'Thank you for reaching out! How can I assist you?' }]);
      }, 1000);
    }
  };

  return (
    <div className="p-5 w-full max-w-md mx-auto h-screen bg-gray-100 flex flex-col justify-between">
      <div className="flex justify-center mb-2">
        <h1 className="text-xl font-bold">Customer Support</h1>
      </div>
      <div className="flex flex-col space-y-2 p-3 bg-white rounded-lg h-3/4 border border-gray-300 overflow-y-scroll">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.user ? 'justify-end' : 'justify-start'}`}>
            <p className={`p-2 rounded-lg ${message.user ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {message.user || message.support}
            </p>
          </div>
        ))}
      </div>
      <div className="flex mt-2 space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          aria-label="Type a message"
          className="flex-1 p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSendMessage}
          aria-label="Send message"
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
