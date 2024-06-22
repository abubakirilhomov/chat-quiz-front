import { io } from "socket.io-client";
const socket = io('https://chat-quiz-front.vercel.app/');
export default socket;
