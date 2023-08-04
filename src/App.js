import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TellUsAbout from "./components/Signup/TellUsAbout";
import Shipping from "./components/Signup/Shipping";
import Location from "./components/Signup/Location";
import UploadDocs from "./components/Signup/UploadDocs";
import Review from "./components/Signup/Review";
import AccountSubmit from "./components/AccountSubmit";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./components/Forgot/Verification";
import ResetPassword from "./components/Forgot/ResetPassword";
import VerificationSuccess from "./components/Forgot/VerificationSuccess";
import { Toaster } from "react-hot-toast";
import ErrorFallBack from "./components/ErrorFallBack";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
// import Chat from './components/Chat'
import loading from "./assets/animations/trackLoading.json";
import Lottie from "lottie-react";

function App() {
  return (
    <BrowserRouter>
      <Toaster toastOptions={{ duration: 4000 }} position="top-center" />
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
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" caseSensitive element={<SignIn />} />
            <Route path="/sign-up" caseSensitive element={<SignUp />} />
            <Route path="/tell-us-about-you" element={<TellUsAbout />} />
            <Route path="/shipping-manager" element={<Shipping />} />
            <Route path="/terminal-location" element={<Location />} />
            <Route path="/upload-docs" element={<UploadDocs />} />
            <Route path="/review" element={<Review />} />
            <Route path="/account-submit" element={<AccountSubmit />} />
            <Route
              path="/forgot-password"
              caseSensitive
              element={<ForgotPassword />}
            />
            <Route path="/verification" element={<Verification />} />

            <Route
              path="/verification-success"
              element={<VerificationSuccess />}
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
