import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home/Index";
import AppSection from "./containers/Main/Index";

function App() {
  return (
    <main className="border-2 border-black h-[550px] w-[400px] bg-black text-white">
      <AppSection />
      <Home />
    </main>
  );
}

export default App;
