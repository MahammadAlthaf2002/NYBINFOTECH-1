import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentsPage from "./pages/components_06-07-2026/ComponentsPage";
import PropsPage from "./pages/props_07-07-2026/PropsPage";
import StatemanagmentPage from "./pages/Statemangement_08-07-2026/StatemanagementPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components" element={<ComponentsPage />} />
         <Route path="/props" element={<PropsPage />} />
          <Route path="/statemanagment" element={<StatemanagmentPage />} />
        
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;