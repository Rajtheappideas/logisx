import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import TellUsAbout from './components/Signup/TellUsAbout'
import Shipping from './components/Signup/Shipping'
import Location from './components/Signup/Location'
import UploadDocs from './components/Signup/UploadDocs'
import Review from './components/Signup/Review'
import AccountSubmit from './components/AccountSubmit'
import ForgotPassword from './pages/ForgotPassword'
import Verification from './components/Forgot/Verification'
import ResetPassword from './components/Forgot/ResetPassword'
import VerificationSuccess from './components/Forgot/VerificationSuccess'
// import Chat from './components/Chat'

function App() {
  return (
    <BrowserRouter>
      {/* <Chat /> */}
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tell-us-about-you" element={<TellUsAbout />} />
        <Route path="/shipping-manager" element={<Shipping />} />
        <Route path="/terminal-location" element={<Location />} />
        <Route path="/upload-docs" element={<UploadDocs />} />
        <Route path="/review" element={<Review />} />
        <Route path="/account-submit" element={<AccountSubmit />} />
        {/* Forgot Password */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verification-success" element={<VerificationSuccess />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
