// page.tsx

"use client";

import React, { useEffect, useRef, useState, FormEvent } from "react";
import Header from "@/app/components/Header";
import Chat from "@/app/components/Chat";
import InstructionModal from "@/app/components/InstructionModal";
import { useChat } from "ai/react";
import { AiFillGithub, AiOutlineInfoCircle } from "react-icons/ai";

const Page: React.FC = () => {
  const [gotMessages, setGotMessages] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onFinish: async () => {
      setGotMessages(true);
    },
  });

  const prevMessagesLengthRef = useRef(messages.length);

  const handleMessageSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    setGotMessages(false);
  };

  useEffect(() => {
    prevMessagesLengthRef.current = messages.length;
  }, [messages, gotMessages]);

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-800 p-2 mx-auto max-w-full">
      <Header className="my-5" />
      <a
        className="fixed left-4 top-4 md:right-14 md:top-6 text-xl text-white"
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpinecone-io%2Fpinecone-vercel-starter&env=OPENAI_API_KEY,PINECONE_API_KEY,PINECONE_ENVIRONMENT,PINECONE_INDEX&envDescription=API%20Keys%20needed%20to%20run%20the%20application&envLink=https%3A%2F%2Fdocs.pinecone.io%2Fdocs%2Fprojects%23api-keys&project-name=my-awesome-pinecone-vercel-project&repository-name=my-awesome-pinecone-vercel-project&demo-title=Pinecone%20%2B%20Vercel%20AI%20SDK%20Starter&demo-description=A%20Next.js%20starter%20chatbot%20using%20Vercel's%20AI%20SDK%20and%20implements%20the%20Retrieval-Augmented%20Generation%20(RAG)%20pattern%20with%20Pinecone&demo-url=https%3A%2F%2Fpinecone-vercel-example.vercel.app%2F&demo-image=https%3A%2F%2Fvercel.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fimages.ctfassets.net%252Fe5382hct74si%252F1G4xSqx0bCgVVv3aY3rrX4%252Ffa27791c39ddf058995561d794a68710%252FCleanShot_2023-07-21_at_11.55.49.png%26w%3D3840%26q%3D75%26dpl%3Ddpl_5bh93Tz7wfj1PdxgzMGwNCc1nAxA"
      >
        <img src="https://vercel.com/button" alt="Deploy with Vercel" />
      </a>

      <button
        onClick={() => {
          window.open(
            "https://github.com/pinecone-io/pinecone-vercel-starter",
            "_blank"
          );
        }}
        className="fixed right-12 top-4 md:right-12 md:top-6 text-xl text-white github-button"
      >
        <AiFillGithub />
      </button>

      <button
        onClick={() => setModalOpen(true)}
        className="fixed right-4 top-4 md:right-6 md:top-6 text-xl text-white animate-pulse-once info-button"
      >
        <AiOutlineInfoCircle />
      </button>

      <InstructionModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="flex w-full flex-grow overflow-hidden relative">
        <Chat
          input={input}
          handleInputChange={handleInputChange}
          handleMessageSubmit={handleMessageSubmit}
          messages={messages}
        />
        <button
          type="button"
          className="absolute left-20 transform -translate-x-12 bg-gray-800 text-white rounded-l py-2 px-4 lg:hidden"
          onClick={(e) => {
            e.currentTarget.parentElement
              ?.querySelector(".transform")
              ?.classList.toggle("translate-x-full");
          }}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default Page;