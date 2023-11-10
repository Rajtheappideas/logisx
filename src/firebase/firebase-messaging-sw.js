import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./firebaseConfig";
import { toast } from "react-hot-toast";

const messaging = getMessaging(app);

export async function GetToken(fcmToken, setToken, setLoading) {
  if (Notification.permission === "denied") {
    toast.remove();
    toast.error(
      "You have notification, please allowed notification for login to this site."
    );
    setLoading(false);
    return;
  }
  if (fcmToken !== null) return setLoading(false);
  try {
    toast.loading("Loading...");
    setLoading(true);

    const token = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
    });
    setToken(token);
    toast.remove();
    setLoading(false);
  } catch (error) {
    toast.remove();
    toast.error("Allowed notification for go further");
    setLoading(false);
    setToken(null);
  }

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      toast.remove();
      toast.loading("Loading...");
      setLoading(true);

      try {
        const token = getToken(messaging, {
          vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
        });
        setToken(token);
        toast.remove();
        setLoading(false);
      } catch (error) {
        toast.remove();
        toast.error("Allowed notification for go further");
        setLoading(false);
        setToken(null);
      }
      // getToken(messaging, {
      //   vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
      // })
      //   .then((currentToken) => {
      //     if (currentToken) {
      //       toast.remove();
      //       setToken(currentToken);
      //       setLoading(false);
      //     }
      //   })
      //   .catch((err) => {
      //     toast.remove();
      //     toast.error("Allowed notification for go further");
      //     setLoading(false);
      //     setToken(null);
      //   });
    }
  });
}
