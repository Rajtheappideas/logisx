import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./firebaseConfig";

const messaging = getMessaging(app);

export function GetToken(setToken) {
  let token = "";
  if (Notification.permission === "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getToken(messaging, {
          vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
        })
          .then((currentToken) => {
            if (currentToken) {
              setToken(currentToken);
            } else {
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  } else {
    getToken(messaging, {
      vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
    })
      .then((currentToken) => {
        if (currentToken) {
          setToken(currentToken);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
