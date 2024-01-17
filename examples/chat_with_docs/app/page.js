"use strict";
// page.tsx
"use client";
// page.tsx
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Context_1 = require("@/components/Context");
const Header_1 = __importDefault(require("@/components/Header"));
const Chat_1 = __importDefault(require("@/components/Chat"));
const react_2 = require("ai/react");
const InstructionModal_1 = __importDefault(require("./components/InstructionModal"));
const ai_1 = require("react-icons/ai");
const Page = () => {
    const [gotMessages, setGotMessages] = (0, react_1.useState)(false);
    const [context, setContext] = (0, react_1.useState)(null);
    const [isModalOpen, setModalOpen] = (0, react_1.useState)(false);
    const { messages, input, handleInputChange, handleSubmit } = (0, react_2.useChat)({
        onFinish: () => __awaiter(void 0, void 0, void 0, function* () {
            setGotMessages(true);
        }),
    });
    const prevMessagesLengthRef = (0, react_1.useRef)(messages.length);
    const handleMessageSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        handleSubmit(e);
        setContext(null);
        setGotMessages(false);
    });
    (0, react_1.useEffect)(() => {
        const getContext = () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch("/api/context", {
                method: "POST",
                body: JSON.stringify({
                    messages,
                }),
            });
            const { context } = yield response.json();
            setContext(context.map((c) => c.id));
        });
        if (gotMessages && messages.length >= prevMessagesLengthRef.current) {
            getContext();
        }
        prevMessagesLengthRef.current = messages.length;
    }, [messages, gotMessages]);
    return (<div className="flex flex-col justify-between h-screen bg-gray-800 p-2 mx-auto max-w-full">
      <Header_1.default className="my-5"/>
      <a className="fixed left-4 top-4 md:right-14 md:top-6 text-xl text-white" href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpinecone-io%2Fpinecone-vercel-starter&env=OPENAI_API_KEY,PINECONE_API_KEY,PINECONE_ENVIRONMENT,PINECONE_INDEX&envDescription=API%20Keys%20needed%20to%20run%20the%20application&envLink=https%3A%2F%2Fdocs.pinecone.io%2Fdocs%2Fprojects%23api-keys&project-name=my-awesome-pinecone-vercel-project&repository-name=my-awesome-pinecone-vercel-project&demo-title=Pinecone%20%2B%20Vercel%20AI%20SDK%20Starter&demo-description=A%20Next.js%20starter%20chatbot%20using%20Vercel's%20AI%20SDK%20and%20implements%20the%20Retrieval-Augmented%20Generation%20(RAG)%20pattern%20with%20Pinecone&demo-url=https%3A%2F%2Fpinecone-vercel-example.vercel.app%2F&demo-image=https%3A%2F%2Fvercel.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fimages.ctfassets.net%252Fe5382hct74si%252F1G4xSqx0bCgVVv3aY3rrX4%252Ffa27791c39ddf058995561d794a68710%252FCleanShot_2023-07-21_at_11.55.49.png%26w%3D3840%26q%3D75%26dpl%3Ddpl_5bh93Tz7wfj1PdxgzMGwNCc1nAxA">
        <img src="https://vercel.com/button" alt="Deploy with Vercel"/>
      </a>

      <button onClick={() => {
            window.open("https://github.com/pinecone-io/pinecone-vercel-starter", "_blank");
        }} className="fixed right-12 top-4 md:right-12 md:top-6 text-xl text-white github-button">
        <ai_1.AiFillGithub />
      </button>

      <button onClick={() => setModalOpen(true)} className="fixed right-4 top-4 md:right-6 md:top-6 text-xl text-white animate-pulse-once info-button">
        <ai_1.AiOutlineInfoCircle />
      </button>

      <InstructionModal_1.default isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
      <div className="flex w-full flex-grow overflow-hidden relative">
        <Chat_1.default input={input} handleInputChange={handleInputChange} handleMessageSubmit={handleMessageSubmit} messages={messages}/>
        <div className="absolute transform translate-x-full transition-transform duration-500 ease-in-out right-0 w-2/3 h-full bg-gray-700 overflow-y-auto lg:static lg:translate-x-0 lg:w-2/5 lg:mx-2 rounded-lg">
          <Context_1.Context className="" selected={context}/>
        </div>
        <button type="button" className="absolute left-20 transform -translate-x-12 bg-gray-800 text-white rounded-l py-2 px-4 lg:hidden" onClick={(e) => {
            var _a, _b;
            (_b = (_a = e.currentTarget.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(".transform")) === null || _b === void 0 ? void 0 : _b.classList.toggle("translate-x-full");
        }}>
          ☰
        </button>
      </div>
    </div>);
};
exports.default = Page;
