import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app container mx-auto">
      <Toaster />
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
