import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./pages/Components";
import Props from "./pages/Props";
import Statemanagment from "./pages/Statemanagment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components" element={<Components />} />
         <Route path="/props" element={<Props />} />
          <Route path="/statemanagment" element={<Statemanagment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;