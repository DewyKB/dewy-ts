'use client'
 
import { useState } from 'react';
import { useUIState, useActions } from "ai/rsc";
import type { AI } from './action';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
 
import UserMessage from "./UserMessage";
import { PlaneIcon } from "./icons";

export default function Page() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions<typeof AI>();
 
  return (
    <>
      <div className="flex-1 overflow-auto px-4 mt-4">
        <div className="grid gap-4 md:gap-8">
          {
            messages.map((message) => (
              <div key={message.id}>
                {message.display}
              </div>
            ))
          }

        </div>
      </div>

      <form onSubmit={async (e) => {
        e.preventDefault();

        // Add user message to UI state
        setMessages((currentMessages) => [
          ...currentMessages,
          {
            id: Date.now(),
            display: <UserMessage>{inputValue}</UserMessage>,
          },
        ]);

        // Submit and get response message
        const responseMessage = await submitUserMessage(inputValue);
        setMessages((currentMessages) => [
          ...currentMessages,
          responseMessage,
        ]);

        setInputValue('');
      }}>
        <div className="border-t-2">
          <div className="flex items-center h-14 px-4">
            <Input
              className="rounded-full flex-1 min-w-0 bg-gray-200 dark:bg-gray-800"
              placeholder="Type a message..."
              value={inputValue}
              type="text"
              onChange={(event) => {
                setInputValue(event.target.value)
              }}
            />
            <Button className="ml-2 h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800" size="icon">
              <PlaneIcon className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}