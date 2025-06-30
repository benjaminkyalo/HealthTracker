import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Diabetes from "./pages/Diabetes";
import HighBloodPressure from "./pages/HighBloodPressure";
import Depression from "./pages/Depression";
import Cancer from "./pages/Cancer";
import Obesity from "./pages/Obesity";
import HivAids from "./pages/HivAids";
import NotFound from "./pages/NotFound";

const App = () => (
  
    <HelmetProvider>
      
          <BrowserRouter>
            <div className="min-h-screen flex flex-col w-full">
              <Header />
               <main className="bg-background text-foreground">
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
          </BrowserRouter>
        
      
    </HelmetProvider>
 
);

export default App;
