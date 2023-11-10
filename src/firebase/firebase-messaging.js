import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./firebaseConfig";
import { toast } from "react-hot-toast";

const messaging = getMessaging(app);

export function onMessageListner() {
  new Promise((res, rej) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      res(payload);
    });
  });
}
