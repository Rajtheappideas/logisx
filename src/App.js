import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import toast, { Toaster } from "react-hot-toast";
import ErrorFallBack from "./components/ErrorFallBack";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import loading from "./assets/animations/trackLoading.json";
import Lottie from "lottie-react";
import PageNotFound from "./pages/PageNotFound";
import PrivateRoute from "./pages/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  loginAllTabsEventListener,
  logoutAllTabsEventListener,
} from "./redux/globalStates";
import { onMessageListener } from "./firebase/firebase-messaging-sw";
import { useState } from "react";
import { socket } from "./Socket";

function App() {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAllTabsEventListener());
    dispatch(logoutAllTabsEventListener());
  }, []);
  onMessageListener()
    .then((res) => {
      console.log(res);
      // toast(res?.)
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <BrowserRouter>
      <Toaster toastOptions={{ duration: 3000 }} position="top-center" />
      <ErrorBoundary
        FallbackComponent={ErrorFallBack}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Suspense
          fallback={
            <div className="relative top-0 left-0 overflow-hidden w-screen max-w-[100vw] min-h-screen max-h-screen">
              <Lottie
                style={{
                  pointerEvents: "none",
                  height: "300px",
                  width: "300px",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-full"
                animationData={loading}
                loop
              />
            </div>
          }
        >
          {/* <Chat /> */}
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/auth" caseSensitive element={<Auth />} />
            <Route
              path="/forgot-password"
              caseSensitive
              element={<ForgotPassword />}
            />

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
