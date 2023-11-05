
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from "./components/AboutIconLink"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"

const App = () => {

   return (
      <FeedbackProvider>
         <BrowserRouter>
            <Header />
            <div className="container">
               <Routes>
                  <Route
                     exact
                     path="/"
                     element={
                        <>
                           <FeedbackForm />
                           <FeedbackStats />
                           <FeedbackList />
                        </>
                     }
                  />

                  <Route path="/about" element={<AboutPage />} />
               </Routes>

               <AboutIconLink />
            </div>
         </BrowserRouter>
      </FeedbackProvider>
   )
}

export default App
