import Header from "../components_15-07-2026/Header";
import Profile from "../components_15-07-2026/Profile";
import Theme from "../components_15-07-2026/Theme";
import AppProvider from "../context/AppContext";

function ContextApp() {
  return (
    <AppProvider>
      <h1>Context API Example</h1>

      <Header />
      <Profile />
      <Theme />
    </AppProvider>
  );
}

export default ContextApp;