
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import Diabetes from "./pages/Diabetes";
import HighBloodPressure from "./pages/HighBloodPressure";
import Depression from "./pages/Depression";
import Cancer from "./pages/Cancer";
import Obesity from "./pages/Obesity";
import HivAids from "./pages/HivAids";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/diabetes" element={<Diabetes />} />
                  <Route path="/high-blood-pressure" element={<HighBloodPressure />} />
                  <Route path="/depression" element={<Depression />} />
                  <Route path="/cancer" element={<Cancer />} />
                  <Route path="/obesity" element={<Obesity />} />
                  <Route path="/hiv-aids" element={<HivAids />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
      
      <Footer />
      </div>
    </>
  )
}

export default App
