import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentsPage from "./pages/components_06-07-2026/ComponentsPage";
import PropsPage from "./pages/props_07-07-2026/PropsPage";
import StatemanagmentPage from "./pages/Statemangement_08-07-2026/StatemanagementPage";
import FetchApi1 from "./pages/FetchApi_10-07-2026/FetchApi1";
import ContextApp from "./pages/ContextApp";
import Redux from "./pages/Redux_16-07-2026/Redux";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FetchApi1 />} />   {/* Default Route */}

        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/props" element={<PropsPage />} />
        <Route path="/statemanagment" element={<StatemanagmentPage />} />
        <Route path="/FetchApi1" element={<FetchApi1 />} />
          <Route path="/ContextApp" element={<ContextApp/>} />
           <Route path="/Redux" element={<Redux/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
