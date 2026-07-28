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
import UseEffect from "./pages/UseEffect_page_21-07-2026/UseEffect"
import RegistrationForm2Page from "./pages/Comtrolled_component_page_22-07-2026/RegistrationForm2Page";
import RegistrationFormTask from "./MiniAssessment/Controlled_Compontent_22-07-2026/RegistrationFormtask";

import IfCondition from "./pages/CompleteRevision_24-07_2026/IfCondition";
import TernaryOpertor1 from "./pages/CompleteRevision_24-07_2026/TernaryOpertor1";
import Usee from "./pages/CompleteRevision_24-07_2026/Usee";
import Hook from "./pages/Hooks_page_28-07-2026/Hook";
import UseFrom from "./pages/Hooks_page_28-07-2026/UseFrom";
import WindowSize1 from "./pages/Hooks_page_28-07-2026/windowSize1";
import WithAuth1 from "./pages/Hoc_28-07-2026/WithAuth1";
import WithLoading1 from "./pages/Hoc_28-07-2026/WithLoading1";




function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
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

       
        <Route
          path="/RegistrationFrom2Page"
          element={<RegistrationForm2Page />}
        />

        <Route
          path="/RegistrationFromTask"
          element={<RegistrationFormTask />}
        />

        {/* useEffect */}
        <Route
          path="/UseEffect1"
          element={<UseEffect />}
        />

      

        {/* Complete Revision */}
        <Route
          path="/IfCondition"
          element={<IfCondition />}
        />

        <Route
          path="/TernaryOpertor1"
          element={<TernaryOpertor1 />}
        />

        <Route
          path="/Usee"
          element={<Usee />}
        />


    

      
        <Route
          path="Hook"
          element={<Hook />}
        />
        <Route
          path="UseFrom"
          element={<UseFrom />}
        />

          <Route
          path="WindowSize1"
          element={<WindowSize1 />}
        />
            <Route
          path="WithAuth1"
          element={<WithAuth1 />}
        />
           <Route
          path="WithLoading1"
          element={<WithLoading1 />}
        />



      </Routes>
    </BrowserRouter>
  );
}

export default App;