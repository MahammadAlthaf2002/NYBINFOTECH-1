import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComponentsPage from "./pages/components_06-07-2026/ComponentsPage";
import PropsPage from "./pages/props_07-07-2026/PropsPage";
import StatemanagmentPage from "./pages/Statemangement_08-07-2026/StatemanagementPage";
import FetchApi1 from "./pages/FetchApi_10-07-2026/FetchApi1";
import FetchApi2 from "./pages/Fetchapi/FetchApi2";
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
import UseEffect from "./pages/UseEffect_page_21-07-2026/UseEffect";
import FetchApi3 from "./pages/AxiosApi/FetchApi3";

// Change this import according to your folder name
import FetchApi5 from "./pages/MiniAssessment/FetchApi5";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<FetchApi2 />} />

        {/* Components */}
        <Route path="/components" element={<ComponentsPage />} />

        {/* Props */}
        <Route path="/props" element={<PropsPage />} />

        {/* State Management */}
        <Route
          path="/statemanagment"
          element={<StatemanagmentPage />}
        />

        {/* Fetch API */}
        <Route
          path="/FetchApi1"
          element={<FetchApi1 />}
        />

        <Route
          path="/FetchApi2"
          element={<FetchApi2 />}
        />

        <Route
          path="/FetchApi3"
          element={<FetchApi3 />}
        />

        <Route
          path="/FetchApi5"
          element={<FetchApi5 />}
        />

        {/* Context API */}
        <Route
          path="/ContextApp"
          element={<ContextApp />}
        />

        {/* Redux */}
        <Route
          path="/Redux"
          element={<Redux />}
        />

        {/* Conditional Rendering */}
        <Route
          path="/IfConditional2"
          element={<IfConditional2 />}
        />

        <Route
          path="/TernaryConditional"
          element={<TernaryConditionalPage />}
        />

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

        {/* Event Handling */}
        <Route
          path="/OnClick"
          element={<OnClick />}
        />

        <Route
          path="/OnDoubleClickEvent"
          element={<OnDoubleClickEventPage />}
        />

        {/* Controlled Components */}
        <Route
          path="/TextBox"
          element={<TextBox />}
        />

        {/* useEffect */}
        <Route
          path="/UseEffect1"
          element={<UseEffect />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;