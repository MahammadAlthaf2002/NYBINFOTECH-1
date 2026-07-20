import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentsPage from "./pages/components_06-07-2026/ComponentsPage";
import PropsPage from "./pages/props_07-07-2026/PropsPage";
import StatemanagmentPage from "./pages/Statemangement_08-07-2026/StatemanagementPage";
import FetchApi1 from "./pages/FetchApi_10-07-2026/FetchApi1";
import ContextApp from "./pages/ContextApp";
import Redux from "./pages/Redux_16-07-2026/Redux";
import IfConditional2 from "./pages/ConditionalRenderings/IfConditional2";
import TernaryConditionalPage from "./pages/ConditionalRenderings/TernaryConditionalPage";
import AndConditionalPage from "./pages/ConditionalRenderings/AndConditionalPage";
import OrConditionalPage from "./pages/ConditionalRenderings/OrConditionalPage";
import SwitchConditionalPage from "./pages/ConditionalRenderings/SwitchConditionalPage";
import OnClick from "./pages/EventHandling/OnClick";
import OnDoubleClickEventPage from "./pages/EventHandling/OnDoubleClickEventPage";
import TextBox from "./pages/Controlled_component_page/TextBox";
import ObjectState from "./Controlled _Components/objectstate";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<FetchApi1 />} />

        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/props" element={<PropsPage />} />
        <Route path="/statemanagment" element={<StatemanagmentPage />} />
        <Route path="/FetchApi1" element={<FetchApi1 />} />
        <Route path="/ContextApp" element={<ContextApp />} />
        <Route path="/Redux" element={<Redux />} />
        <Route path="/IfConditional2" element={<IfConditional2 />} />
        <Route path="/TernaryConditional" element={<TernaryConditionalPage />} />
        <Route
  path="/AndConditional"
  element={<AndConditionalPage />}

/>
<Route
  path="/OrConditional"
  element={<OrConditionalPage />}
/>
<Route
  path="/SwitchConditional"
  element={<SwitchConditionalPage />}
/>
   <Route path="/OnClick" element={<OnClick />} />

<Route
  path="/OnDoubleClickEvent"
  element={<OnDoubleClickEventPage />}
/>
  <Route path="/TextBox" element={<TextBox />} />

<Route path="/Objectstate" element={<ObjectStatecd />} />

      </Routes>
       

      
    </BrowserRouter>
  );
}

export default App;
