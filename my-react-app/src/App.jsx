import { BrowserRouter, Route, Routes } from "react-router-dom";
import Components from "../../React_Project_07-07-2026/src/pages/Components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/component" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;