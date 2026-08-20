import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

export default function AppShell() {
  return <div className="appShell">
    <Header />
    <div className="layoutGrid">
      <Sidebar />
      <main className="mainContent"><Outlet /></main>
      <RightSidebar />
    </div>
    <footer className="footerBar"><span>▣ <b>Secure Payments</b><small>100% Protected</small></span><span>♧ <b>24/7 Support</b><small>We're here to help</small></span><span>♛ <b>Trusted by Millions</b><small>Your trust, our promise</small></span></footer>
  </div>;
}
