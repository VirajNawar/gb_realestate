import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App bg-[#090D2B] text-white min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
