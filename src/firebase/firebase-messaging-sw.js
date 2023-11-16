import { getMessaging, getToken } from "firebase/messaging";
import { app } from "./firebaseConfig";
import { toast } from "react-hot-toast";

const messaging = getMessaging(app);

export function GetToken(fcmToken, setToken, setLoading) {
  if (window.Notification.permission === "denied") {
    toast.remove();
    toast.error(
      "You have notification, please allowed notification for login to this site."
    );
    return;
  }

  if (fcmToken !== null) return;
  // toast.loading("Loading...");
  // setLoading(true);
  // getToken(messaging, {
  //   vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
  // })
  //   .then((token) => {
  //     console.log(token);
  //     toast.remove();
  //     setLoading(false);
  //     setToken(token);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  //   .finally(() => {
  //     setLoading(false);
  //   });

  window.Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      toast.remove();
      toast.loading("Loading...");
      setLoading(true);

      return getToken(messaging, {
        vapidKey: process.env.REACT_APP_CLOUD_MESSAGING_KEY,
      })
        .then((currentToken) => {
          toast.remove();
          setToken(currentToken);
          setLoading(false);
        })
        .catch((err) => {
          toast.remove();
          toast.error("Allowed notification for go further");
          setLoading(false);
          setToken(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      return toast("please allowed notifications.");
    }
  });
}

/* eslint-disable no-undef */
// window.importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// window.importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
// messaging?.onBackgroundMessage(function (payload) {
//   console.log("Received background message ", payload);
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };
//   window.self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   ); /* eslint-disable-line no-restricted-globals */
// });
