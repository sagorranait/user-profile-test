import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="app container mx-auto">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
