'use client';
 
import { useChat } from 'ai/react';
import AddFromUrl from './components/AddFromUrl';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
 
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-10 w-full max-w-md p-2 mb-8 border border-gray-300 rounded "
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
      <AddFromUrl className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"/>
    </div>
  );
}