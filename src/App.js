import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import TellUsAbout from './components/Signup/TellUsAbout'
import Shipping from './components/Signup/Shipping'
import Location from './components/Signup/Location'
import UploadDocs from './components/Signup/UploadDocs'
import Review from './components/Signup/Review'
import AccountSubmit from './components/AccountSubmit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tell-us-about-you" element={<TellUsAbout />} />
        <Route path="/shipping-manager" element={<Shipping />} />
        <Route path="/terminal-location" element={<Location />} />
        <Route path="/upload-docs" element={<UploadDocs />} />
        <Route path="/review" element={<Review />} />
        <Route path="/account-submit" element={<AccountSubmit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
