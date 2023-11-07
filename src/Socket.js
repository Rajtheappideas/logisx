import { io } from "socket.io-client";

export const socket = io("https://logisx.uc.r.appspot.com", {
  transports: ["websocket", "polling", "flashsocket"],
  autoConnect: false,
})
