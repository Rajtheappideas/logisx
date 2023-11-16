const { onBackgroundMessage } = require("firebase/firebase-messaging-sw");
const { firebaseConfig } = require("../src/firebase/firebaseConfig");

// Scripts for firebase and firebase messaging
window.importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
);
window.importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js"
);

// const firebase = firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging?.
onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  window.self.registration.showNotification(notificationTitle, notificationOptions);
});
