import { io } from "socket.io-client";
const socket = io('chat-quiz-back.vercel.app');
export default socket;
