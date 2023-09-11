import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./firebaseConfig";
import { toast } from "react-hot-toast";

const messaging = getMessaging(app);

export function GetToken(setToken, setLoading) {
  toast.remove();
  getToken(messaging, {
    vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
  })
    .then((currentToken) => {
      if (currentToken) {
        setToken(currentToken);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error("Allowed notification for go further");
      setLoading(false);
    });
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      setLoading(true);
      getToken(messaging, {
        vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
      })
        .then((currentToken) => {
          if (currentToken) {
            setToken(currentToken);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Allowed notification for go further");
          setLoading(false);
        });
    }
  });
}
