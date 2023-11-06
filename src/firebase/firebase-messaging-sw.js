import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./firebaseConfig";
import { toast } from "react-hot-toast";

const messaging = getMessaging(app);

export function GetToken(setToken, setLoading) {
  toast.loading("Loading...");
  setLoading(true);
  getToken(messaging, {
    vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
  })
    .then((currentToken) => {
      if (currentToken) {
        setToken(currentToken);
        toast.remove();
        setLoading(false);
      }
    })
    .catch((err) => {
      toast.remove();
      toast.error("Allowed notification for go further");
      setToken(null);
      setLoading(false);
    });
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      toast.remove();
      toast.loading("Loading...");
      setLoading(true);
      getToken(messaging, {
        vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
      })
        .then((currentToken) => {
          if (currentToken) {
            setToken(currentToken);
            toast.remove();
            setLoading(false);
          }
        })
        .catch((err) => {
          toast.remove();
          toast.error("Allowed notification for go further");
          setLoading(false);
          setToken(null);
        });
    }
  });
}
